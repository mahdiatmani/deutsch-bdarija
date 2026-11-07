# Important Commands

## Install Dependencies
```bash
pnpm install
```

## Database Setup
```bash
cd backend/api-gateway
pnpm prisma generate
pnpm prisma db push      # schema is managed with db push (migrations/ is outdated)
pnpm prisma db seed
```
Prisma needs `DIRECT_URL` in `backend/api-gateway/.env`; locally `DIRECT_URL="${DATABASE_URL}"` is enough.
Run `pnpm prisma db push` again after pulling schema changes.

## Password reset emails
Set `RESEND_API_KEY` (and `EMAIL_FROM`) in `backend/api-gateway/.env`. Without it, in development
the reset link is printed in the API console.

## Run Development Servers

### Backend (Port 4000)
```bash
cd backend/api-gateway
pnpm dev
```

### Frontend (Port 3000)
```bash
cd frontend
pnpm dev
```

## Build for Production

### Backend
```bash
cd backend/api-gateway
pnpm build
```

### Frontend
```bash
cd frontend
pnpm build
```

## Run Production

### Backend
```bash
cd backend/api-gateway
pnpm start
```

### Frontend
```bash
cd frontend
pnpm start
```

## Prisma Commands
```bash
pnpm prisma studio      # Open database GUI
pnpm prisma migrate dev # Create migration
pnpm prisma db push     # Push schema to database
pnpm prisma generate    # Generate Prisma client
```


## Lesson audio (neural voices, stored in the database)
Lesson texts are spoken by Microsoft's neural German voices (Conrad for Herr Schmidt, and
Katja, Amala, Seraphina, Florian, Killian for the dialogue characters). The audio is generated
once and stored as MP3 in the `LessonAudio` table; `/api/tts` only serves those stored clips, so
no voice server runs. Texts without a clip, and the AI teacher's chat replies, use the browser voice.

Generate the clips after adding or changing lessons (only missing clips are generated, clips no
lesson uses any more are removed):
```bash
cd backend/api-gateway
python -m venv scripts/.venv                                   # first time only
scripts/.venv/Scripts/python -m pip install edge-tts           # (scripts/.venv/bin/python on Linux/macOS)
npx ts-node --transpile-only scripts/generate-lesson-audio.ts           # generate missing clips
npx ts-node --transpile-only scripts/generate-lesson-audio.ts --check   # only count what is missing
```
Voices and the cast live in `frontend/lib/character-voices.ts`. After changing a voice, empty the
table (`DELETE FROM "LessonAudio";`), run the script again and bump `AUDIO_CACHE` in
`frontend/hooks/use-german-speech.ts` so browsers drop their cached copies.
