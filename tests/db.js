import Product from '../src/api/product/product.model';
import Event from '../src/api/event/event.model';
import mongoose from 'mongoose';
mongoose.Promise = global.Promise

const models = {
    product: Product,
    event: Event
}

const cleanDB = async (done) => {
    await models.event.remove({})
    await models.product.remove({})
    done()
}

const connectToDB = async () => {
    const connection = await mongoose.connect('mongodb://localhost/gql_test')
    return connection
}

const disconnectDB = (done = () => { }) => {
    mongoose.disconnect(done)
}


const generateMongooseId = () => {
    return mongoose.Types.ObjectId()
}

function clearCollection(done) {
    function clearCollections() {
        for (var collection in mongoose.connection.collections) {
            mongoose.connection.collections[collection].remove(function () { });
        }
        return done();
    }

    if (mongoose.connection.readyState === 0) {
        mongoose.connect('mongodb://localhost/gql_test', function (err) {
            if (err) throw err;
            return clearCollections();
        });
    } else {
        return clearCollections();
    }
}

function disConneectMongo(done) {
    mongoose.disconnect();
    return done();
}


export {
    cleanDB,
    connectToDB,
    disconnectDB,
    generateMongooseId,
    models,
    clearCollection,
    disConneectMongo
}
