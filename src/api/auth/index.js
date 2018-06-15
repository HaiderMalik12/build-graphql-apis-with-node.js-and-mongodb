import { loadGQLFile } from '../../utils/gqlLoader';
import userModel from './user.model';
import authResolvers from './auth.resolvers';

export default {
  model: userModel,
  resolvers: authResolvers,
  typeDefs: loadGQLFile('auth/auth.graphql')
};
