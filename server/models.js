import mongoose from 'mongoose';

import Test from './model/Test';
// import Message from './message';

const connectDb = () => {
    return mongoose.connect(process.env.MONGODB_URL);
};

const models = { Test };

export { connectDb };

export default models;