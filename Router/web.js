const router = require('express').Router()
const products = require('../Apps/Controllers/admin/Products')
const admin = require('../Apps/Controllers/admin/admin')
const user = require('../Apps/Controllers/admin/user')
const category = require('../Apps/Controllers/admin/category')

router.get('/admin/admin/login', admin.getlogin)
router.post('/admin/admin/login', admin.postogin)
router.get('/admin/admin/logout', admin.logout)
router.get('/admin/dashboard', admin.dashboard)

router.get('/user/listUser', user.listUser)
router.get('/user/addUser', user.addUser)
router.post('/user/addUser', user.postAddUser)
router.get('/user/editUser', user.editUser)
router.get('/user/deleteUser', user.deleteUser)

router.get('/category/listCategory', category.listCategory)
router.get('/category/addCategory', category.addCategory)
router.post('/category/addCategory', category.postAddCategory)
router.get('/category/editCategory', category.editCategory)
router.get('/category/deleteCategory', category.deleteCategory)

router.get('/admin/products', products.getList)
router.get('/admin/products/Add', products.getAdd)
router.post('/admin/products/Add', products.postAdd)
router.get('/admin/products/Edit', products.getEdit)
router.get('/admin/products/Delete', products.getDelete)

module.exports = router