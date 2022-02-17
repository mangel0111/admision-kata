'use strict';

import {initDB} from '../db';

jest.mock('../db', () => ({
    initDB: connect,
}));

const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

let mongod : any = undefined;


/**
 * Connect to the in-memory database.
 */
const connect = async () => {
    mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();
    const mongooseOpts = {
        useNewUrlParser: true,
        autoReconnect: true,
        reconnectTries: Number.MAX_VALUE,
        reconnectInterval: 1000
    };

    await mongoose.connect(uri, mongooseOpts);
};
module.exports.connect = connect

/**
 * Drop database, close the connection and stop mongod.
 */
module.exports.closeDatabase = async () => {
    if (mongod) {
        await mongoose.connection.dropDatabase();
        await mongoose.connection.close();
        await mongod.stop();
    }
};

/**
 * Remove all the data for all db collections.
 */
module.exports.clearDatabase = async () => {
    if (mongod) {
        const collections = mongoose.connection.collections;

        for (const key in collections) {
            const collection = collections[key];
            await collection.deleteMany();
        }
    }
};