const CategoryModel = require('../../Models/admin/category.model')
const productModel = require('../../Models/admin/product.model')
const mongoose = require('../../../common/database')()
async function listCategory (req, res) {
    let category = await CategoryModel.CategoryModel.find().populate('category_product')
    var lsCategory = JSON.parse(JSON.stringify(category))
    // console.log(category)
    res.render('admin/category', {data:{category:lsCategory}})
}
function addCategory(req, res)
{
    res.render('admin/add_category', {data:{}})
}
async function postAddCategory(req, res)
{
    let name = req.body.cat_name
    let catName = await CategoryModel.CategoryModel.find({cat_name: name})
    if(catName == 0)
    {
        newCategory = new CategoryModel.CategoryModel({cat_name:name})
        newCategory.save((err)=>{
            if(err){res.render('admin/add_category', {data:{}})}
            else{res.redirect('/category/listCategory')}
        })
    }
    else
    {
        error = "Danh Mục Đã Tồn Tại !"
        res.render('admin/add_category', {data:{error:error}})
    }
    // try{
    // catName = await CategoryModel.CategoryModel1.find({cat_name:name})
    // if(catName == 0)
    // {
    // newCategory = await new CategoryModel.CategoryModel1({cat_name:name})
    // }
    // }
    // finally{
    //     newCategory.save((err)=>{
    //         if(err){console.log(err)}
    //         else(console.log('Thanh cong'))
    //     })
    // }
}
function editCategory (req, res)
{
    res.render('admin/edit_category')
}
function deleteCategory(req, res)
{
    res.send('delete category')
}
module.exports = {
    listCategory:listCategory,
    addCategory:addCategory,
    editCategory:editCategory,
    deleteCategory:deleteCategory,
    postAddCategory:postAddCategory
}

