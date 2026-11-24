# PLTL Game Hub

The front door for the PLTL study games. A shelf of game boxes; pick one (click, tap, or ←/→ and Enter)
and **Host** launches that game's leader lobby (students join from the code shown there). Each game also shows a
description, what it's recommended for, and how to play. Questions are submitted and reviewed on each game's own site.

| Game | Site |
|---|---|
| Jeopardy | https://biology-jeopardy.vercel.app |
| Monopoly | https://pltl-monopoly.vercel.app |
| Escape Room | https://pltl-escape-room.vercel.app |

This site has no backend: it only links to the games, which share one Supabase project.

## Add a game

1. Add an entry to `src/games.js` (name, tagline, description, recommended for, how-to-play steps, subjects, team count, question type, site address).
2. Add its box art to `src/GameBox.jsx` (an `ART` entry with the same `id`).
3. Lower `COMING_SOON` in `src/games.js` if the new game takes a "coming soon" spot.

## Run it

```
npm install
npm run dev
```

Vercel builds it with no environment variables.
