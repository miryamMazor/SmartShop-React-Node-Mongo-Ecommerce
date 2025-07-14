const mongoose = require('mongoose')
const categorySchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    product: [{
        type: mongoose.Types.ObjectId,
        ref: 'Product'
    }]
})
module.exports = mongoose.model('Category', categorySchema)