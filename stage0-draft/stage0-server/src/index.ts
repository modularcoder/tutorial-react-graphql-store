import { merge } from 'lodash'
import { ApolloServer, makeExecutableSchema } from 'apollo-server'
import { typeDef as Book, resolvers as bookResolvers } from './Book/Book'
import { typeDef as Author, resolvers as authorResolvers } from './Author/Author'
// import {
//   typeDef as Author,
//   resolvers as authorResolve rs,
// } from './author.js';

// If you had Query fields not associated with a
// specific type you could put them here
const Query = `
  type Query {
    _empty: String
  }
`

const resolversRoot = {}

const schema = makeExecutableSchema({
  typeDefs: [Query, Book, Author],
  resolvers: merge(resolversRoot, bookResolvers, authorResolvers),
})

const server = new ApolloServer({ schema })

// normal ApolloServer listen call but url will contain /graphql
server.listen().then(({ url }: { url: string }) => {
  console.log(`🚀 Server ready at ${url}`)
})

export default {}
