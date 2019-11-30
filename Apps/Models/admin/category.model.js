const mongoose = require('../../../common/database')()
const productModel = require('../../Models/admin/product.model')
const schemaCategory = new mongoose.Schema({
    _id :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    cat_name: String,
},)
// schemaCategory.virtual('category_product', {
//     ref: 'Product',
//     localField: '_id',
//     foreignField: 'cat_id'
// })
const CategoryModel = mongoose.model("Category", schemaCategory, "Category")

// CategoryModel.find((err,docs)=>{
//     console.log(docs)
// }).skip(1).limit(3)

// CategoryModel.aggregate([
//     {
//         $lookup: {
//             from: "Product",
//             localField: "_id",
//             foreignField: "cat_id",
//             as: "Cat_PRD"
//         }
//     }
// ],
//     (err, docs)=>{
// console.log(docs)
// })
module.exports = {
    CategoryModel: CategoryModel
}