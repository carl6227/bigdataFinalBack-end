const express = require('express'); //import express
const cors = require('cors'); //import cors
const mongoose = require('mongoose'); //import mongoose

const UserRouter =require('./routes/user')
require('dotenv').config();

const app = express();
const port = process.env.PORT || 7000;

app.use(cors());
app.use(express.json());
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB connection established.');

})
app.use('/user',UserRouter);

app.listen(port, () => {

    console.log('server is running at port:' + port);
});
