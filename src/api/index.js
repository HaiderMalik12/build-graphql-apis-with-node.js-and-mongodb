import product from './product';

export default {
    resolvers : Object.assign({}, product.resolvers),
    typeDefs : [product.typeDefs].join(' '),
    context: {
        models :{
            product : product.model
        }
    }
}