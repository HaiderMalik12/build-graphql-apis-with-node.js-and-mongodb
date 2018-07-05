export const resolvers = {
    Query: {
        hello(parent, args, ctx, info) {
            console.log(ctx.user);
            console.log(info);
            return args.msg;
        }
    }
}
