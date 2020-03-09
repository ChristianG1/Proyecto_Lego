const mongoose = require('mongoose'); 
const express = require('express');

const app = express();
app.use(express.json());
const port = process.env.PORT || 3003; 

app.listen(port, ()=> console.log('Escuchando en el puerto: ' + port))
mongoose.connect('mongodb://localhost/legodb',{useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true, useCreateIndex: true})
    .then(()=>console.log('Conectado a MongoDB'))
    .catch(erro => console.log('No se ha podido conectar'))