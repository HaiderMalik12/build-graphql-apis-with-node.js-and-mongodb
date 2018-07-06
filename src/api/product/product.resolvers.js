import { parseDate } from "../../utils/util";

export default {
  Query: {
    async allProducts(_, { first = 10, skip = 0, filter, orderBy }, ctx) {
      const query = filter
        ?
        {
          $or: [
            { name: filter }
          ]
        } :
        {};
      return await ctx.models
        .product
        .find(query)
        .select('_id name qty owner createdAt status')
        .skip(skip)
        .limit(first)
        .sort(orderBy)

    },
    async findAllProducts(_, { first = 10, cursor }, ctx) {
      const query = {};
      //cursor "12312313"
      if (cursor) {
        const date = parseDate(cursor);
        query.createdAt = {
          $lt: date
        }
      }
      return await ctx.models
        .product
        .find(query)
        .select('_id name qty createdAt owner status')
        .limit(first)
        .sort('-createdAt')

    },
    async getProduct(_, { _id }, ctx) {
      return await ctx.models.product.findById(_id);
    }
  },
  Mutation: {
    async createProduct(_, { input }, ctx) {
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
