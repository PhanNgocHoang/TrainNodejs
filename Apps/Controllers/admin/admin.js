function getlogin (req, res) {
    res.render('admin/login', {data:{}})
}
function postlogin (req, res) {
    const user = require('../../Models/admin/user.model')
    let email = req.body.mail
    let pass = req.body.pass
    user.UserModel.find({user_mail: email, user_pass:pass}, (err, docs)=>{
        if(docs.length > 0)
    {
        res.redirect('/admin/dashboard')

    }
    else
    {
        let error = "Email or Password incorrect"
        // res.render('/admin/login', {data:{error:error}})
        res.render('admin/login', {data:{error:error}})
    }
    })

}
function logout (req, res) {
    res.send("Logout")
}
function dashboard(req, res)
{
    // let a = -15
    // let b = 10
    // let c = a + b
    // res.render('admin/dashboard', {result:c})
    res.render('admin/dashboard')
}
module.exports = {
    getlogin:getlogin,
    logout:logout,
    dashboard:dashboard,
    postogin:postlogin

}
