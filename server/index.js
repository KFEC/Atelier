require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.listen(PORT, console.log(`Now listening on ${PORT}`));