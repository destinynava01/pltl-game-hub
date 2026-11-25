import { useEffect, useState } from 'react'
import { ComingSoonBox, GameBox } from './GameBox'
import { ORDERED, SHELVES, SOURCES, TIMES, link } from './games'

const PICK_KEY = 'pltlHubPick'

function readPick() {
  try {
    const id = localStorage.getItem(PICK_KEY)
    return ORDERED.some((g) => g.id === id) ? id : ORDERED[0].id
  } catch {
    return ORDERED[0].id
  }
}

const NO_FILTERS = { text: '', subject: null, time: null, solo: false, source: null }

// Does a game pass the filters?
function matches(game, f) {
  const text = f.text.trim().toLowerCase()
  if (text && ![game.name, game.tagline, game.description, game.best, game.subjects].join(' ').toLowerCase().includes(text)) return false
  if (f.subject && game.shelf !== f.subject) return false
  if (f.time && !TIMES.find((t) => t.id === f.time).fits(game)) return false
  if (f.solo && !game.solo) return false
  if (f.source && game.source !== f.source) return false
  return true
}

// The hub: shelves of game boxes. Pick one (click, tap, or ←/→ and Enter) and its button takes you to that game's
// own website. Filters above the shelves narrow them down (subject, time, solo, where the questions come from).
export default function App() {
  const [pickId, setPickId] = useState(readPick)
  const [filters, setFilters] = useState(NO_FILTERS)
  const visible = ORDERED.filter((g) => matches(g, filters))
  // The picked game, or the first one still showing if the filters hid it
  const game = visible.find((g) => g.id === pickId) ?? visible[0] ?? null
  const pick = game ? visible.indexOf(game) : -1
  const setPick = (i) => setPickId(visible[i].id)

  // Remember the last game picked on this device
  useEffect(() => {
    if (!game) return
    try {
      localStorage.setItem(PICK_KEY, game.id)
    } catch {
      // storage blocked: the hub just starts on the first game
    }
  }, [game])

  // Arrow keys move along the shelves (only the games showing); Enter hosts the picked game (a clicker works too)
  useEffect(() => {
    function onKey(event) {
      if (event.target.closest?.('a, input, textarea, select')) return
      if (!visible.length) return
      if (event.key === 'ArrowRight') setPickId(visible[(pick + 1) % visible.length].id)
      if (event.key === 'ArrowLeft') setPickId(visible[(pick - 1 + visible.length) % visible.length].id)
      if (event.key === 'Enter' && game && !event.target.closest?.('button')) window.location.href = link(game)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

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

      <Filters filters={filters} setFilters={setFilters} shown={visible.length} />

      {/* The shelves: any subject first, then one per subject A to Z (scrolls up and down on its own). Shelves with
          no games left after filtering are hidden. */}
      <div className="scroll-soft mt-4 w-full min-w-0 space-y-8 lg:min-h-0 lg:flex-1 lg:overflow-y-auto lg:pr-2">
        {visible.length === 0 && (
          <p className="rounded-xl border-2 border-dashed border-line px-4 py-8 text-center text-muted">
            No games match those filters. <button type="button" onClick={() => setFilters(NO_FILTERS)} className="font-bold text-glow underline">Clear the filters</button>
          </p>
        )}
        {SHELVES.map((shelf) => {
          const games = visible.filter((g) => g.shelf === shelf.id)
          if (games.length === 0) return null
          const filtered = filters !== NO_FILTERS
          return (
            <section key={shelf.id} aria-label={`${shelf.title} games`}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5 px-2 sm:px-6">
                <h2 className="font-display text-lg text-glow">{shelf.title}</h2>
                <p className="min-w-0 text-xs text-muted">{shelf.note}</p>
              </div>
              {/* Centered when the boxes fit, scrolling from the first box when they don't (auto margins on the
                  ends instead of justify-center, which would push the first box out of reach) */}
              <div className="flex snap-x items-end gap-4 overflow-x-auto px-6 pb-4 pt-6 sm:gap-5 [&>*:first-child]:ml-auto [&>*:last-child]:mr-auto">
                {games.map((g) => <GameBox key={g.id} game={g} picked={g === game} onPick={() => setPick(visible.indexOf(g))} />)}
                {!filtered && Array.from({ length: shelf.comingSoon }, (_, i) => <ComingSoonBox key={i} />)}
              </div>
              <div className="shelf mx-auto h-4 w-full rounded-sm" />
            </section>
          )
        })}
        <p className="hidden text-center text-xs text-muted sm:block">◀ ▶ arrow keys to browse · Enter to host</p>
      </div>
      </div>

      {/* The picked game */}
      {game && (
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
      )}
      </div>
    </main>
  )
}

// The filter bar: a search box, then chips for subject, time, solo, and where the questions come from
function Filters({ filters, setFilters, shown }) {
  const set = (key, value) => setFilters({ ...filters, [key]: filters[key] === value ? (key === 'solo' ? false : null) : value })
  const chip = (on) => `rounded-full border px-3 py-1 text-xs font-bold transition ${on ? 'border-glow bg-glow text-on-glow' : 'border-line text-muted hover:border-glow hover:text-glow'}`
  const active = filters.text || filters.subject || filters.time || filters.solo || filters.source
  return (
    <div className="mt-4 shrink-0 space-y-2 rounded-2xl border-2 border-line bg-dusk/70 p-3 text-sm">
      <div className="flex flex-wrap items-center gap-2">
        <input type="search" value={filters.text} onChange={(e) => setFilters({ ...filters, text: e.target.value })} placeholder="🔎 Search games…" aria-label="Search games"
          className="min-w-0 flex-1 rounded-full border-2 border-line bg-night/60 px-4 py-1.5 text-ink outline-none placeholder:text-muted focus:border-glow" />
        <span className="text-xs text-muted">{shown} game{shown === 1 ? '' : 's'}</span>
        {active && <button type="button" onClick={() => setFilters(NO_FILTERS)} className="text-xs font-bold text-glow hover:underline">Clear</button>}
      </div>
      <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="Subject">
        <span className="w-20 shrink-0 text-xs font-bold uppercase tracking-wider text-muted">Subject</span>
        {SHELVES.map((s) => <button key={s.id} type="button" aria-pressed={filters.subject === s.id} className={chip(filters.subject === s.id)} onClick={() => set('subject', s.id)}>{s.title}</button>)}
      </div>
      <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="Time and players">
        <span className="w-20 shrink-0 text-xs font-bold uppercase tracking-wider text-muted">Time</span>
        {TIMES.map((t) => <button key={t.id} type="button" aria-pressed={filters.time === t.id} className={chip(filters.time === t.id)} onClick={() => set('time', t.id)}>⏱ {t.label}</button>)}
        <button type="button" aria-pressed={filters.solo} className={chip(filters.solo)} onClick={() => set('solo', true)}>🙋 Works solo</button>
      </div>
      <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="Questions">
        <span className="w-20 shrink-0 text-xs font-bold uppercase tracking-wider text-muted">Questions</span>
        {SOURCES.map((q) => <button key={q.id} type="button" aria-pressed={filters.source === q.id} className={chip(filters.source === q.id)} onClick={() => set('source', q.id)}>{q.label}</button>)}
      </div>
    </div>
  )
}
