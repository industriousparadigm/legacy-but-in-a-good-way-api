import { ApolloServer, gql } from 'apollo-server'
import typeDefs from './typeDefs'
import resolvers from './resolvers'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspecton: true,
  playground: true
})

server
  .listen({
    port: process.env.PORT || 4000
  })
  .then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
  })
