import product from './product';
import auth from './auth';

export default {
  resolvers: Object.assign({}, product.resolvers, auth.resolvers),
  typeDefs: [product.typeDefs, auth.typeDefs].join(' '),
  context: {
    models: {
      product: product.model,
      user: auth.model
    }
  }
};
