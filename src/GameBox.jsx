// Box art for each game, drawn in that game's own colors. A box is 4:5, like a board-game box.

const POINTS = [100, 200, 300]
const PROPERTY_COLORS = ['#92400e', '#7dd3fc', '#f472b6', '#fb923c', '#dc2626', '#facc15', '#22c55e', '#1e40af']

function JeopardyArt() {
  return (
    <div className="flex h-full flex-col bg-[#0b1f73] p-3">
      <p className="text-center text-[11px] font-bold uppercase tracking-[0.3em] text-sky-200">PLTL · Biology</p>
      <p className="text-center text-xl font-black uppercase tracking-wide text-yellow-300 drop-shadow-[0_2px_0_#000]">Jeopardy</p>
      <div className="mt-auto grid grid-cols-3 gap-1">
        {POINTS.flatMap((p) => [0, 1, 2].map((k) => (
          <span key={`${p}-${k}`} className="rounded-sm border border-blue-400/60 bg-blue-700 py-1 text-center text-[11px] font-black text-yellow-300">
            {p}
          </span>
        )))}
      </div>
    </div>
  )
}

function MonopolyArt() {
  return (
    <div className="flex h-full flex-col border-4 border-[#cde6d0] bg-[#fbf6e3]">
      <div className="mx-2 mt-3 border-2 border-black bg-[#d8232a] py-1 text-center text-lg font-black uppercase tracking-wider text-white">
        Monopoly
      </div>
      <p className="mt-1 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-800">PLTL</p>
      <div className="mt-auto grid grid-cols-4 gap-1 p-2">
        {PROPERTY_COLORS.map((c) => (
          <span key={c} className="h-5 rounded-sm border border-black/70" style={{ background: c }} />
        ))}
      </div>
    </div>
  )
}

function EscapeArt() {
  return (
    <div className="relative flex h-full flex-col overflow-hidden bg-[#07090d]">
      <div className="hazard h-2.5" />
      <p className="mt-3 text-center font-vault text-[10px] font-bold uppercase tracking-[0.35em] text-red-400">● Locked</p>
      <p className="mt-1 text-center font-vault text-lg font-black uppercase leading-tight tracking-wider text-[#ffb020] drop-shadow-[0_0_8px_rgb(255_176_32/0.7)]">
        Escape
        <br />
        Room
      </p>
      <div className="mt-auto flex justify-center gap-1 pb-3 text-lg">
        <span>🔓</span><span>🔓</span><span className="drop-shadow-[0_0_6px_rgb(255_176_32/0.9)]">🔒</span><span className="opacity-40">🔒</span>
      </div>
      <div className="hazard h-2.5" />
    </div>
  )
}

function ImposterArt() {
  return (
    <div className="relative flex h-full flex-col overflow-hidden bg-[#05060f] bg-[radial-gradient(1px_1px_at_12px_18px,#fff,transparent),radial-gradient(1px_1px_at_70px_40px,#b48cff,transparent),radial-gradient(1px_1px_at_120px_22px,#fff,transparent),radial-gradient(1px_1px_at_40px_90px,#fff,transparent)]">
      <div className="absolute inset-x-6 top-0 h-full bg-[linear-gradient(180deg,rgb(57_255_136/0.25),transparent_75%)] [clip-path:polygon(35%_0,65%_0,100%_100%,0_100%)]" />
      <p className="relative mt-3 text-center text-[10px] font-bold uppercase tracking-[0.35em] text-[#b48cff]">PLTL · Among the crew</p>
      <p className="relative mt-1 text-center text-xl font-black uppercase tracking-wider text-[#39ff88] drop-shadow-[0_0_8px_rgb(57_255_136/0.8)]">Imposter</p>
      <div className="relative mt-auto flex justify-center gap-1.5 pb-4 text-2xl">
        <span>🧑‍🚀</span><span>🧑‍🚀</span><span className="drop-shadow-[0_0_8px_rgb(57_255_136/0.9)]">👽</span><span>🧑‍🚀</span>
      </div>
      <div className="h-1.5 bg-[linear-gradient(90deg,transparent,#39ff88,#b48cff,#39ff88,transparent)]" />
    </div>
  )
}

const ART = { jeopardy: JeopardyArt, monopoly: MonopolyArt, escape: EscapeArt, imposter: ImposterArt }

export function GameBox({ game, picked, onPick }) {
  const Art = ART[game.id]
  return (
    <button
      type="button"
      onClick={onPick}
      aria-pressed={picked}
      aria-label={`${game.name}${picked ? ' (selected)' : ''}`}
      className={`aspect-[4/5] w-36 shrink-0 snap-center overflow-hidden rounded-lg border-2 text-left shadow-[0_12px_20px_rgb(0_0_0/0.5)] transition sm:w-44 ${
        picked
          ? 'picked border-glow shadow-[0_0_0_3px_rgb(255_203_71/0.7),0_0_40px_rgb(255_203_71/0.45)]'
          : 'border-black/40 opacity-80 hover:-translate-y-1 hover:opacity-100'
      }`}
    >
      <Art />
    </button>
  )
}

export function ComingSoonBox() {
  return (
    <div
      aria-label="More games coming soon"
      className="flex aspect-[4/5] w-36 shrink-0 snap-center flex-col items-center justify-center rounded-lg border-2 border-dashed border-line bg-dusk/40 text-muted sm:w-44"
    >
      <span className="font-display text-4xl">?</span>
      <span className="mt-1 text-xs font-bold uppercase tracking-widest">Coming soon</span>
    </div>
  )
}
