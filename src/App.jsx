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
      <section aria-label="Games" className="mt-10 w-full max-w-6xl">
        {/* Centered when the boxes fit, scrolling from the first box when they don't (auto margins on the
            ends instead of justify-center, which would push the first box out of reach) */}
        <div className="flex snap-x items-end gap-4 overflow-x-auto px-6 pb-4 pt-8 sm:gap-5 [&>*:first-child]:ml-auto [&>*:last-child]:mr-auto">
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
        <p className="mt-1 font-bold text-muted">{game.tagline}</p>
        <p className="mt-3 leading-relaxed">{game.description}</p>

        {/* What it's best for, front and center */}
        <p className="mt-4 rounded-xl border-2 border-glow/60 bg-night/60 px-4 py-3">
          <span className="text-xs font-bold uppercase tracking-widest text-glow">⭐ Recommended for</span>
          <span className="mt-0.5 block text-lg font-bold">{game.best}</span>
        </p>

        <ul className="mt-3 flex flex-wrap gap-2 text-xs font-bold">
          <li className={`rounded-full border px-3 py-1 ${game.subjects === 'Any subject' ? 'border-line text-muted' : 'border-glow text-glow'}`}>
            📚 {game.subjects}
          </li>
          <li className="rounded-full border border-line px-3 py-1 text-muted">👥 {game.teams}</li>
          <li className="rounded-full border border-line px-3 py-1 text-muted">❓ {game.questions}</li>
        </ul>

        <h3 className="mt-6 font-display text-sm uppercase tracking-widest text-glow">How to play</h3>
        <ol className="mt-2 space-y-2">
          {game.howToPlay.map((step, i) => (
            <li key={i} className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-glow text-xs font-black text-on-glow">{i + 1}</span>
              <span className="text-sm leading-relaxed">{step}</span>
            </li>
          ))}
        </ol>

        <a href={link(game)} className={`${button} mt-6 block border-glow bg-glow text-lg text-on-glow hover:brightness-110`}>
          ▶ Host {game.name}
        </a>
        <p className="mt-2 text-center text-xs text-muted">Students join from the code and QR shown in the game&apos;s lobby.</p>
      </section>

      <footer className="mt-auto pt-10 text-center text-xs text-muted">
        Each game opens its own site.
      </footer>
    </main>
  )
}
