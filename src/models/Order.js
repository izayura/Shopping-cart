const mongoose=require('mongoose');
const Item=require('./Item.js');
const{Schema}= mongoose;

const Order= new Schema({
    date: Date,
    items: [Item.schema],
    status: {type:String, default: 'Pending'}
});

module.exports= mongoose.model('Order', Order);