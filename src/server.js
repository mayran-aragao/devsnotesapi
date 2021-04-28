const mongoose = require ('mongoose');
require ('dotenv').config({path:'.env'});



mongoose.connect(process.env.DATABASE , {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
mongoose.connection.on('error',(error)=>{
    console.error("erro: "+error.message);
});

require('./services/NoteService');

const express = require('express');
const cors = require ('cors');
const routes =require('./routes');
const server = express();
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.use('/api',routes);


server.listen(process.env.PORT, ()=> {
    console.log(`Servidor rodando na porta: ${process.env.PORT} `);
});
