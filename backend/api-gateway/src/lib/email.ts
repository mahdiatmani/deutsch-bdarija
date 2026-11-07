/**
 * Minimal transactional email sender.
 *
 * Uses the Resend HTTP API when RESEND_API_KEY is set (no SDK dependency).
 * Without it, emails are logged to the console in development so flows such
 * as password reset stay testable locally. Returns whether the email was sent.
 */
export async function sendEmail(to: string, subject: string, text: string): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    if (process.env.NODE_ENV !== 'production') {
      console.log(`\n── Email (not sent: RESEND_API_KEY unset) ──\nTo: ${to}\nSubject: ${subject}\n\n${text}\n`);
    } else {
      console.error('Cannot send email: RESEND_API_KEY is not configured');
    }
    return false;
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.EMAIL_FROM || "Deutsch B'Darija <onboarding@resend.dev>",
        to,
        subject,
        text,
      }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) {
      console.error('Email provider error:', res.status, await res.text());
      return false;
    }
    return true;
  } catch (error) {
    console.error('Email send failed:', error);
    return false;
  }
}
