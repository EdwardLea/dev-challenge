// const express = require('express')
// const mongoose = require('mongoose')
// const bodyParser = require('body-parser')
// const routes = require('./config/routes')
// const {port, dbURI } = require('./config/environment')
//
// const app = express()
//
// mongoose.connect(dbURI)
//
// app.use((req, res, next) => {
//   console.log(req.path, req.method)
//   next()
// })
// app.use(express.static(`${__dirname}/dist`))
//
// app.use(bodyParser.json())
//
// app.use('/api', routes)
//
// app.listen(port, () => console.log(`Up and running on port ${port}`))
//
// module.exports = app

// ***************** GraphQL *************************

// const express = require('express')
// const mongoose = require('mongoose')
// const bodyParser = require('body-parser')
// const {expressGraphQL, graphqlHTTP} = require('express-graphql')
// const { buildSchema } = require('graphql')
//
//
// // const cors = require('cors')
//
// const app = express()
//

//
//   // Construct a schema, using GraphQL schema language
// const schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `)
//
// // The root provides a resolver function for each API endpoint
// const root = {
//   hello: () => {
//     return 'Hello world!'
//   }
// }
//
// app.use('/graphql', graphqlHTTP({
//   schema: schema,
//   rootValue: root,
//   graphiql: true
// }))
//
// app.listen(port, () => console.log(`Up and running on port ${port}`))
//

const express = require('express')
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')
const {port, dbURI } = require('./config/environment')
const mongoose = require('mongoose')

const schema = require('./graphql/index')



const app = express()

mongoose
  .connect(
    dbURI,
    {
      useCreateIndex: true,
      useNewUrlParser: true
    }
  )
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err))

// const schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `)

// const root = {
//   hello: () => {
//     return 'Hello world!'
//   }
// }

app.use('/graphql', graphqlHTTP({
  schema: schema,
  // rootValue: root,
  graphiql: true
}))

app.listen(port, () => console.log(`Up and running on port ${port}`))

module.exports = app
