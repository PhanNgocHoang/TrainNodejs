// call connect
const mongoose = require('../../../common/database')()
//description model
const schemaUser =  new mongoose.Schema(
{
    //_id la kieu du lieu dac biet phair lay ra tu doi tuong mongoose
    _id:{type:mongoose.Schema.ObjectId, auto:true},
    user_full:String,
    user_mail:String,
    user_pass:String,
    user_level:Number

})

//khoi tao model tu schema tren
const UserModel =  mongoose.model("User", schemaUser, "User")
module.exports = {
    UserModel:UserModel
}
//use model
// UserModel.find((err, docs)=>{
//     console.log(docs)
// })
// UserInsert = new UserModel({
//     user_full: "Phan Ngoc Hoang",
//     user_mail: "Hoang@123.com",
//     user_pass: "1234556",
//     user_level: 1
// })
// UserInsert.save()
//edit 
// UserModel.updateOne({user_full: "Phan Ngoc Hoang"}, {user_pass: "hoang123"}).exec((err, docs)=>{
//     console.log(docs)
// })
//Delete
// UserModel.deleteOne({user_full: "Phan Ngoc Hoang"}, (err, docs)=>{
//     console.log(docs)
// })
// UserModel.find()
