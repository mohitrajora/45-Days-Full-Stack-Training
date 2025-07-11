import mongoose, { model, Schema } from 'mongoose';

const productSchema = new Schema({
    title: {
        type: String
    },
    image: {
        type: String
    },
    price: {
        type: Number
    }
}, {
    timestamps: true
});

const ProductModel = mongoose.model("ProductModel", productSchema);
export { ProductModel };