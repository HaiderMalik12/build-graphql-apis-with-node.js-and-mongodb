import product from './product';
import auth from './auth';
import event from './event';
import { PubSub } from 'graphql-yoga';

import { merge } from 'lodash';
import search from './search';

const pubSub = new PubSub();
export default {
  resolvers: merge({}, auth.resolvers, product.resolvers, event.resolvers, search.resolvers),
  typeDefs: [product.typeDefs, auth.typeDefs, event.typeDefs, search.typeDefs].join(' '),
  context: req => ({
    ...req,
    models: {
      product: product.model,
      user: auth.model,
      event: event.model
    },
    pubSub
  })
};
