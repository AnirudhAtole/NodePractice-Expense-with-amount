const Product = require('../models/product')

exports.getProducts = (req,res) =>{
    Product.findAll()
    .then((result) =>{
        res.json(result);
    })
    .catch(err => console.log(err));
}

exports.addProduct = (req,res) => {
    const amount = req.body.amount;
    const name = req.body.name;
    Product.create({
        amount:amount,
        name:name
    })
    .then((result) =>{
        console.log("Product added");
        res.json(result);
    })
    .catch(err => console.log(err));
}

exports.delProduct = (req,res) =>{
    const productId = req.params.id;
    Product.findByPk(productId)
    .then((Product) =>{
        res.json(Product.destroy());
    })
    .catch( err => console.log(err));
}