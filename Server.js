const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const routes = require('./routes/ToDoRoutes');

dotenv.config();

const app = express();
const PORT = process.env.port || 8001;

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URL).then(() => console.log(`Connected to MongoDB`)).catch((err) => console.log(err));


app.use(routes);

app.listen(PORT, () => console.log(`Listening on: ${PORT}`));