import eventResolvers from './event.resolvers';
import eventModel from './event.model';
import { loadGQLFile } from '../../utils/gqlLoader';
export default {
  resolvers: eventResolvers,
  model: eventModel,
  typeDefs: loadGQLFile('event/event.graphql')
};
