// The games on the shelf. To add a game: add an entry here (and its box art in GameBox.jsx).
// Each game is its own website; the hub only links to it.
//   subjects which subjects the game has questions for
//   url      the game's main address (leader lobby)
//   join     where students go on their phones
//   submit / review   that game's question pages
export const GAMES = [
  {
    id: 'jeopardy',
    name: 'Jeopardy',
    tagline: 'Pick a category and a point value. Teams vote on their phones; miss it and the other team can steal.',
    best: 'Quick review of a chapter',
    subjects: 'Biology only',
    teams: '2 teams',
    questions: 'Multiple choice & true/false',
    url: 'https://biology-jeopardy.vercel.app/',
  },
  {
    id: 'monopoly',
    name: 'Monopoly',
    tagline: 'Roll, land, and answer to buy. Build on full color sets, collect rent, trade with other teams.',
    best: 'A longer, strategic session',
    subjects: 'Any subject',
    teams: '2–8 teams',
    questions: 'Multiple choice & true/false',
    url: 'https://pltl-monopoly.vercel.app/',
  },
  {
    id: 'escape',
    name: 'Escape Room',
    tagline: 'Every team races through a chain of locks. Type the answer to open each one. First team out wins.',
    best: 'Lab practicals and vocabulary',
    subjects: 'Any subject',
    teams: '2–8 teams',
    questions: 'Open response (typed answers)',
    url: 'https://pltl-escape-room.vercel.app/',
  },
]

// Empty spots on the shelf for games that aren't built yet
export const COMING_SOON = 1

export const link = (game, path = '') => new URL(path, game.url).toString()
