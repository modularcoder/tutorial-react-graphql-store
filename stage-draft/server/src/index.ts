import dotenv from 'dotenv'
import { ApolloServer } from 'apollo-server'
import typeDefs from './schema'

dotenv.config()

// const books = [
//   {
//     title: 'The Awakening',
//     author: 'Kate Chopin',
//   },
//   {
//     title: 'City of Glass 2',
//     author: 'Paul Auster',
//   },
// ]

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    // books: () => books,
  },
}

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers })

// The `listen` method launches a web server.
server.listen().then(({ url }: { url: string }) => {
  console.log(`🚀 Apollo server ready at ${url}`)
})

export {}
