export default {
  Query: {
    async findEventsAtVenue(_, { venue }, { models }) {
      return await models.event.find({ venue });
    }
  },
  Mutation: {
    async newEvent(_, { input }, { models }) {
      return await models.event.create(input);
    }
  },
};
