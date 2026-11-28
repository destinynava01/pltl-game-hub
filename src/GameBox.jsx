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

function SpikeArt() {
  return (
    <div className="relative flex h-full flex-col overflow-hidden bg-[#0b1220] bg-[linear-gradient(rgb(34_211_238/0.08)_1px,transparent_1px),linear-gradient(90deg,rgb(34_211_238/0.08)_1px,transparent_1px)] bg-[length:12px_12px]">
      <p className="mt-3 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-[#facc15]">PLTL · Nervous system</p>
      <p className="mt-1 text-center text-2xl font-black tracking-wide text-[#22d3ee] [text-shadow:0_0_10px_rgb(34_211_238/0.7)]">Spike</p>
      <svg viewBox="0 0 120 50" className="mx-3 mt-auto mb-3" aria-hidden="true">
        <line x1="0" x2="120" y1="38" y2="38" stroke="#93a3bd" strokeOpacity="0.4" strokeWidth="1" />
        <path d="M0 38 H34 L42 31 L48 6 L56 44 L62 40 H120" fill="none" stroke="#22d3ee" strokeWidth="2.5" strokeLinejoin="round" />
        <circle cx="48" cy="6" r="2.5" fill="#facc15" />
      </svg>
    </div>
  )
}

function MuralCrewArt() {
  return (
    <div className="relative flex h-full flex-col overflow-hidden bg-[linear-gradient(#2e1a55,#9d3c72_60%,#f97366)]">
      <p className="mt-3 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-[#fde047]">PLTL · Algebra</p>
      <p className="mt-1 -rotate-2 text-center text-2xl font-black tracking-wide text-[#f472b6] [text-shadow:2px_2px_0_#1a0d16]">Mural Crew</p>
      <svg viewBox="0 0 120 70" className="mt-auto" aria-hidden="true">
        <rect x="0" y="34" width="16" height="36" fill="#251a3b" /><rect x="18" y="22" width="20" height="48" fill="#1d1530" />
        <rect x="40" y="40" width="14" height="30" fill="#251a3b" /><rect x="56" y="16" width="22" height="54" fill="#1d1530" />
        <rect x="80" y="30" width="18" height="40" fill="#251a3b" /><rect x="100" y="24" width="20" height="46" fill="#1d1530" />
        <path d="M8 14 Q30 66 52 14" fill="none" stroke="#1a0d16" strokeWidth="5" strokeLinecap="round" />
        <path d="M8 14 Q30 66 52 14" fill="none" stroke="#22d3ee" strokeWidth="3" strokeLinecap="round" />
        <path d="M66 58 C72 30 92 30 112 26" fill="none" stroke="#1a0d16" strokeWidth="5" strokeLinecap="round" />
        <path d="M66 58 C72 30 92 30 112 26" fill="none" stroke="#a3e635" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </div>
  )
}

function RoommateFinderArt() {
  return (
    <div className="relative flex h-full flex-col overflow-hidden bg-[linear-gradient(#0b1026,#312e81)]">
      <p className="mt-3 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-[#fde68a]">PLTL · Chemistry</p>
      <p className="mt-1 text-center text-xl font-black leading-tight text-[#fb7185] [text-shadow:0_0_8px_rgb(251_113_133/0.7)]">Roommate Finder</p>
      <svg viewBox="0 0 120 80" className="mt-auto" aria-hidden="true">
        <text x="60" y="10" textAnchor="middle" fontSize="8" fontWeight="800" fill="#fb7185">VACANCY</text>
        <rect x="30" y="14" width="60" height="66" fill="#45374f" />
        {[0, 1, 2, 3].map((r) => [0, 1, 2].map((c) => (
          <rect key={`${r}${c}`} x={37 + c * 17} y={20 + r * 15} width="12" height="9" fill="#fde68a" opacity={(r + c) % 3 ? 0.9 : 0.4} />
        )))}
        <rect x="26" y="12" width="68" height="3" fill="#1a1424" />
      </svg>
    </div>
  )
}

