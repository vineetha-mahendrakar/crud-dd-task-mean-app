const mongoUrl = process.env.MONGO_URL || 'mongodb://mongo:27017/dd_db';

module.exports = {
  url: mongoUrl
};
