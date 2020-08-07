const express=require('express');
const morgan=require('morgan');
const mongoose=require('mongoose');

const app=express();
mongoose.connect('mongodb://localhost/mevn-database', { useNewUrlParser: true, useUnifiedTopology: true})
    .then(db=>console.log("La base de datos esta conectada"))
    .catch(err=>console.log(err));

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
console.log()
app.use('/item', require('./routes/item.js'));
app.use('/cart', require('./routes/order.js'));

//Static Files
console.log(__dirname + '\\public');
app.use(express.static(__dirname + '\\public'))

//Server is listening
app.listen(app.get('port'), ()=>{
    console.log("Server on port", app.get('port'));
});