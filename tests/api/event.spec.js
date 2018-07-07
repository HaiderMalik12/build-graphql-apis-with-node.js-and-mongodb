import eventResolvers from '../../src/api/event/event.resolvers';
import { models } from '../db';
import { clearCollection, disConneectMongo } from '../db';

describe('event resolvers', () => {
    beforeEach(clearCollection);
    afterAll(disConneectMongo);
    test('find all the events by venue', async () => {
        const event = await models.event.create({
            name: 'Angular Conference',
            type: 'CONFERENCE',
            venue: 'Europe'
        });
        const results = await eventResolvers.Query.findEventsAtVenue(
            null,
            { venue: 'Europe' },
            {
                models: {
                    event: models.event
                }
            }
        );
        expect(results).toHaveLength(1);
    })
})