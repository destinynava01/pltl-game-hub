// The games on the shelf. To add a game: add an entry here (and its box art in GameBox.jsx).
// Each game is its own website; the hub only launches it.
//   tagline     one line under the name
//   description a short paragraph about the game
//   best        what it's best for (shown as "Recommended for")
//   howToPlay   the steps, in order
//   subjects    which subjects the game has questions for
//   shelf       which shelf it sits on (see SHELVES)
//   time        about how long a game takes (shown); minutes: [shortest, longest] (for the time filter)
//   solo        a single student can play it (for the filter)
//   source      where its questions come from: 'bank' (the shared question bank), 'own' (its own set, built in or
//               submitted on its site) or 'generated' (new numbers every game)
//   url         the game's main address (its leader lobby)
export const GAMES = [
  {
    id: 'jeopardy',
    minutes: [30, 45], // for the time filter
    solo: false, // one student can play it alone
    source: 'bank', // where its questions come from (see SOURCES)
    time: '30–45 min',
    shelf: 'biology',
    name: 'Jeopardy',
    tagline: 'The classic quiz board, for biology.',
    description:
      'Two teams take turns picking a category and a point value. Everyone on the team votes on their phone, and the most popular answer counts. Miss it, and the other team gets a chance to steal.',
    best: 'A fast review of one chapter',
    subjects: 'Biology only',
    teams: '2 teams (at least 1 student each)',
    questions: 'Multiple choice & true/false',
    howToPlay: [
      'The leader hosts a game and shows the join code. Students join on their phones and are put on a team.',
      'Pick the chapters, then start. The board fills with categories and point values.',
      'The team whose turn it is picks a tile. Teammates vote on their phones (an optional timer keeps it moving).',
      'A right answer earns the points. A wrong one lets the other team steal.',
      'When the board is cleared, the team with the most points wins. Review the questions and download the results at the end.',
    ],
    url: 'https://biology-jeopardy.vercel.app/',
  },
  {
    id: 'organized',
    minutes: [15, 25], // for the time filter
    solo: true, // one student can play it alone
    source: 'own', // where its questions come from (see SOURCES)
    time: '15–25 min',
    shelf: 'biology',
    name: 'Organ-ized Chaos',
    tagline: 'The organs got mixed up. Put the patient back together!',
    description:
      "Every team gets a patient whose organs are all mixed up, dealt to students' phones as cards. The patient is rebuilt like a puzzle, one body system at a time (say Skeletal, then Cardiovascular, then Nervous): students find the cards that belong to the current system and play them. A wrong card is a rejection and the patient's vitals drop. Rebuild your patient first, with the best vitals, to win.",
    best: 'Body systems: what goes where, and what each organ does',
    subjects: 'Biology (anatomy & physiology)',
    teams: '1–8 teams (at least 1 student each)',
    questions: 'A built-in set of 68 organs across all 11 body systems, plus organs instructors submit and reviewers approve',
    howToPlay: [
      'The leader opens the lobby and shows the join code. Students join on their phones and are put on teams.',
      'Pick a level (1: organ names, 2: functions only, 3: functions plus organs that belong to two systems), how many body systems (3 to 6, drawn at random) and how many organs per system.',
      "Every team gets the same patient. Its organs, from all the game's systems, are dealt at random to the team's phones; only you see your cards. The systems are rebuilt one at a time, in a random order: each one is revealed when the one before it is complete.",
      'Play only the cards that belong to the current system. A wrong card is a rejection: it stays in hand and the vitals drop. After two misses a card shows a hint. At level 3, two-system organs are needed in both of their systems.',
      'The first patient rebuilt earns a finish bonus, plus the vitals left. The results show the answer key with the organs the class missed most, and an Excel download.',
    ],
    url: 'https://pltl-organ-ized-chaos.vercel.app/',
  },
  {
    id: 'monopoly',
    minutes: [45, 60], // for the time filter
    solo: false, // one student can play it alone
    source: 'bank', // where its questions come from (see SOURCES)
    time: '45–60 min (or end any time)',
    shelf: 'any',
    name: 'Monopoly',
    tagline: 'Roll, answer, buy, and build.',
    description:
      'Teams move around a property board and answer a question to buy the space they land on. Cheap properties ask easier questions and pricey ones ask harder ones. Own a full color set to build, collect rent, and trade with other teams.',
    best: 'A longer, strategic session',
    subjects: 'Any subject',
    teams: '2–8 teams (at least 1 student each)',
    questions: 'Multiple choice & true/false',
    howToPlay: [
      'The leader hosts a game and shows the join code. Students join on their phones and are put on teams.',
      'Pick the subject, course and chapters, then start.',
      'A student on the team rolls on their phone, taking turns. The team moves around the board.',
      'Land on a property and the team answers on their phones. A right answer lets them buy it. Land on another team\'s property and pay rent.',
      'Own every property of a color to build houses and hotels. Teams can trade properties and cash.',
      'Doubles roll again; doubles twice in a row (or Go To Jail) sends a team to jail. Pay $50 bail or roll doubles to get out.',
      'A team below $0 goes bankrupt and its students join the other teams. The last team standing wins, or the leader ends the game and the highest net worth wins.',
    ],
    url: 'https://pltl-monopoly.vercel.app/',
  },
  {
    id: 'escape',
    minutes: [15, 30], // for the time filter
    solo: true, // one student can play it alone
    source: 'bank', // where its questions come from (see SOURCES)
    time: '15–30 min (more locks, longer)',
    shelf: 'any',
    name: 'Escape Room',
    tagline: 'Type the answer to open the lock.',
    description:
      'Every team races at the same time through a chain of locks. Each lock is a question students answer by typing, not by picking from choices, and small typos are forgiven. First team out wins.',
    best: 'Lab practicals and vocabulary',
    subjects: 'Any subject',
    teams: '1–8 teams (solo works)',
    questions: 'Open response (typed answers)',
    howToPlay: [
      'The leader hosts a game and shows the join code. Students join on their phones and are put on teams.',
      'Pick the chapters and how many locks (6 to 30), then start the escape.',
      'Each team draws its own random locks. Each lock has a key-holder: that teammate types the answer while the team helps.',
      'Three guesses per lock: wrong guesses add 15, 30, then 45 seconds, and the third shows the answer and moves that question 3 locks later. A hint (+60 s) shows the first letter and word lengths.',
      'The first team to open every lock escapes. The fastest time (plus hint penalties) wins.',
    ],
    url: 'https://pltl-escape-room.vercel.app/',
  },
  {
    id: 'imposter',
    minutes: [20, 40], // for the time filter
    solo: false, // one student can play it alone
    source: 'own', // where its questions come from (see SOURCES)
    time: 'About 5 min a round · 20–40 min',
    shelf: 'any',
    name: 'Imposter',
    tagline: 'Everyone knows the category. Except the alien.',
    description:
      "Each crew gets a secret category, like Stages of mitosis, except one student: the alien. Everyone gives one example out loud (prophase, anaphase...), then the crew votes. In hard mode the alien secretly gets a similar category (Cell cycle), so their clue almost fits: \"interphase\" gives them away.",
    best: 'Explaining concepts and vocabulary out loud',
    subjects: 'Any subject',
    teams: '1 or more groups of 4–8 (at least 3 to play)',
    questions: 'Its own category prompts (with examples and a look-alike category)',
    howToPlay: [
      'The leader hosts a game and shows the join code. Students join on their phones and are put into crews (groups).',
      'Pick the chapters, the thinking time, and whether to play hard mode, then start.',
      "Every phone shows the crew's secret category, except the alien's, which only says they're the alien. In hard mode the alien gets a similar category instead and isn't told.",
      'After the thinking time, students give one clue each out loud, in the order on screen, tapping Done when finished.',
      'The crew votes on their phones for who they think the alien is. An unmasked alien gets one guess at the category.',
      'Alien unmasked: the rest of the crew +1. Alien escapes or guesses the category: alien +2. The projector then shows the category and its examples.',
    ],
    url: 'https://pltl-imposter.vercel.app/',
  },
  {
    id: 'cascade',
    minutes: [15, 30], // for the time filter
    solo: true, // one student can play it alone
    source: 'own', // where its questions come from (see SOURCES)
    shelf: 'any',
    time: '15–30 min',
    name: 'Cascade',
    tagline: 'Every step sets off the next.',
    description:
      "Put a process in order as a team: the phases of mitosis, the steps of balancing an equation, a titration. Each step is a card dealt to someone's phone, and only they can see it. Talk it out and play the cards in order. One wrong card and the whole chain collapses: the cards are re-dealt and the team starts over.",
    best: 'Processes and procedures with a set order',
    subjects: 'Any subject',
    teams: '1–8 teams (3–6 students each works best)',
    questions: 'Sequences of steps, filed under each professor\'s chapters (starter sets for every course, plus your own)',
    howToPlay: [
      'The leader hosts a game and shows the join code. Students join on their phones and are put on teams.',
      'Pick the course, the professor and the chapters (or, for subjects without chapters yet, the subject and topics), then start. Each team gets a sequence, and its steps are dealt to the team\'s phones (some students may hold two cards).',
      'Each phone only shows its own cards. The team talks it out, and whoever holds the next step taps it to play it.',
      'Right card: the chain grows. Wrong card: the chain collapses, everyone gets new cards, and the team starts that sequence over.',
      'Finishing a sequence earns 100 points (minus 15 per collapse) and brings the next one. Leaders can add their own sequences on the Submit page.',
    ],
    url: 'https://pltl-cascade.vercel.app/',
  },
  {
    id: 'bakery',
    minutes: [10, 45], // for the time filter
    solo: true, // one student can play it alone
    source: 'generated', // where its questions come from (see SOURCES)
    time: '10–45 min (you pick the shift)',
    shelf: 'chemistry',
    name: 'Beaker Bakery',
    tagline: 'Convert it right, bake it right.',
    description:
      "Chemistry conversions come in as kitchen orders. The line cook writes the conversion chain on their phone: if a factor is flipped or the units don't cancel, the dish burns. Right setup but wrong math or sig figs? Undercooked. Get it all right before the customer walks out.",
    best: 'Dimensional analysis and sig figs',
    subjects: 'Chemistry',
    teams: '1–8 teams (solo works, at least 1 student each)',
    questions: 'Built-in orders with random numbers (no question bank needed)',
    howToPlay: [
      'The leader hosts a game and shows the join code. Students join on their phones and are put on teams (one team, or even one student, works).',
      'Pick the menus (Breakfast: metric prefixes; Lunch: grams, moles and molecules; Dinner: molarity, density and stoichiometry) and the shift length, then open the kitchen.',
      'Each team gets an order ticket and has 5 minutes to serve it. The line cook (it rotates every order) types the conversion factors and the final amount while the team helps out loud, with a built-in calculator on every phone.',
      "🧁 Perfect earns 100 points plus a speed tip. 🥞 Undercooked (right setup, wrong math or sig figs) earns 50. 🔥 Burnt means a factor is wrong or the units don't cancel: try again, and three burns throws the order out.",
      'When the shift clock runs out, teams are ranked by points and stars, and the leader can review every order and download the results.',
    ],
    url: 'https://pltl-beaker-bakery.vercel.app/',
  },
  {
    id: 'limitingsuspect',
    minutes: [20, 45], // for the time filter
    solo: true, // one student can play it alone
    source: 'generated', // where its questions come from (see SOURCES)
    shelf: 'chemistry',
    time: '20–45 min (the leader sets a case clock, or none)',
    name: 'Limiting Suspect',
    tagline: 'A pharmacy break-in, solved with stoichiometry.',
    description:
      "Someone broke into the hospital pharmacy and a patient fell ill. Each team gets its own case (its own stolen medicine, suspects and numbers) and cracks it in four acts: balance the crime lab's test reactions (single displacement, double displacement, strong acid + strong base), turn the residue's silver chloride precipitate into moles and a molar mass to identify the medicine, convert prescription doses from mg to mmol to find the stolen bottle, and work out how much is missing to name the thief.",
    best: 'Stoichiometry: balancing equations, moles and molar mass, mole ratios',
    subjects: 'Chemistry',
    teams: '1–8 teams (at least 1 student each)',
    questions: 'Generated cases (no question bank): every team gets different numbers every game',
    howToPlay: [
      'The leader opens the lobby and shows the join code. Students join on their phones and are put on teams; the leader picks a case clock (20, 30 or 45 minutes, or none).',
      "Every phone shows the team's case file. One student is the lead detective and types the answer for each clue; the role rotates every clue, so everyone leads.",
      'Act 1: balance four lab tests (a single displacement, a double displacement, a strong acid with a strong base, and one more); each unlocks a medicine\'s molar mass. Act 2: the residue gives a silver chloride precipitate; grams of AgCl to moles, then grams of residue ÷ moles = molar mass, which identifies the medicine. Act 3: match patients\' doses (mg) to the pharmacy log (mmol); the leftover medicine was stolen. Act 4: how many mmol are missing? The thief\'s vial holds exactly that much.',
      'Wrong tries cost a quarter of a clue\'s points; after three, the team can see the answer and move on for 0 points. Every phone has a calculator and a molar-mass reference card.',
      "The projector is a corkboard of every team's case file, stamped as each clue is solved. The results show every team's whole case with the answers, and an Excel download.",
    ],
    url: 'https://pltl-limiting-suspect.vercel.app/',
  },
  {
    id: 'whatsthedamage',
    minutes: [20, 45], // for the time filter
    solo: true, // one student can play it alone
    source: 'generated', // where its questions come from (see SOURCES)
    shelf: 'math',
    time: '20–45 min (4, 6 or 8 orders; the leader can set a clock)',
    name: "What's the Damage?",
    tagline: 'The food truck lost its menu. Solve the receipts!',
    description:
      "A food truck lost its menu board, but the old receipts survived (\"2 tacos + 1 agua fresca = $8.50\"). Every order is a system of equations with 2 or 3 unknown prices. Teams solve for the prices, then ring up a new customer's order: the damage. Every team gets its own generated orders.",
    best: 'College algebra: systems of linear equations (2 and 3 variables), substitution and elimination',
    subjects: 'Math (college algebra)',
    teams: '1–8 teams (at least 1 student each)',
    questions: 'Generated systems (no question bank): every team gets different numbers every game, always with exactly one solution',
    howToPlay: [
      'The leader opens the lobby and shows the join code. Students join on their phones and are put on teams; the leader picks 2 unknowns, 3 unknowns or a mix, how many orders (4, 6 or 8), and an optional clock.',
      'Every order: the receipts are a system of equations. The team solves for every item\'s price (a button shows the receipts as x, y, z equations), then works out the total for a new customer: the damage.',
      'One student is the lead solver and types each answer; the role rotates every step. Wrong prices are told which receipts they do and don\'t satisfy, like plugging the answer back in.',
      'Wrong tries cost a quarter of a step\'s points; after three, the team can see the answer and move on for 0. Every phone has a calculator.',
      'Jumpstart mode (for the Jumpstart sections): friendlier numbers, a worked first step on every order, a hint after one miss, and the answer after two.',
      "The projector shows every team's truck, with each order ticket stamped PAID as it's served. The results show every system with its answer, and an Excel download.",
    ],
    url: 'https://pltl-whats-the-damage.vercel.app/',
  },
  {
    id: 'patchknight',
    minutes: [20, 40], // for the time filter
    solo: true, // one student can play it alone
    source: 'own', // where its questions come from (see SOURCES)
    shelf: 'business-engineering',
    time: 'About 20–40 min (10, 15 or 20 bugs per student, at their own pace)',
    name: 'Patch Knight',
    tagline: 'The game is broken. Your code fixes it.',
    description:
      "An RPG where every zone is bugged: the shop's math is wrong, windmills spin forever, swords point to the wrong things, the dungeon never stops generating rooms. Students fix real C++ to repair the world: CS1 review (variables, if/else, loops, functions, arrays & strings) and CS2 (linked lists, pointers, classes, recursion, sorting, searching).",
    best: 'CS1 review and CS2: debugging and reading C++',
    subjects: 'Computer science (C++)',
    teams: 'Solo or small groups (one screen each)',
    questions: 'Built-in banks of 20 C++ bugs per topic (220 in all): fill in the blank, find & fix, put in order, predict the output',
    howToPlay: [
      'The leader opens the lobby and shows the join code. Students join solo or as a small group on one laptop while the leader picks the topics (CS1 review, CS2, or a mix) and how many bugs each student gets (10, 15 or 20), then starts the game.',
      "Each knight gets their own random bugs from each chosen topic's bank of 20, so neighbors get different ones, and works through the zones in order. CS1: variables, if/else, loops, functions, arrays & strings. CS2: linked lists, pointers, classes, recursion, sorting, searching.",
      'Every zone has bugs in real C++. Fill in a blank, click the broken line and rewrite it, put lines in order, or predict the output. Fixing a bug repairs that part of the game.',
      'Wrong answers show what that mistake would break. Hints cost XP, and after three misses a knight can ask to see the fix.',
      'The leader\'s dashboard shows every knight\'s zone and progress live, plus the bugs the class misses most. End the game for a report and an Excel download.',
    ],
    url: 'https://pltl-patch-knight.vercel.app/',
  },
]

