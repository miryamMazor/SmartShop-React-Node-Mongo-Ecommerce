const express = require('express')

const {
    getAll,
    createProduct,
    deleteProduct,
    updateProduct,
    getByCategoryId
} = require('../controllers/product')

// יצירת ראוטר
const productRouter = express.Router()


productRouter.route('/getAll').get(getAll)
productRouter.route('/create').post(createProduct)
productRouter.route('/update/:id').patch(updateProduct)
productRouter.route('/delete/:id').delete(deleteProduct)
productRouter.route('/getByCategoryId/:id').get(getByCategoryId)


module.exports = productRouter