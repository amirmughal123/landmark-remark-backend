import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


mongoose.connect('mongodb://localhost/landmark');

var db = mongoose.connection;
// connection test
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("Database connected");
});

import userRoutes from './routes/userRoutes';
import noteRoutes from './routes/noteRoutes';


routing();

//--------ROUTING---------//

function routing() {
  app.use('/api/v1/users', userRoutes);
  app.use('/api/v1/notes', noteRoutes);
}

app.listen(4000, () => {
  console.log('server connected with port 4000');
});
