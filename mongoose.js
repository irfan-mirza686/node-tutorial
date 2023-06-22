const mongoose = require('mongoose');

const main =  async ()=>{
    await mongoose.connect("mongodb://localhost:27017/e-comm");
    const ProductSchema = new mongoose.Schema({
        name:String,
        price:Number
    });

    const ProductModel = mongoose.model('products',ProductSchema);
    let data = new ProductModel({name:"irfan",price:1500});
    let result = await data.save();
}

main();