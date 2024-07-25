const express = require('express')
const router = express.Router()

const productController = require('./controller/productController')

//createProduct
router.post('/create-product', (req, res)=>{
    userController.createProduct(req.body, (error, payload)=>{
        if(error){
            res.status(500).json({message:"Error", error: error})
        }else{
            res.json({message: 'Product created.', data: payload})
        }
    })
})

//getAllProducts
router.get('/get-all-products',(req, res)=>{
    productController.getAllProducts((error, payload)=>{
        if(error){
            res.status(500).json({message:"Error", error: error})

        }else{
            res.json({message: 'Product Found.', data: payload})
        }
    })
})
//updateProductByID
router.put('/find-and-update/:id', (req,res)=>{
    productController.updateProductByID(req.params.id, req.body, (err, payload)=>{
        if(err){
            res.status(500).json({message:"Error", error: err})
        }else{
            res.json({message: 'Product updated.', data: payload})
        }
    })
})


//getProductByID
router.get('/product-by-id',(req, res)=>{
    productController.getProductByID((error, payload)=>{
        if(error){
            res.status(500).json({message:"Error", error: error})

        }else{
            res.json({message: 'Product ID Found.', data: payload})
        }
    })
})

//deleteProductByID
router.delete('/delete-Product/:id', (req, res)=>{
    productController.deleteProductByID(req.params.id, (err, payload)=>{
        if(err){
            res.status(500).json({message:"Error", error: err})
        }else{
            res.json({message: 'Product deleted.', data: payload})
        }
    })
})


module.exports = router