function RoyalBloodlinesArt() {
  return (
    <div className="relative flex h-full flex-col overflow-hidden bg-[#1c0b14] bg-[radial-gradient(ellipse_at_50%_-10%,rgb(232_182_76/0.25),transparent_60%)]">
      <p className="mt-3 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-[#f6d98b]">PLTL · Biology</p>
      <p className="mt-1 text-center font-serif text-xl font-black leading-tight text-[#e8b64c]">Royal Bloodlines</p>
      <svg viewBox="0 0 120 80" className="mx-3 mt-auto mb-3 rounded-md bg-[#f8efd9]" aria-hidden="true">
        <g stroke="#3b2414" strokeWidth="1.6" fill="none">
          <line x1="52" y1="16" x2="68" y2="16" /><line x1="60" y1="16" x2="60" y2="36" /><line x1="24" y1="36" x2="96" y2="36" />
          <line x1="24" y1="36" x2="24" y2="46" /><line x1="60" y1="36" x2="60" y2="46" /><line x1="96" y1="36" x2="96" y2="46" />
          <line x1="68" y1="52" x2="80" y2="52" /><line x1="74" y1="52" x2="74" y2="64" /><line x1="66" y1="64" x2="84" y2="64" />
          <line x1="66" y1="64" x2="66" y2="68" /><line x1="84" y1="64" x2="84" y2="68" />
        </g>
        <rect x="40" y="10" width="12" height="12" fill="#fff" stroke="#3b2414" strokeWidth="1.6" />
        <circle cx="74" cy="16" r="6" fill="#fff" stroke="#3b2414" strokeWidth="1.6" />
        <rect x="18" y="46" width="12" height="12" fill="#6b1d2f" stroke="#3b2414" strokeWidth="1.6" />
        <circle cx="60" cy="52" r="6" fill="#fff" stroke="#3b2414" strokeWidth="1.6" /><circle cx="60" cy="52" r="2" fill="#6b1d2f" />
        <rect x="80" y="46" width="12" height="12" fill="#fff" stroke="#3b2414" strokeWidth="1.6" />
        <rect x="60" y="68" width="12" height="10" fill="#6b1d2f" stroke="#3b2414" strokeWidth="1.6" />
        <circle cx="84" cy="73" r="5" fill="#fff" stroke="#3b2414" strokeWidth="1.6" />
        <text x="60" y="8" textAnchor="middle" fontSize="8">👑</text>
      </svg>
    </div>
  )
}

function ReefKeeperArt() {
  return (
    <div className="relative flex h-full flex-col overflow-hidden bg-[#031a2b] bg-[radial-gradient(ellipse_at_50%_-10%,rgb(125_211_252/0.3),transparent_60%)]">
      <p className="mt-3 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-[#7dd3fc]">PLTL · Chemistry</p>
      <p className="mt-1 text-center text-xl font-black leading-tight text-[#2dd4bf]">Reef Keeper</p>
      <svg viewBox="0 0 120 80" className="mx-3 mt-auto mb-3 rounded-md" aria-hidden="true">
        <rect x="0" y="0" width="120" height="80" rx="6" fill="#0b4f6c" />
        <rect x="0" y="6" width="120" height="74" fill="#40c057" opacity="0.45" />
        <path d="M0 70 Q 30 64 60 70 T 120 68 L120 80 L0 80 Z" fill="#e9c99a" />
        <path d="M12 72 Q 8 58 14 46 Q 18 38 14 30" fill="none" stroke="#2f9e44" strokeWidth="3" strokeLinecap="round" />
        <path d="M104 72 Q 100 60 106 50" fill="none" stroke="#37b24d" strokeWidth="3" strokeLinecap="round" />
        {[[40, 26], [70, 40], [52, 52], [86, 22]].map(([x, y]) => (
          <g key={x} transform={`translate(${x} ${y})`}>
            <path d="M-7 0 L-12 -4 L-11 0 L-12 4 Z" fill="#38bdf8" />
            <ellipse cx="0" cy="0" rx="7" ry="4" fill="#38bdf8" />
            <circle cx="4" cy="-1" r="1" fill="#03263d" />
          </g>
        ))}
        <circle cx="30" cy="16" r="2" fill="none" stroke="#fff" strokeOpacity="0.7" />
        <circle cx="94" cy="44" r="1.6" fill="none" stroke="#fff" strokeOpacity="0.7" />
        <polyline points="62,74 70,72 78,70 84,66 86,48 90,40 112,38" fill="none" stroke="#fde68a" strokeWidth="1.6" opacity="0.9" />
      </svg>
    </div>
  )
}

