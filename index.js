const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;



// middleware
app.use(cors());
app.use(express.json());



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.r9bykuu.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri);


const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run() {
  try {
    await client.connect();
    //service gulo
    const serviceCollection = client.db('doctors_portal').collection('services');

    //bookings gulo
    const bookingCollection = client.db('doctors_portal').collection('bookings');


    app.get('/service', async (req, res) => {
      const query = {};
      const cursor = serviceCollection.find(query);
      const services = await cursor.toArray();
      res.send(services);
    });

    /***
    ===================================================
           * API Naming Convention 
    ====================================================
           * app.get('/bookings') -- get all
           * app.get('/bookings/:id') -- get one
           * app.post('/bookings') --add a new create
           * app.patch('/bookings/:id') -- update one
           * app.delete('/bookings/:id') -- delete one
    ====================================================
    ====================================================
    */

    app.post('/bookings', async (req, res) => {
      const booking = req.body;
      const quary = { treatment: booking.treatment, date: booking.date, patient: booking.patient }
      const rejult = await bookingCollection.insertOne(booking);
      res.send(rejult);

    })






  }
  finally {

  }

}

run().catch(console.dir);



app.get('/', (req, res) => {
  res.send('Hello From Doctor Uncle!')
})

app.listen(port, () => {
  console.log(`Doctors App listening on port ${port}`)
})



