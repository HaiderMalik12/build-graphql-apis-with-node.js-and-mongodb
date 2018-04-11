import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `
type Product {
    _id : ID
    name: String!
    qty: Int
}
 type Query {
     allProducts: [Product]
 }
`
export default makeExecutableSchema({
    typeDefs,
    resolvers
});