function TreehouseArt() {
  return (
    <div className="relative flex h-full flex-col overflow-hidden bg-[#dcebcf] bg-[radial-gradient(ellipse_at_20%_-10%,rgb(255_244_200/0.9),transparent_55%)]">
      <p className="mt-3 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-[#7c4a1e]">PLTL · Engineering</p>
      <p className="mt-1 text-center text-xl font-black leading-tight text-[#2f7d32]">Treehouse Builders</p>
      <svg viewBox="0 0 120 80" className="mx-3 mt-auto mb-3 rounded-md" aria-hidden="true">
        <rect width="120" height="80" rx="6" fill="#bfe3f7" />
        <path d="M0 72 Q 40 66 120 70 L120 80 L0 80 Z" fill="#7cb342" />
        <rect x="56" y="30" width="10" height="44" rx="3" fill="#7c4a1e" />
        <g fill="#3f7d20"><circle cx="61" cy="22" r="18" /><circle cx="42" cy="30" r="12" /><circle cx="80" cy="30" r="12" /></g>
        <rect x="38" y="44" width="46" height="4" fill="#b7793e" />
        <rect x="46" y="32" width="30" height="12" fill="#d9a066" stroke="#7c4a1e" strokeWidth="0.8" />
        <polygon points="42,33 61,20 80,33" fill="#2563eb" />
        <g stroke="#b7793e" strokeWidth="1.2"><line x1="44" y1="72" x2="47" y2="48" /><line x1="50" y1="72" x2="53" y2="48" />{[66, 60, 54].map((y) => <line key={y} x1="45" y1={y} x2="51" y2={y} />)}</g>
        <line x1="90" y1="14" x2="90" y2="40" stroke="#dc2626" strokeWidth="1.5" /><polygon points="87,38 93,38 90,44" fill="#dc2626" />
      </svg>
    </div>
  )
}

function DojoArt() {
  return (
    <div className="relative flex h-full flex-col overflow-hidden bg-[#1a1210] bg-[radial-gradient(ellipse_at_50%_-10%,rgb(245_194_107/0.25),transparent_60%)]">
      <p className="mt-3 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-[#f5c26b]">PLTL · Math</p>
      <p className="mt-1 text-center text-xl font-black leading-tight text-[#ef4444]">Derivative Dojo</p>
      <svg viewBox="0 0 120 80" className="mx-3 mt-auto mb-3 rounded-md" aria-hidden="true">
        <rect width="120" height="80" rx="6" fill="#f3e9d2" />
        {[40, 80].map((x) => <line key={x} x1={x} y1="0" x2={x} y2="56" stroke="#5a3d2b" strokeWidth="2" />)}
        <rect y="56" width="120" height="24" fill="#8b5a33" />
        <circle cx="96" cy="18" r="8" fill="#e03131" opacity="0.85" />
        {['#f8fafc', '#facc15', '#fb923c', '#22c55e', '#3b82f6', '#a855f7', '#111827'].map((c, i) => <rect key={c} x={8 + i * 5} y="6" width="3.5" height="14" fill={c} stroke="#00000033" strokeWidth="0.4" />)}
        <circle cx="40" cy="36" r="5" fill="#f2c9a0" /><rect x="35" y="33" width="10" height="2" fill="#22d3ee" />
        <path d="M34 42 L46 42 L48 60 L32 60 Z" fill="#fafaf9" /><rect x="33" y="52" width="14" height="2.5" fill="#111827" />
        <path d="M46 45 L60 48" stroke="#fafaf9" strokeWidth="3.5" strokeLinecap="round" />
        {[0, 1, 2, 3].map((i) => <rect key={i} x="66" y={50 - i * 3} width="34" height="2.5" fill="#d6a46b" stroke="#8b5a33" strokeWidth="0.4" />)}
        <text x="18" y="74" fontSize="9" fontWeight="700" fill="#f5ede1" fontFamily="serif">d/dx</text>
      </svg>
    </div>
  )
}

function AuditorArt() {
  return (
    <div className="relative flex h-full flex-col overflow-hidden bg-[#eef2f7] bg-[repeating-linear-gradient(transparent_0_15px,rgb(59_130_246/0.15)_15px_16px)]">
      <p className="mt-3 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-[#b91c1c]">PLTL · Accounting</p>
      <p className="mt-1 text-center text-xl font-black leading-tight text-[#1d4ed8]">The Auditor Is Coming</p>
      <svg viewBox="0 0 120 80" className="mx-3 mt-auto mb-3 rounded-md" aria-hidden="true">
        <rect width="120" height="80" rx="6" fill="#dbeafe" />
        <rect y="62" width="120" height="18" fill="#475569" />
        {[6, 26, 46].map((x) => <rect key={x} x={x} y="70" width="10" height="1.5" fill="#f8fafc" />)}
        <rect x="68" y="22" width="34" height="40" fill="#e2e8f0" stroke="#64748b" />
        <rect x="66" y="18" width="38" height="5" fill="#1d4ed8" />
        {[0, 1].map((r) => [0, 1, 2].map((c) => <rect key={`${r}${c}`} x={72 + c * 10} y={27 + r * 10} width="6" height="5" fill="#fde68a" stroke="#64748b" strokeWidth="0.4" />))}
        <rect x="82" y="50" width="6" height="12" fill="#334155" />
        {[0, 1, 2, 3, 4].map((i) => <rect key={i} x="105" y={58 - i * 2} width="12" height="2" fill="#fcd34d" stroke="#a16207" strokeWidth="0.3" />)}
        <g transform="translate(22 52)"><rect y="3" width="22" height="7" rx="2" fill="#111827" /><path d="M4 3 L7 -1 L16 -1 L19 3 Z" fill="#111827" /><circle cx="5" cy="10.5" r="2.5" fill="#1f2937" stroke="#9ca3af" /><circle cx="17" cy="10.5" r="2.5" fill="#1f2937" stroke="#9ca3af" /></g>
        <g transform="rotate(-10 40 20)"><rect x="14" y="12" width="46" height="13" rx="2" fill="none" stroke="#b91c1c" strokeWidth="1.8" /><text x="37" y="21.5" textAnchor="middle" fontSize="8" fontWeight="800" fill="#b91c1c">APPROVED</text></g>
      </svg>
    </div>
  )
}

