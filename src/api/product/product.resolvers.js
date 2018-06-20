export default {
  Query: {
    async allProducts(_, args, ctx) {
      return await ctx.models.product.find();
    },
    async getProduct(_, { _id }, ctx) {
      return await ctx.models.product.findById(_id);
    }
  },
  Mutation: {
    async createProduct(_, { input }, ctx) {
      console.log('2. Product parent resolver run');
      return await ctx.models.product.create({
        ...input,
        owner: ctx.userId
      });
    },
    async updateProduct(_, { _id, input }, ctx) {
      return await ctx.models.product.findOneAndUpdate({ _id }, input, {
        new: true
      });
    },
    async deleteProduct(_, { _id }, ctx) {
      return await ctx.models.product.findByIdAndRemove(_id);
    }
  },
  Product: {
    async owner(product, args, ctx) {
      console.log('Owner resolver run');
      console.log(product);
      const owner = await ctx.models.user.findOne(
        {
          _id: product.owner
        },
        '_id email'
      );
      return owner;
    }
  }
};
