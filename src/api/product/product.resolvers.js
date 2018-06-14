export default {
    Query: {
        async allProducts(_, args, ctx) {
            return await ctx.models.product.find()
        },
        async getProduct(_, { _id }, ctx) {
            return await ctx.models.product.findById(_id);
        }
    },
    Mutation: {
        async createProduct(_, { input }, ctx) {
            return await ctx.models.product.create(input);
        },
        async updateProduct(_, { _id, input }, ctx) {
            return await ctx.models.product.findOneAndUpdate({ _id }, input, { new: true })
        },
        async deleteProduct(_, { _id }, ctx) {
            return await ctx.models.product.findByIdAndRemove(_id);
        }
    }
}