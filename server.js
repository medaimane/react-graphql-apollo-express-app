const express = require('express')
const cors = require('cors')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema')

const app = express()

/** CORS policy: Allow cross-origin  */
app.use(cors())

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server listening on ${PORT}`))
