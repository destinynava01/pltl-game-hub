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

function BakeryArt() {
  return (
    <div className="relative flex h-full flex-col overflow-hidden bg-[#f4ede1]">
      {/* The shop awning: teal and cream stripes */}
      <div className="h-6 bg-[repeating-linear-gradient(90deg,#17807a_0_12px,#fffdf8_12px_24px)]" />
      <p className="mt-2 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-[#17807a]">PLTL · Chemistry</p>
      <p className="mt-1 text-center font-serif text-xl font-black leading-tight text-[#d9652b]">Beaker<br />Bakery</p>
      <div className="mt-auto flex justify-center gap-1 pb-3 text-2xl">
        <span>🧪</span><span>🥐</span><span>⚖️</span>
      </div>
      <div className="h-2.5 bg-[#fffdf8] bg-[linear-gradient(90deg,rgb(38_56_92/0.5)_50%,transparent_50%),linear-gradient(rgb(38_56_92/0.5)_50%,transparent_50%)] [background-size:8px_8px]" />
    </div>
  )
}

function PatchKnightArt() {
  return (
    <div className="relative flex h-full flex-col overflow-hidden bg-[#0f0e17] bg-[linear-gradient(rgb(255_255_255/0.04)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.04)_1px,transparent_1px)] [background-size:10px_10px]">
      <p className="mt-3 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-[#4cc9f0]">PLTL · CS2</p>
      <p className="mt-1 text-center font-mono text-xl font-black uppercase leading-tight text-[#3ddc84] [text-shadow:2px_0_#ff3d81,-2px_0_#4cc9f0]">Patch<br />Knight</p>
      <svg viewBox="0 0 16 16" className="mx-auto mt-auto h-14 w-14" shapeRendering="crispEdges" aria-hidden="true">
        <path fill="#c9d1e0" d="M5 2h6v1h1v5h-1v1H5V8H4V3h1z" /><path fill="#0f0e17" d="M6 5h4v1H6z" /><path fill="#3ddc84" d="M5 10h6v4H5z" />
        <path fill="#7a7799" d="M5 14h2v1H5zM9 14h2v1H9z" /><path fill="#ff3d81" d="M12 4h1v7h-1z" /><path fill="#ffd166" d="M11 10h3v1h-3z" />
      </svg>
      <p className="pb-2 text-center font-mono text-[9px] text-[#ff3d81]">ERR: segfault at 0x0</p>
    </div>
  )
}

function CascadeArt() {
  return (
    <div className="relative flex h-full flex-col overflow-hidden bg-[#061a2b] bg-[repeating-linear-gradient(90deg,rgb(255_255_255/0.04)_0_2px,transparent_2px_14px)]">
      <p className="mt-3 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-[#7cc7ff]">PLTL · In order</p>
      <p className="mt-1 text-center text-xl font-black tracking-wide text-[#3ee0d0] drop-shadow-[0_0_8px_rgb(62_224_208/0.6)]">Cascade</p>
      <div className="mt-auto space-y-1 px-3 pb-3">
        {['#3ee0d0', '#7cc7ff', '#ffd27a', '#ff9db0'].map((c, i) => (
          <div key={c} className="h-4 w-3/5 rounded" style={{ marginLeft: `${i * 14}%`, background: c }} />
        ))}
      </div>
    </div>
  )
}

function OrganizedArt() {
  return (
    <div className="relative flex h-full flex-col overflow-hidden bg-[#e8f3f1]">
      <p className="mt-3 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-[#6d28d9]">PLTL · Body systems</p>
      <p className="mt-1 text-center text-lg font-black leading-tight text-[#0f8b7d]">
        <span className="inline-block -rotate-6">Organ</span>-<span className="inline-block rotate-3">ized</span><br /><span className="inline-block -rotate-2">Chaos</span>
      </p>
      <div className="mx-3 mt-auto mb-3 rounded-lg bg-[#071b1d] p-2">
        <svg viewBox="0 0 120 30" className="w-full" aria-hidden="true">
          <path d="M0 16 H30 L36 16 L41 5 L46 26 L51 2 L56 19 L60 16 H120" fill="none" stroke="#39ff8f" strokeWidth="2.5" strokeLinejoin="round" />
        </svg>
        <p className="text-center text-sm">🫀 🫁 🧠 🦴</p>
      </div>
    </div>
  )
}

function LimitingSuspectArt() {
  return (
    <div className="relative flex h-full flex-col overflow-hidden bg-[#a8794f] bg-[radial-gradient(circle_at_20%_30%,rgb(0_0_0/0.12)_0_1.5px,transparent_2px)] bg-[length:14px_14px]">
      <div className="relative mx-3 mt-4 rotate-[-3deg] rounded-sm bg-[#fbf5e6] px-2 py-2 text-center shadow-md">
        <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-[#c0392b]" />
        <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#6e5d47]">Case file</p>
        <p className="font-mono text-base font-black leading-tight text-[#1f3a5f]">Limiting<br />Suspect</p>
      </div>
      <p className="mx-auto mt-auto mb-4 rotate-[-8deg] rounded border-2 border-[#c0392b] px-2 font-mono text-xs font-black uppercase tracking-widest text-[#c0392b]">Case closed</p>
    </div>
  )
}

function WhatsTheDamageArt() {
  return (
    <div className="relative flex h-full flex-col overflow-hidden bg-[#1f2d27]">
      <div className="h-4 bg-[repeating-linear-gradient(90deg,#e4572e_0_14px,#fffdf7_14px_28px)]" />
      <p className="mt-2 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-[#f4c430]">PLTL · Algebra</p>
      <p className="mt-1 text-center text-lg font-black leading-tight text-[#f1efe6]">What&apos;s the<br />Damage?</p>
      <div className="mx-3 mt-auto mb-3 rounded-t-sm bg-[#fffdf7] px-2 py-1.5 font-mono text-[10px] text-[#22201c]">
        <p>2🌮 + 1🥤 = $8.50</p>
        <p>1🌮 + 3🥤 = $8.00</p>
      </div>
    </div>
  )
}

const ART = { cascade: CascadeArt, jeopardy: JeopardyArt, monopoly: MonopolyArt, escape: EscapeArt, imposter: ImposterArt, bakery: BakeryArt, patchknight: PatchKnightArt, organized: OrganizedArt, limitingsuspect: LimitingSuspectArt, whatsthedamage: WhatsTheDamageArt }

export function GameBox({ game, picked, onPick }) {
  const Art = ART[game.id]
  return (
    <button
      type="button"
      onClick={onPick}
      aria-pressed={picked}
      aria-label={`${game.name}${picked ? ' (selected)' : ''}`}
      className={`aspect-[4/5] w-36 shrink-0 snap-center overflow-hidden rounded-lg border-2 text-left shadow-[0_12px_20px_rgb(0_0_0/0.5)] transition sm:w-40 lg:w-44 ${
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
      className="flex aspect-[4/5] w-36 shrink-0 snap-center flex-col items-center justify-center rounded-lg border-2 border-dashed border-line bg-dusk/40 text-muted sm:w-40 lg:w-44"
    >
      <span className="font-display text-4xl">?</span>
      <span className="mt-1 text-xs font-bold uppercase tracking-widest">Coming soon</span>
    </div>
  )
}
