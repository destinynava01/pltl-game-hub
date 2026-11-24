// The games on the shelf. To add a game: add an entry here (and its box art in GameBox.jsx).
// Each game is its own website; the hub only launches it.
//   tagline     one line under the name
//   description a short paragraph about the game
//   best        what it's best for (shown as "Recommended for")
//   howToPlay   the steps, in order
//   subjects    which subjects the game has questions for
//   url         the game's main address (its leader lobby)
export const GAMES = [
  {
    id: 'jeopardy',
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
    id: 'monopoly',
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
    name: 'Imposter',
    tagline: 'Everyone knows the word. Except the alien.',
    description:
      'Each crew gets a secret term, except one student: the alien, who only sees the chapter. Everyone gives one clue out loud, then the crew votes. Students have to explain a concept well enough to prove they know it, without giving it away.',
    best: 'Explaining concepts and vocabulary out loud',
    subjects: 'Any subject',
    teams: 'Groups of 4–8 (at least 3 each)',
    questions: 'Its own term bank (+ optional multiple-choice answers)',
    howToPlay: [
      'The leader hosts a game and shows the join code. Students join on their phones and are put into crews (groups).',
      'Pick the chapters, the thinking time, and whether to play hard mode, then start.',
      "Every phone shows the crew's secret term, except the alien's, which shows only the chapter. In hard mode the alien gets a similar term instead and isn't told.",
      'After the thinking time, students give one clue each out loud, in the order on screen, tapping Done when finished.',
      'The crew votes on their phones for who they think the alien is. An unmasked alien gets one guess at the term.',
      'Alien unmasked: the rest of the crew +1. Alien escapes or guesses the term: alien +2. The projector then shows the term and its question to teach from.',
    ],
    url: 'https://pltl-imposter.vercel.app/',
  },
]

// Empty spots on the shelf for games that aren't built yet
export const COMING_SOON = 1

export const link = (game, path = '') => new URL(path, game.url).toString()
