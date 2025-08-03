import Product from "../models/Product.js";

export async function getAllProducts(req, res) {
    try {
        const product = await Product.find().sort({createdAt: -1});
        if(product.length === 0){
            res.status(500).json({message:"No product available"});
        }else{
           res.status(200).json(product) 
        }
    } catch (error) {
        console.error("getAllProducts controller error", error);
        res.status(500).json({message:"Internal Server Error"});
    }
}

export async function getProduct(req, res) {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product)
    } catch (error) {
        console.error("getProduct controller error", error);
        res.status(500).json({message:"Internal Server Error"});
    }
}

export async function createProduct(req, res) {
    try {
        const {title, price, image} = req.body;
        const product = new Product({title, price, image});
        const newProduct = await product.save()
        res.status(201).json(newProduct)
    } catch (error) {
        console.error("createProduct controller error", error);
        res.status(500).json({message:"Internal Server Error"});
    }
}

export async function editProduct(req, res) {
    try {
        const {title, price, image} = req.body;
        const product = await Product.findByIdAndUpdate(req.params.id, {title, price, image}, {new: true});
        res.status(200).json(product)
    } catch (error) {
        console.error("editProduct controller error", error);
        res.status(500).json({message:"Internal Server Error"});
    }
}

export async function deleteProduct(req, res) {
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json({message: "Product deleted successfully"})
    } catch (error) {
        console.error("deleteProduct controller error", error);
        res.status(500).json({message:"Internal Server Error"});
    }
}