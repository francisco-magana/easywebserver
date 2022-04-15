const express = require('express');
const app = express();
const hbs = require('hbs');
const axios = require('axios');
const path = require('path');
const { addUser } = require('../controllers/createUser');

app.set('view engine', 'hbs');
app.set('views', 'src/views');
app.use(express.static(path.join(__dirname,'../../public/')))

const port = process.env.PORT || 3000;
app.set('port', port);
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index', {value: 123, segundo: 'xd'});
});

app.post('/create', addUser);

app.use('/someone', require('../routes/someone.routes'));

module.exports = app;