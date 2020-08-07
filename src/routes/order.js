const express=require('express');
const router=express.Router();
const Order=require('../models/Order.js');

router.get('/', async(req,res)=>{
    const orders= await Order.find();
    console.log(orders);
    res.json(orders);
});

router.post('/', async(req,res)=>{
    const order= new Order(req.body);
    await order.save();
    console.log(order);
    res.json({
        status:"Order saved"
    });
});

router.put('/:id', async(req,res)=>{
    console.log(req.params);
    console.log(req.body);
    await Order.findByIdAndUpdate(req.params.id, req.body)
    res.json({
        status:"Order Updated"
    });
});

router.delete('/:id', async(req,res)=>{
    await Order.findByIdAndRemove(req.params.id);
    res.json({
        status: "Order Updated"
    });
})

module.exports=router;