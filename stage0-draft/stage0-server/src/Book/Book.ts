export const typeDef = `
  type Book {
    title: String
    author: Author
  }

  extend type Query {
    books: [Book]
    bookById(id: Int!): Book
  }
`

export const resolvers = {
  Book: {
    author: () => {
      return { name: 'Annasun' }
    },
    //   title: () => 'mumu',
    //   author: () => {
    //     return { name: 'Valod Jan' }
    //   },
  },
  Query: {
    books: () => {
      return [{ title: 'valod' }]
    },
    bookById: () => {
      return { title: 'CHaynik jan', lolo: 'koko' }
    },
  },
}
