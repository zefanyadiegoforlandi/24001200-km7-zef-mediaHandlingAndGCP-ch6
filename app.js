require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;
const routes = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/image', express.static('public/images'));
app.use('/', routes);

const server = app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
