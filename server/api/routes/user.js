const express = require('express')

const {
    createUser,
    updateUser,
    getAll,
    deleteProductFromShoppungCart,
    addProduct,
    getShoopingCart,
    getByCategoryId,
    deleteUser,
    getUserByMeilAndPss

} = require('../controllers/user')

// יצירת ראוטר
const userRouter = express.Router()


userRouter.route('/create').post(createUser)
userRouter.route('/update/:id').patch(updateUser)
userRouter.route('/getAll').get(getAll)
userRouter.route('/getAllShoopingCart/:id').get(getShoopingCart)
userRouter.route('/update/:idUser/:idProduct').patch(deleteProductFromShoppungCart)
//userRouter.route('/addProductupdate/:idUser/:idProduct').patch(addProduct)
userRouter.route('/addProductupdate/:idUser/:idProduct').patch(addProduct);

// userRouter.route('/getAllShoopingCart/:id').get(getShoopingCart)
userRouter.route('/getAllByCategoryId').post(getByCategoryId)
userRouter.route('/delete/:id').delete(deleteUser)
userRouter.route('/getUserByMeilAndPss/:email/:password').get(getUserByMeilAndPss);






module.exports = userRouter