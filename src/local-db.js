const games = [
  {
    id: '1',
    title: 'Global Gladiators',
    releaseDate: new Date('12-08-1992'),
    likes: 373,
    dislikes: 2,
    comments: [],
    characters: [
      {
        id: '5',
        name: 'Mick'
      },
      {
        id: '6',
        name: 'Mack'
      }
    ]
  },
  {
    id: '2',
    title: 'Fantastic Dizzy',
    releaseDate: new Date('01-02-1991'),
    likes: 90,
    dislikes: 0,
    comments: [],
    characters: [
      {
        id: '7',
        name: 'Dylan'
      }
    ]
  }
]

const characters = [
  {
    id: '1',
    name: 'Sonic the Hedgehog'
  },
  {
    id: '2',
    name: 'Big Boss'
  },
  {
    id: '3',
    name: 'Camilla'
  },
  {
    id: '4',
    name: 'Joanna Dark'
  },
  {
    id: '5',
    name: 'Mick'
  },
  {
    id: '6',
    name: 'Mack'
  },
  {
    id: '7',
    name: 'Dylan'
  }
]

export { games, characters }
