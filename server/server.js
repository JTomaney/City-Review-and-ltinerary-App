const express = require('express');
const app = express();
const path = require('path');
const parser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

const publicPath = path.join(__dirname, '../client/public');
app.use(express.static(publicPath));

app.use(parser.json());

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('uk_cities_hub');
    const citiesCollection = db.collection('uk_cities');
    const citiesRouter = createRouter(citiesCollection);
    app.use('/api/cities', citiesRouter);

    const myCitiesCollection = db.collection('my_uk_cities');
    const myCitiesRouter = createRouter(myCitiesCollection);
    app.use('/api/my-cities', myCitiesRouter);

    const itineraryCollection = db.collection('itinerary');
    const itineraryRouter = createRouter(itineraryCollection);
    app.use('/api/itinerary', itineraryRouter);
  })
  .catch(console.err);

app.listen(3000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
