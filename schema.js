/*
 * GraphQl related Code Schema
 * # we gonna using the [SpeaceX API]
 */

const axios = require('axios')

const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema
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
    launch_date_local: {
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
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    launches: {
      type: new GraphQLList(LaunchType),
      resolve (parent, args) {
        return axios.get('https://api.spacexdata.com/v3/launches') // Using spacexdata api endpoints
          .then(res => res.data)
      }
    },
    launch: {
      type: LaunchType,
      args: {
        flight_number: { type: GraphQLInt }
      },
      resolve (parent, args) {
        return axios.get(`https://api.spacexdata.com/v3/launches/${args.flight_number}`)
          .then(res => res.data)
      }
    },
    rockets: {
      type: new GraphQLList(RocketType),
      resolve (parent, args) {
        return axios.get('https://api.spacexdata.com/v3/rockets') // Using spacexdata api endpoints
          .then(res => res.data)
      }
    },
    rocket: {
      type: RocketType,
      args: {
        rocket_id: { type: GraphQLString }
      },
      resolve (parent, args) {
        return axios.get(`https://api.spacexdata.com/v3/rockets/${args.rocket_id}`)
          .then(res => res.data)
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})
