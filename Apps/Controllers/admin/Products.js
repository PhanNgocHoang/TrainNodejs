const ProductModel = require('../../Models/admin/product.model')
const  CategoryModel = require('../../Models/admin/category.model')
async function getList(req, res){
    let product = await ProductModel.ProductModel.find().populate('product_category')
    // console.log(JSON.parse(JSON.stringify(product)))
    product = JSON.parse(JSON.stringify(product))
    // for(key in product)
    // {
    //     // console.log(product[key].prd_name)
    //     console.log(product[key].product_category[0].cat_name)
    // }
    res.render('admin/product', {data:{product:product}})
}
function getAdd(req, res){
    CategoryModel.CategoryModel.find((err, docs)=>{
        res.render('admin/add_product', {data:{category:docs}})
    })
}
async function postAdd(req, res){
    let name = req.body.prd_name
    console.log('namepr is: ', name)
    // var addPr = await new ProductModel.ProductModel({
    //     prd_name: name,
    //     cat_id: cat,
    //     prd_price: price,
    //     prd_warranty: warranty,
    //     prd_accessories: accessories,
    //     prd_promotion: promotion,
    //     prd_new: prNew,
    //     prd_image: img,
    //     prd_status: status,
    //     prd_featured: featured,
    //     prd_details: description,
    // })
    // addPr.save((err)=>{
    //     if(err){console.log(err)}
    //     else{res.redirect('')}
    // })
}
function getEdit(req, res){
    res.render('admin/edit_product')
}
function getDelete(req, res){
    res.send('Delete Product')
}
// function getTest(req, res)
// {

//     res.render('admin/test')
// }
// function postTest(req, res)
// {
//     let mail = req.body.mail
//     res.send(mail)
// }
module.exports = {
    getList:getList,
    getAdd:getAdd,
    getEdit:getEdit,
    getDelete:getDelete,
    // getTest:getTest,
    // postTest:postTest
    postAdd:postAdd
}