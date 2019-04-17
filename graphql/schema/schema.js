const graphql = require('graphql')
const Product = require('../../models/product')

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} = graphql

const ProductType = new GraphQLObjectType({
  name: 'Product',
  fields: ( ) => ({
    id: { type: GraphQLID },
    supplier: { type: GraphQLString },
    product: { type: GraphQLString },
    price: { type: GraphQLInt }
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    products: {
      type: new GraphQLList(ProductType),
      resolve(parent, args){
        return Product.find({})
      }
    }
  }
})


module.exports = new GraphQLSchema({
  query: RootQuery
})
