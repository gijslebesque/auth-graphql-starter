const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID } = graphql;
const USerType = require('../types/UserType');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: USerType,
      resolve(parentValue, args, req) {
        return req.user; //if signed in passport created session
      }
    }
  }
});

module.exports = RootQueryType;
