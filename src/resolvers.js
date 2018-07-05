export const resolvers = {
    Query: {
        hello(parent, args, ctx, info) {
            return ' Hello GraphQL'
        }
    }
}
