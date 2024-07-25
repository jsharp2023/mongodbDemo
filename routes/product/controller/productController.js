const Product = require('../model/Product')//Pull in schema for DB

module.exports = {

//createProduct
createProduct: function (body, callback){
    const {
        productName,
        price,
        inStock
    } = body
    const savedProduct = new Product({
        productName,
        price,
        inStock
    })
    savedProduct.save()//The Promise
    .then(payload=>{
        callback(null, payload)
    })
    .catch(error=>{
        callback(error, null)
    })
},

//getAllProducts
getAllProducts: function (callback){
    Product.find({})
    .then(payload => {
        callback(null, payload)
    })
    .catch(error=>{
        callback(error, null)
    })
},

//getProductByID
getAllProductsByID : function (id, body, callback){
    Product.findById(id, body, {new: true})
    .then(updatedPayload =>{
        callback(null, updatedPayload)
    })
    .catch(error=>{
        callback(error, null)
    })
},

//updateProductByID
updateProductByID : function (id, body, callback){
    Product.findByIdAndUpdate(id, body, {new: true})
    .then(updatedPayload =>{
        callback(null, updatedPayload)
    })
    .catch(error=>{
        callback(error, null)
    })
},
//deleteProductByID
deleteProductByID : function(id, callback){
    User.findByIdAndDelete(id)
    .then(deletedProduct =>{
        callback(null, deletedProduct)
    })
    .catch(error =>{
        callback(error,null)
    })
}
}