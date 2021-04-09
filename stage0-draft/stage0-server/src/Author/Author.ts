export const typeDef = `
  extend type Query {
    author(id: Int!): Author
  }

  type Author {
    name: String
    books: [Book]
  }
`

export const resolvers = {
  Query: {
    author: () => {
      return {}
    },
  },
  Author: {
    books: () => {
      return {}
    },
  },
}