// The shelves, top to bottom: games that work with any subject first, then one shelf per subject, A to Z.
// comingSoon: empty "coming soon" spots on that shelf.
export const SHELVES = [
  { id: 'any', title: 'Any subject', note: 'Use questions from any course in the shared bank', comingSoon: 0 },
  { id: 'biology', title: 'Biology', note: 'Built for biology questions', comingSoon: 0 },
  { id: 'business-engineering', title: 'Business & Engineering', note: 'Built for computer science, engineering and business', comingSoon: 0 },
  { id: 'chemistry', title: 'Chemistry', note: 'Built for chemistry skills', comingSoon: 0 },
  { id: 'math', title: 'Math', note: 'Built for math skills', comingSoon: 0 },
]

// Every game in shelf order (the order the arrow keys move through)
export const ORDERED = SHELVES.flatMap((shelf) => GAMES.filter((g) => g.shelf === shelf.id))

export const link = (game, path = '') => new URL(path, game.url).toString()

// The filters on the hub
export const TIMES = [
  { id: 'quick', label: '≤ 20 min', fits: (g) => g.minutes[0] <= 20 },
  { id: 'class', label: '20–45 min', fits: (g) => g.minutes[0] <= 45 && g.minutes[1] >= 20 },
  { id: 'long', label: '45 min +', fits: (g) => g.minutes[1] >= 45 },
]
export const SOURCES = [
  { id: 'bank', label: 'Shared question bank' },
  { id: 'own', label: 'Its own set' },
  { id: 'generated', label: 'Generated fresh' },
]
