const express = require('express')

const {
    createAdmin,
    deleteAdmin,
    getAll,
    getShoopingCart,
    getUserByMeilAndPss
} = require('../controllers/admin')

const adminRouter = express.Router()
adminRouter.route('/create').post(createAdmin)
adminRouter.route('/delete/:id').delete(deleteAdmin)
adminRouter.route('/getAll').get(getAll)
adminRouter.route('/getAllShoopingCart').post(getShoopingCart)
// adminRouter.route('/getUserByMeilAndPss/:mail/:password').get(getUserByMeilAndPss)

adminRouter.route('/getUserByMeilAndPss/:email/:password').get(getUserByMeilAndPss);


module.exports = adminRouter