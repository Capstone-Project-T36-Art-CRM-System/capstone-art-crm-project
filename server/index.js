import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import customersRoutes from './routes/customers.js';

const app = express();

app.use('/customers', customersRoutes);

app.use(express.json({limit: "30mb", extended: true }));
app.use(express.urlencoded({limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL = "mongodb+srv://admin:2MQEFRC9loNaGr20@comp3123.a1cw7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(`Connection Error – ${error.message}`));

