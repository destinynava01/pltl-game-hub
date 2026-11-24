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
    teams: '2 teams',
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
    teams: '2–8 teams',
    questions: 'Multiple choice & true/false',
    howToPlay: [
      'The leader hosts a game and shows the join code. Students join on their phones and are put on teams.',
      'Pick the subject, course and chapters, then start.',
      'A student on the team rolls on their phone, taking turns. The team moves around the board.',
      'Land on a property and the team answers on their phones. A right answer lets them buy it. Land on another team\'s property and pay rent.',
      'Own every property of a color to build houses and hotels. Teams can trade properties and cash.',
      'The leader ends the game when time is up. The highest net worth wins; a team below $0 is out.',
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
    teams: '2–8 teams',
    questions: 'Open response (typed answers)',
    howToPlay: [
      'The leader hosts a game and shows the join code. Students join on their phones and are put on teams.',
      'Pick the chapters and how many locks (6 to 30), then start the escape.',
      'Each team draws its own random locks. Each lock has a key-holder: that teammate types the answer while the team helps.',
      'Stuck? A hint shows the first letter and word lengths, for +60 seconds. The leader can accept close calls.',
      'The first team to open every lock escapes. The fastest time (plus hint penalties) wins.',
    ],
    url: 'https://pltl-escape-room.vercel.app/',
  },
]

// Empty spots on the shelf for games that aren't built yet
export const COMING_SOON = 1

export const link = (game, path = '') => new URL(path, game.url).toString()
