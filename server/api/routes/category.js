const express = require('express')

const {
    deleteCategory,
    getAllCategory,
    createCategory,
    updateCategory,
    getByCategoryId

} = require('../controllers/category')

// יצירת ראוטר
const categoryRouter = express.Router()


categoryRouter.route('/getAllCategory').get(getAllCategory)
categoryRouter.route('/delete/:id').delete(deleteCategory)
categoryRouter.route('/create').post(createCategory)
categoryRouter.route('/update/:id').patch(updateCategory)
categoryRouter.route('/getAllByCategoryId/:id').post(getByCategoryId)




module.exports = categoryRouter