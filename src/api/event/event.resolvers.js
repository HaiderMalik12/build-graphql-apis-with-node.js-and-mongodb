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
  Event: {
    __resolveType(event) {
      switch (event.type) {
        case 'CONFERENCE':
          return 'Conference'
        case 'FESTIVAL':
          return 'Festival'
        case 'CONCERT':
          return 'Concert'
      }
    }
  }
};
