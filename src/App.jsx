import { useEffect, useState } from 'react'
import { ComingSoonBox, GameBox } from './GameBox'
import { ORDERED, SHELVES, link } from './games'

const PICK_KEY = 'pltlHubPick'

function readPick() {
  try {
    const index = ORDERED.findIndex((g) => g.id === localStorage.getItem(PICK_KEY))
    return index >= 0 ? index : 0
  } catch {
    return 0
  }
}

// The hub: a shelf of game boxes. Pick one (click, tap, or ←/→ and Enter) and its buttons take you to
// that game's own website.
export default function App() {
  const [pick, setPick] = useState(readPick)
  const game = ORDERED[pick]

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
      if (event.key === 'ArrowRight') setPick((p) => (p + 1) % ORDERED.length)
      if (event.key === 'ArrowLeft') setPick((p) => (p - 1 + ORDERED.length) % ORDERED.length)
      if (event.key === 'Enter' && !event.target.closest?.('button')) window.location.href = link(ORDERED[pick])
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [pick])

  const button = 'rounded-xl border-2 px-4 py-3 text-center font-bold transition focus:outline-2 focus:outline-offset-2 focus:outline-glow'

  return (
    // Wide screens: shelves on the left and the picked game on the right, each scrolling on its own. Phones: one page.
    <main className="room min-h-dvh overflow-x-hidden text-ink lg:h-dvh lg:overflow-hidden">
      <div className="mx-auto flex max-w-[1500px] flex-col gap-6 px-4 py-6 lg:h-full lg:flex-row lg:gap-8 lg:py-5">
      <div className="flex min-w-0 flex-1 flex-col lg:min-h-0">
      <header className="shrink-0 text-center lg:pt-2">
        <p className="text-xs font-bold uppercase tracking-[0.4em] text-muted">Peer-Led Team Learning</p>
        <h1 className="title-glow mt-1 font-display text-3xl text-glow sm:text-5xl">PLTL Game Hub</h1>
        <p className="mt-1 text-sm text-muted">Pick a game. Each one opens its own site.</p>
      </header>

      {/* The shelves: any subject first, then one per subject (scrolls up and down on its own) */}
      <div className="scroll-soft mt-5 w-full min-w-0 space-y-8 lg:min-h-0 lg:flex-1 lg:overflow-y-auto lg:pr-2">
        {SHELVES.map((shelf) => {
          const games = ORDERED.filter((g) => g.shelf === shelf.id)
          return (
            <section key={shelf.id} aria-label={`${shelf.title} games`}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5 px-2 sm:px-6">
                <h2 className="font-display text-lg text-glow">{shelf.title}</h2>
                <p className="min-w-0 text-xs text-muted">{shelf.note}</p>
              </div>
              {/* Centered when the boxes fit, scrolling from the first box when they don't (auto margins on the
                  ends instead of justify-center, which would push the first box out of reach) */}
              <div className="flex snap-x items-end gap-4 overflow-x-auto px-6 pb-4 pt-6 sm:gap-5 [&>*:first-child]:ml-auto [&>*:last-child]:mr-auto">
                {games.map((g) => {
                  const i = ORDERED.indexOf(g)
                  return <GameBox key={g.id} game={g} picked={i === pick} onPick={() => setPick(i)} />
                })}
                {Array.from({ length: shelf.comingSoon }, (_, i) => <ComingSoonBox key={i} />)}
              </div>
              <div className="shelf mx-auto h-4 w-full rounded-sm" />
            </section>
          )
        })}
        <p className="hidden text-center text-xs text-muted sm:block">◀ ▶ arrow keys to browse · Enter to host</p>
      </div>
      </div>

      {/* The picked game */}
      <section aria-live="polite" className="scroll-soft rounded-2xl border-2 border-line bg-dusk/90 p-6 shadow-2xl backdrop-blur lg:w-[32rem] lg:shrink-0 lg:overflow-y-auto">
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
          <li className="rounded-full border border-glow/70 px-3 py-1 text-glow">⏱ {game.time}</li>
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
      </div>
    </main>
  )
}
