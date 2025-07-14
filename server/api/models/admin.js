const mongoose =require('mongoose')
//שליפה לפי סל קניות
//שליפה לפי קוד קטגןריה
const adminSchema= mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        match: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    },
    password: {
        type: String,
        require: true
    }
})
module.exports = mongoose.model('Admin', adminSchema)