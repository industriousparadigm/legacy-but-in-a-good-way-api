import { GraphQLScalarType } from 'graphql'
import { Kind } from 'graphql/language'
import { games, characters, addGame } from './local-db'

const resolvers = {
  Query: {
    games: () => games,
    game: (obj, args, context) => games.find(game => game.id === args.id)
  },
  Game: {
    characters: (obj, args) => {
      console.log({ obj })
      const characterIds = obj.characters.map(char => char.id)
      return characters.filter(char => characterIds.includes(char.id))
    }
  },
  Mutation: {
    addGame: (obj, { game }) => [...games, game]
  },
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'delivers a moment with great precision',
    parseValue: value => new Date(value), // value FROM the client
    serialize: value => value.getTime(), // value sent TO the client
    parseLiteral: ast => (ast.kind === Kind.INT ? new Date(ast.value) : null)
  })
}

export default resolvers
