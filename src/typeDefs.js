import { gql } from 'apollo-server'

const typeDefs = gql`
  scalar Date

  enum Status {
    PLAYED
    INTERESTED
    UNKNOWN
  }

  type Character {
    id: ID
    name: String
  }

  input CharacterInput {
    id: ID
    name: String
  }

  type Game {
    id: ID!
    title: String!
    releaseDate: Date
    likes: Int!
    dislikes: Int!
    comments: [String]!
    characters: [Character]!
    status: Status
  }

  input GameInput {
    id: ID
    title: String
    releaseDate: Date
    likes: Int
    dislikes: Int
    comments: [String]
    characters: [CharacterInput]
    status: Status
  }

  type Query {
    games: [Game]
    game(id: ID): Game
  }

  type Mutation {
    addGame(game: GameInput): [Game]
  }
`

export default typeDefs
