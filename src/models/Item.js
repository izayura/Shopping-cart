const mongoose=require('mongoose');
require('mongoose-type-url');
const{Schema}= mongoose;

const Item= new Schema({
    title:String,
    price:Number,
    description:String,
    category: String,
    image:{type: mongoose.SchemaTypes.Url}
});

module.exports= mongoose.model('Item', Item);