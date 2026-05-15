const mongoose = require('mongoose');

async function connectMongo() {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    console.log('Mongo disabled: MONGO_URI is not set');
    return null;
  }

  mongoose.set('strictQuery', true);
  await mongoose.connect(uri);
  console.log('Mongo connected');
  return mongoose.connection;
}

module.exports = { connectMongo };