function BeaconArt() {
  return (
    <div className="relative flex h-full flex-col overflow-hidden bg-[#0b1226] bg-[radial-gradient(ellipse_at_20%_-10%,rgb(251_191_36/0.22),transparent_55%)]">
      <p className="mt-3 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-[#a5b4d4]">PLTL · Math</p>
      <p className="mt-1 text-center text-xl font-black leading-tight text-[#fbbf24]">Beacon Point</p>
      <svg viewBox="0 0 120 80" className="mx-3 mt-auto mb-3 rounded-md" aria-hidden="true">
        <rect width="120" height="80" rx="6" fill="#0f1a36" />
        {[[10, 8], [40, 14], [70, 6], [104, 20], [90, 10]].map(([x, y]) => <circle key={x} cx={x} cy={y} r="0.8" fill="#e2e8f0" />)}
        <rect y="54" width="120" height="26" fill="#123456" />
        <path d="M30 28 L120 6 L120 40 Z" fill="#fde68a" opacity="0.35" />
        <circle cx="30" cy="28" r="14" fill="none" stroke="#fde68a" strokeOpacity="0.4" strokeDasharray="2 2" />
        <path d="M0 80 L0 52 L14 48 L40 50 L52 62 L40 74 L20 80 Z" fill="#1f2937" />
        <path d="M25 52 L27 32 L33 32 L35 52 Z" fill="#f8fafc" /><path d="M26 44 L34 44 L34.4 48 L25.6 48 Z" fill="#f472b6" />
        <rect x="26" y="25" width="8" height="7" fill="#0f172a" stroke="#cbd5e1" strokeWidth="0.6" /><circle cx="30" cy="28" r="2" fill="#fde047" />
        <path d="M25 25 L30 21 L35 25 Z" fill="#475569" />
        <rect x="64" y="66" width="56" height="2" fill="#78350f" />
        {[68, 78, 88, 98, 108].map((x) => <g key={x} transform={`translate(${x} 64)`}><path d="M0 0 L7 0 L5.5 2.5 L1.5 2.5 Z" fill="#e2e8f0" /><path d="M3.8 0 L3.8 -5 L6.5 -1 Z" fill="#fbbf24" /></g>)}
      </svg>
    </div>
  )
}

function StadiumArt() {
  return (
    <div className="relative flex h-full flex-col overflow-hidden bg-[#070b18] bg-[radial-gradient(ellipse_at_50%_-10%,rgb(250_204_21/0.25),transparent_55%)]">
      <p className="mt-3 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-[#9fb0d6]">PLTL · Engineering</p>
      <p className="mt-1 text-center text-xl font-black leading-tight text-[#facc15]">Stadium Blackout</p>
      <svg viewBox="0 0 120 80" className="mx-3 mt-auto mb-3 rounded-md" aria-hidden="true">
        <rect width="120" height="80" rx="6" fill="#0b1226" />
        <path d="M10 22 L22 22 L48 64 L30 64 Z" fill="#fef9c3" opacity="0.25" />
        <path d="M98 22 L110 22 L90 64 L72 64 Z" fill="#fef9c3" opacity="0.25" />
        <path d="M4 50 Q60 32 116 50 L116 64 L4 64 Z" fill="#334155" />
        {[16, 26, 36, 46, 56, 66, 76, 86, 96, 106].map((x, i) => <circle key={x} cx={x} cy={52 - Math.sin((i / 9) * Math.PI) * 7} r="1.3" fill={i % 2 ? '#22d3ee' : '#f8fafc'} />)}
        <path d="M6 80 L18 64 L102 64 L114 80 Z" fill="#16a34a" />
        <path d="M60 64 L60 80" stroke="#f0fdf4" strokeWidth="0.8" />
        {[[16, 14], [104, 14]].map(([x, y]) => <g key={x}><rect x={x - 1} y={y + 4} width="2" height="40" fill="#475569" /><rect x={x - 7} y={y} width="14" height="5" rx="1" fill="#fde047" /></g>)}
        <rect x="46" y="10" width="28" height="12" rx="1.5" fill="#0b1120" stroke="#475569" strokeWidth="0.6" />
        <text x="60" y="19" textAnchor="middle" fontSize="7" fontWeight="800" fill="#facc15" fontFamily="monospace">8:00</text>
        <path d="M62 26 L56 36 L60 36 L57 44 L65 33 L61 33 L64 26 Z" fill="#facc15" />
      </svg>
    </div>
  )
}

