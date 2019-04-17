const mergeTypes = require('merge-graphql-schemas')

type Product {
  supplier: String!
  product: String!
  price: Number!
}

type Query {
  product(id: String!): User
  products: [User]
}

type Mutation {
  addProduct(supplier: String!, product: String!, price: Number!): Product
  editProduct(supplier: String, product: String, price: Number): Product
  deleteProduct(supplier: String, product: String, price: Number): Product
}

const typeDefs = [Product]

module.exports = mergeTypes(typeDefs, { all: true })
