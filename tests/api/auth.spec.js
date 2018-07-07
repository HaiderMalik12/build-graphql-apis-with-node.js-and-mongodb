
import axios from 'axios';
import { clearCollection, disConneectMongo } from '../db';

describe.only('resolvers', () => {
    beforeEach(clearCollection);
    afterAll(disConneectMongo);
    test('should create a new account for the user', async () => {
        const response = await axios.post('http://localhost:3000/graphql', {
            query:
                `mutation Signup($input: AuthInput!)
            {
              signup(input: $input){
                user{
                  email
                }
              }
            }`,
            variables: {
                "input": {
                    "email": "jane_doe@gmail.com",
                    "password": "password"
                }
            }
        },
        );
        expect(response.status).toBe(200);
        expect(response.data).toMatchObject({
            "data": {
                "signup": {
                    "user": {
                        "email": "jane_doe@gmail.com"
                    }
                }
            }
        })

    })
});
