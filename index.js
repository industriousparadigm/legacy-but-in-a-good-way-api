import { ApolloServer, gql } from 'apollo-server'

const typeDefs = gql`
  enum Status {
    PLAYED
    INTERESTED
    UNKNOWN
  }

  type Character {
    id: ID
    name: String
  }

  type Game {
    id: ID!
    title: String!
    releaseDate: String!
    likes: Int!
    dislikes: Int!
    comments: [String]!
    characters: [Character]!
  }

  type Query {
    games: [Game]
    game(id: ID): Game
  }
`
const games = [
  {
    id: '1',
    title: 'Global Gladiators',
    releaseDate: '1992',
    likes: 373,
    dislikes: 2,
    comments: [],
    characters: []
  },
  {
    id: '2',
    title: 'Fantastic Dizzy',
    releaseDate: '1993',
    likes: 90,
    dislikes: 0,
    comments: [],
    characters: []
  }
]

const resolvers = {
  Query: {
    games: () => games,
    game: (obj, arg, context, info) => games.find(game => game.id === arg.id)
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
