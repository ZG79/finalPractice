'use strict'

require ('dotenv').config();
const express = require ('express');
const cors = require('cors');
const mongoose = require('mongoose');
const handleFiles = require('./handleFiles');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

const db = mongoose.connection;

mongoose.connect(process.env.MONGODB_URL);

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', ()=>console.log('Mongoose is connecting'));

app.get('/players', handleFiles.getPlayers);

app.post('/players', handleFiles.postPlayers);

app.delete('/players/:id', handleFiles.deletePlayers);


app.get('/', (req, res)=>{
  res.status(200).send('Default route is working');
});

app.get('*', (req, res) =>{
  res.status(404).send('Route not found');
});

app.use((err,req,res)=>res.status(500).send(err));

app.listen(PORT, ()=> console.log(`listening on ${PORT}`));