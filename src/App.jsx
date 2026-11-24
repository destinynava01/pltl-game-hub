import { useEffect, useState } from 'react'
import { ComingSoonBox, GameBox } from './GameBox'
import { COMING_SOON, GAMES, link } from './games'

const PICK_KEY = 'pltlHubPick'

function readPick() {
  try {
    const index = GAMES.findIndex((g) => g.id === localStorage.getItem(PICK_KEY))
    return index >= 0 ? index : 0
  } catch {
    return 0
  }
}

// The hub: a shelf of game boxes. Pick one (click, tap, or ←/→ and Enter) and its buttons take you to
// that game's own website.
export default function App() {
  const [pick, setPick] = useState(readPick)
  const game = GAMES[pick]

  // Remember the last game picked on this device
  useEffect(() => {
    try {
      localStorage.setItem(PICK_KEY, game.id)
    } catch {
      // storage blocked: the hub just starts on the first game
    }
  }, [game.id])

  // Arrow keys move along the shelf; Enter hosts the picked game (a classroom clicker works too)
  useEffect(() => {
    function onKey(event) {
      if (event.target.closest?.('a, input, textarea')) return
      if (event.key === 'ArrowRight') setPick((p) => (p + 1) % GAMES.length)
      if (event.key === 'ArrowLeft') setPick((p) => (p - 1 + GAMES.length) % GAMES.length)
      if (event.key === 'Enter' && !event.target.closest?.('button')) window.location.href = link(GAMES[pick])
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [pick])

  const button = 'rounded-xl border-2 px-4 py-3 text-center font-bold transition focus:outline-2 focus:outline-offset-2 focus:outline-glow'

  return (
    <main className="room flex min-h-dvh flex-col items-center px-4 py-8 text-ink">
      <header className="text-center">
        <p className="text-xs font-bold uppercase tracking-[0.4em] text-muted">Peer-Led Team Learning</p>
        <h1 className="title-glow mt-2 font-display text-4xl text-glow sm:text-6xl">PLTL Game Hub</h1>
        <p className="mt-2 text-muted">Pick a game. Every game uses the same question bank, teams, and phones.</p>
      </header>

      {/* The shelf */}
      <section aria-label="Games" className="mt-10 w-full max-w-4xl">
        <div className="flex snap-x items-end gap-4 overflow-x-auto px-6 pb-4 pt-8 sm:justify-center sm:gap-6">
          {GAMES.map((g, i) => (
            <GameBox key={g.id} game={g} picked={i === pick} onPick={() => setPick(i)} />
          ))}
          {Array.from({ length: COMING_SOON }, (_, i) => <ComingSoonBox key={i} />)}
        </div>
        <div className="shelf mx-auto h-4 w-full rounded-sm" />
        <p className="mt-3 hidden text-center text-xs text-muted sm:block">◀ ▶ arrow keys to browse · Enter to host</p>
      </section>

      {/* The picked game */}
      <section aria-live="polite" className="mt-8 w-full max-w-2xl rounded-2xl border-2 border-line bg-dusk/90 p-6 shadow-2xl backdrop-blur">
        <h2 className="font-display text-2xl text-glow">{game.name}</h2>
        <p className="mt-2">{game.tagline}</p>
        <ul className="mt-4 flex flex-wrap gap-2 text-xs font-bold">
          <li className="rounded-full border border-line px-3 py-1 text-muted">👥 {game.teams}</li>
          <li className="rounded-full border border-line px-3 py-1 text-muted">❓ {game.questions}</li>
          <li className="rounded-full border border-line px-3 py-1 text-muted">⭐ Best for: {game.best}</li>
        </ul>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <a href={link(game)} className={`${button} border-glow bg-glow text-on-glow hover:brightness-110 sm:col-span-2`}>
            ▶ Host a game <span className="font-normal">(leaders)</span>
          </a>
          <a href={link(game, 'join')} className={`${button} border-line bg-night/60 hover:border-glow`}>
            📱 Join with a code <span className="block text-xs font-normal text-muted">students</span>
          </a>
          <a href={link(game, 'submit')} className={`${button} border-line bg-night/60 hover:border-glow`}>
            ✎ Submit questions <span className="block text-xs font-normal text-muted">anyone</span>
          </a>
          <a href={link(game, 'review')} className={`${button} border-line bg-night/60 hover:border-glow sm:col-span-2`}>
            ✓ Review questions <span className="text-xs font-normal text-muted">(reviewers sign in)</span>
          </a>
        </div>
      </section>

      <footer className="mt-auto pt-10 text-center text-xs text-muted">
        Each game opens its own site. Questions submitted to one game can be shared with the others.
      </footer>
    </main>
  )
}
