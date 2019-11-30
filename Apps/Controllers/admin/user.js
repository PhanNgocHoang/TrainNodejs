const UserModel = require('../../Models/admin/user.model')
function listUser(req, res)
{
    UserModel.UserModel.find((err, docs)=>{
        // var user = JSON.parse(JSON.stringify(docs))
        // console.log(docs)
        res.render('admin/user', {data:{user:docs}})
    })
}
function addUser(req, res)
{
    res.render('admin/add_user')
}
function editUser(req, res)
{
    res.render('admin/edit_user')
}
function deleteUser(req, res)
{
    res.send('delete user')
}
module.exports = {
    listUser:listUser,
    addUser:addUser,
    editUser:editUser,
    deleteUser:deleteUser
}
