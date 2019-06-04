const express=require('express');
const morgan=require('morgan');
const mongoose=require('mongoose');
const app=express();
mongoose.connect('mongodb://localhost:27017/nodeP')
.then(db=>console.log("Conectado a mongodb"))
.catch(err=>console.error(err));


//Settings
app.set('port',process.env.PORT || 3000);
//Middlewares
app.use(morgan('dev'));
app.use(express.json());
//Routers
app.use('/tasks',require('./routes/tasks.js'));

//Static Files
var path=__dirname+'/public';
app.use(express.static(path));    


// Servidor escuchando
app.listen(app.get('port'),()=>{
    console.log("Server on port "+app.get('port'));
});