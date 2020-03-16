import { ApolloServer, gql } from 'apollo-server'

const typeDefs = gql`
  type Game {
    title: String
    releaseDate: String
    likes: Int
    dislikes: Int
  }

  type Query {
    games: [Game]
  }
`
const games = [
  {
    title: 'Global Gladiators',
    releaseDate: '1992',
    likes: 373,
    dislikes: 2
  },
  {
    title: 'Fantastic Dizzy',
    releaseDate: '1993',
    likes: 90,
    dislikes: 0
  }
]

const resolvers = {
  Query: {
    games: () => games
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