function HeadToHeadArt() {
  return (
    <div className="relative flex h-full flex-col overflow-hidden bg-[#0a0a0f] bg-[radial-gradient(ellipse_at_30%_-10%,rgb(255_244_214/0.18),transparent_55%),radial-gradient(ellipse_at_70%_-10%,rgb(255_244_214/0.18),transparent_55%)]">
      <p className="mt-3 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-[#a9a6b8]">PLTL · Versus</p>
      <p className="mt-1 text-center text-xl font-black uppercase leading-tight text-[#f5c542]">Head to Head</p>
      <svg viewBox="0 0 120 80" className="mx-3 mt-auto mb-3 rounded-md" aria-hidden="true">
        <rect width="120" height="80" rx="6" fill="#07070b" />
        <path d="M38 0 L30 0 L18 56 L50 56 Z" fill="#fff6dc" opacity="0.18" />
        <path d="M90 0 L82 0 L70 56 L102 56 Z" fill="#fff6dc" opacity="0.18" />
        <path d="M20 46 L100 46 L110 58 L10 58 Z" fill="#d9d3c3" />
        <path d="M10 58 L60 58 L60 64 L10 64 Z" fill="#b91c1c" /><path d="M60 58 L110 58 L110 64 L60 64 Z" fill="#1d4ed8" />
        <rect x="18" y="26" width="3" height="22" fill="#e11d48" /><rect x="99" y="26" width="3" height="22" fill="#3b82f6" />
        {[30, 36, 42].map((y, i) => <line key={y} x1="20" y1={y} x2="100" y2={y} stroke={['#f4f1ea', '#e11d48', '#3b82f6'][i]} strokeWidth="1.2" />)}
        <path d="M44 40 Q43 30 51 30 Q59 30 58 39 Q58 45 52 46 L46 46 Q43 45 44 40 Z" fill="#e11d48" stroke="#000" strokeWidth="0.8" />
        <path d="M76 40 Q77 30 69 30 Q61 30 62 39 Q62 45 68 46 L74 46 Q77 45 76 40 Z" fill="#3b82f6" stroke="#000" strokeWidth="0.8" />
        {[[16, 72], [40, 74], [80, 73], [104, 72]].map(([x, y]) => <circle key={x} cx={x} cy={y} r="5" fill="#15151d" />)}
      </svg>
    </div>
  )
}

const ART = { cascade: CascadeArt, jeopardy: JeopardyArt, monopoly: MonopolyArt, escape: EscapeArt, imposter: ImposterArt, bakery: BakeryArt, patchknight: PatchKnightArt, organized: OrganizedArt, limitingsuspect: LimitingSuspectArt, whatsthedamage: WhatsTheDamageArt, spike: SpikeArt, muralcrew: MuralCrewArt, roommatefinder: RoommateFinderArt, royalbloodlines: RoyalBloodlinesArt, reefkeeper: ReefKeeperArt, treehousebuilders: TreehouseArt, derivativedojo: DojoArt, auditoriscoming: AuditorArt, beaconpoint: BeaconArt, stadiumblackout: StadiumArt, headtohead: HeadToHeadArt }

export function GameBox({ game, picked, onPick }) {
  // A game without its own cover still gets a plain box (a missing cover must not blank the whole hub)
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
      <span className="relative block h-full">
        {Art ? <Art /> : <div className="flex h-full items-center justify-center bg-dusk p-3 text-center text-xl font-black">{game.name}</div>}
        {game.paper && <span className="absolute bottom-1.5 right-1.5 rounded-md bg-black/70 px-1.5 py-0.5 text-xs font-bold text-white" title="Bring paper">📝</span>}
      </span>
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
