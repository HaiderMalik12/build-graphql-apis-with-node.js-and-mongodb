import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';

import schema from './schema';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/gql_db', { useNewUrlParser: true });

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    return res.send('Hello GraphQL Here!!')
});

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
    context: {
        user: '1'
    },
}));

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`)
})