const mongoose = require('mongoose')
const productSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    amount: {
        type: Number,
        require: true
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref: 'Category',
        require: true
    }
})
module.exports = mongoose.model('Product', productSchema)