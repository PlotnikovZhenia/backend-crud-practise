const http = require('http')
const mongoose = require ('mongoose')
const server = require('./server');
const events = require('./events');

const {
    userMongo,
    passMongo
  } = require('../config/default.json')

//mongo auth in config/default (secret)
const DB_URL=`mongodb+srv://${userMongo}:${passMongo}@atlascluster.yhy3drp.mongodb.net/?retryWrites=true&w=majority`

const PORT = server.get('port');
async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        events.bind(http.createServer(server).listen(PORT));
    } catch (e) {
        console.log(e)
    }
}
startApp()