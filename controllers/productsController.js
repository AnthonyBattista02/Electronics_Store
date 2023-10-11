const Product = require('../models/Products');



const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find()
       return res.json(products)
    } catch (error) {
        return res.status(500).send(error.message);

    }
}

async function getOneProduct(req, res) {
    try{
        const id = req.params.id
        const products = await Product.findById(id)
        if (plant){
            return res.json(products)
        }
        res.status(404).send('Product with specified ID does not exsist')
    }catch(error){
        return res.status(500).send(error.message)
    }
}

const createProducts = async (req, res) => {
    try {
        const product = await new Products(req.body)
        await product.save()
        return res.status(201).json({
            product
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const updateProducts = async (req, res) => {
    try {
        let { id } = req.params;
        let product = await Product.findByIdAndUpdate(id, req.body, { new: true })
        if (product) {
            return res.status(200).json(product)
        }
        throw new Error("Product not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteProducts = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Product.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Product deleted");
        }
        throw new Error("Product not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


module.exports = {
    getAllProducts,
    getOneProduct,
    createProducts,
    updateProducts,
    deleteProducts
}