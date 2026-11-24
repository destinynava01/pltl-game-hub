# PLTL Game Hub

The front door for the PLTL study games. A shelf of game boxes; pick one (click, tap, or ←/→ and Enter)
and its buttons go to that game's own site: **Host** (leader lobby), **Join** (students' phones),
**Submit questions**, and **Review**.

| Game | Site |
|---|---|
| Jeopardy | https://biology-jeopardy.vercel.app |
| Monopoly | https://pltl-monopoly.vercel.app |
| Escape Room | https://pltl-escape-room.vercel.app |

This site has no backend: it only links to the games, which share one Supabase project.

## Add a game

1. Add an entry to `src/games.js` (name, description, team count, question type, site address).
2. Add its box art to `src/GameBox.jsx` (an `ART` entry with the same `id`).
3. Lower `COMING_SOON` in `src/games.js` if the new game takes a "coming soon" spot.

## Run it

```
npm install
npm run dev
```

Vercel builds it with no environment variables.
