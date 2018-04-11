const products = [{
    _id: '12',
    name: 'GraphQL course',
    qty: 1
}, {
    _id: '13',
    name: 'Nodejs course',
    qty: 1
}]
import Product from './models/product';

export const resolvers = {
    Query: {
        async allProducts() {
            return await Product.find()
        },
        async getProduct(_, { _id }) {
            return await Product.findById(_id);
        }
    },
    Mutation: {
        async createProduct(_, { input }) {
            return await Product.create(input);
        }
    }
}