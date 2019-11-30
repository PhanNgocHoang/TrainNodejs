const CategoryModel = require('../../Models/admin/category.model')
const productModel = require('../../Models/admin/product.model')
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
function postAddCategory(req, res)
{
    let name = req.body.cat_name
    console.log(name)
    CategoryModel.CategoryModel.find({cat_name:name}, (docs)=>{
        console.log(docs)
        if(docs == null)
        {
            category =  new CategoryModel.CategoryModel({
                cat_name: name
            })
            category.save((err, cat)=>{
                if(err){console.log('Fail', err)}
                else{console.log('add category success')}
            })
        }
        else
        {
            let error = "Danh mục đã tồn tại !"
            res.render('admin/add_category', {data:{error:error}})
        }
    })
    
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

