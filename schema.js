/*
 * GraphQl related Code Schema
 * # we gonna using the [SpeaceX API]
 */

const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQlList
} = require('graphql')

/*
 * Define graphql types
 */

// 1° Launch type
const LaunchType = new GraphQLObjectType({
  name: 'Launch',
  fields: () => ({
    flight_number: {
      type: GraphQLInt
    },
    mission_name: {
      type: GraphQLString
    },
    launch_year: {
      type: GraphQLString
    },
    launch_data_local: {
      type: GraphQLString
    },
    launch_success: {
      type: GraphQLBoolean
    },
    rocket: {
      type: RocketType
    }
  })
})

// 2° Rocket type
const RocketType = new GraphQLObjectType({
  name: 'Rocket',
  fields: () => ({
    rocket_id: {
      type: GraphQLString
    },
    rocket_name: {
      type: GraphQLString
    },
    rocket_type: {
      type: GraphQLString
    }
  })
})

// 3° Root Query
const RootQuery = GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    launches: {
      type: new GraphQlList(LaunchType)
      resolve(parent, args) {
          
      }
    }
  }
})
