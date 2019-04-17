// const graphql = require('graphql')
//
// const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql
//
// const ProductType = new GraphQLObjectType({
//   name: 'Product',
//   fields: ( ) => ({
//     id: { type: GraphQLString },
//     supplier: { type: GraphQLString },
//     product: { type: GraphQLString },
//     price: { type: GraphQLNumber }
//   })
// })
//
// const RootQuery = new GraphQLObjectType({
//   name: 'RootQueryType',
//   fields: {
//     book: {
//       type: ProductType,
//       args: { id: { type: GraphQLString } },
//       resolve(parent, args){
//       }
//     }
//   }
// })
//
// module.exports = new GraphQLSchema({
//   query: RootQuery
// })
