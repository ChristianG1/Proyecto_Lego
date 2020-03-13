const mongoose = require('mongoose'); 
const express = require('express');

const app = express();

const architecture = require('./routes/architecture');
const dc = require('./routes/dc');
const marvel = require('./routes/marvel');
const starWars = require('./routes/starWars');
const user = require('./routes/user');


app.use(express.json());

app.use('/api/architecture', architecture);
app.use('/api/dc', dc);
app.use('/api/marvel', marvel);
app.use('/api/starWars', starWars);
app.use('/api/user', user)

const port = process.env.PORT || 3003; 

app.listen(port, ()=> console.log('Escuchando en el puerto: ' + port))
mongoose.connect('mongodb://localhost/legodb',{useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true, useCreateIndex: true})
    .then(()=>console.log('Conectado a MongoDB'))
    .catch(erro => console.log('No se ha podido conectar'))