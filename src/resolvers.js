export const resolvers = {
    Query: {
        hello(root, { msg }, context, info) {
            console.log(info);
            return msg;
        }
    }
}