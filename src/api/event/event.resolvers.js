export default {
  Query: {
  },
  Mutation: {
    async newEvent(_, { input }, { models }) {
      return await models.event.create(input);
    }
  }
};
