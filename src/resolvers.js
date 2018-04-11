export const resolvers = {
    Query: {
        hello(root, args, context, info) {
            return 'Welcome to GraphQL'
        }
    }
}