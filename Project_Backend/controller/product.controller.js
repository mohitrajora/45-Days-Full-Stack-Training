import { ProductModel } from "../models/product.model.js";

const productCreate = async (req, res) => {
    try {
        const { title, price } = req.body;
        const image = req.file.filename; //req.filename[0];
        console.log(req.file.filename);
        const newProduct = await ProductModel.create({ title, image, price });
        const productData = await newProduct.save();
        res.status(200).json({
            data: productData,
            message: "Product created sucessfully!",
            status: true
        });
    } catch (error) {
        res.status(500).json({ data: null, message: error.message, status: false })
    }
}

const productUpdate = async (req, res) => {
    try {
        const { id } = req.query;
        const { title, price } = req.body;
        const image = req.file.filename; //req.filename[0];
        // console.log(req.file.filename);
        const updateProduct = await ProductModel.findByIdAndUpdate({ _id: Object(id) }, { $set: { title, price, image } })
        res.status(200).json({
            data: updateProduct,
            message: "Product updated sucessfully!",
            status: true
        });
    } catch (error) {
        res.status(500).json({ data: null, message: error.message, status: false })
    }
}

const productGetOne = async (req, res) => {
    try {
        const { id } = req.query;
        const productData = await ProductModel.findById({ _id: Object(id) });
        res.status(200).json({
            data: productData,
            message: "Product get sucessfully!",
            status: true
        });
    } catch (error) {
        res.status(500).json({ data: null, message: error.message, status: false })
    }
}

const productGetAll = async (req, res) => {
    try {
        const productData = await ProductModel.find();
        res.status(200).json({
            data: productData,
            message: "Product get sucessfully!",
            status: true
        });
    } catch (error) {
        res.status(500).json({ data: null, message: error.message, status: false })
    }
}

const productDeleteAll = async (req, res) => {
    try {
        const productData = await ProductModel.find();
        if (!productData) {
            res
                .status(400)
                .json({ data: null, message: "Product does't exists", status: false });
        }
        const delProduct = await ProductModel.deleteMany();
        res.status(200).json({
            data: delProduct,
            message: "All Products deleted successfully",
            status: true,
        });
    } catch (error) {
        res.status(500).json({ data: null, message: error.message, status: false })
    }
}

const productDeleteOne = async (req, res) => {
    try {
        const { id } = req.query;
        // console.log(id);
        const productData = await ProductModel.findById({ _id: Object(id) });
        // console.log(productData);
        if (!productData) {
            res
                .status(400)
                .json({ data: null, message: "Product does't exists", status: false });
        }
        const delProduct = await ProductModel.deleteOne({ _id: Object(id) });
        res.status(200).json({
            data: delProduct,
            message: "Product deleted successfully",
            status: true,
        });
    } catch (error) {
        res.status(500).json({ data: null, message: error.message, status: false })
    }
}

export { productCreate, productDeleteAll, productGetAll, productGetOne, productUpdate, productDeleteOne } 