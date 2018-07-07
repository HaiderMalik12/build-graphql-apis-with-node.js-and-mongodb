import { S_IFLNK } from "constants";

export default {
    Query: {
        async search(_, { name }, { models }) {
            const results = await Promise.all([
                models.event.find({ name }),
                models.product.find({ name })
            ]);
            console.log(results); //[ [], []]
            const _results = [].concat(...results);
            console.log(_results);
            return _results;
        }
    },
    SearchResult: {
        __resolveType(searchResult) {
            if (searchResult.type === 'CONCERT') {
                return 'Concert';
            } else if (searchResult.type === 'CONFERENCE') {
                return 'Conferece';
            } else if (searchResult.type === 'FESTIVAL') {
                return 'Festival';
            } else {
                return 'Product';
            }

        }
    }
}