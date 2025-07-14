const user = require('../models/user')
const User = require('../models/user')

const Product = require('../models/product')
const Admin = require('./admin')
const mongoose = require('mongoose');

module.exports = {
    getAll: (req, res) => {
        User.find()
            // הצלחה
            .then(data => {
                res.status(200).send({ users: data })
            })
            // כשלון
            .catch(err => {
                res.status(500).send({ error: err.message })
            })
    },
    createUser: (req, res) => {

        const { name, password, email } = req.body
        const newUser = new User({
            name,
            password,
            email,
            products: []
        })
        // שמירת האובייקט החדש במודל במונגו
        newUser.save()
            .then(user => {

                res.status(200).send({ user })
            })
            .catch(err => {
                res.status(500).send({ error: err.message })
            })
    },
    updateUser: (req, res) => {
        const { id } = req.params

        User.findByIdAndUpdate(id, req.body, { new: true })
            .then(user => {
                res.status(200).send({ user })
            })
            .catch(err => {
                res.status(500).send({ error: err.message })
            })
    },
    addProduct: (req, res) => {
        const { idUser, idProduct } = req.params
        User.findByIdAndUpdate(idUser, { $push: { products: idProduct } })
            .then(() => {
                res.status(200).send({ message: `succeed` })
            })
            .catch(err => {
                res.status(500).send({ error: err.message })
            })
    },
   
    deleteProductFromShoppungCart: (req, res) => {
        const { idUser, idProduct } = req.params
        User.findByIdAndUpdate(idUser, { $pull: { products: idProduct } })
            .then(data => {
                res.status(200).send({ user: data  })
            })
            .catch(err => {
                res.status(500).send({ error: err.message })
            })
    },
    getShoopingCart:(req, res)=>{
        const {id}=req.params
        User.findById(id)
        .populate('products')
        .then(user => {
            res.status(200).send({ products:user.products })
        })
        .catch(err => {
            res.status(500).send({ error: err.message })
        })
    },
    getByCategoryId:(req, res)=>{
        const {id}=req.params
        Product.findById(id)
        .populate('category')
        .then(category => {
            res.status(200).send({ category:product.category })
        })
        .catch(err => {
            res.status(500).send({ error: err.message })
        })
    },
    // getUserByMeilAndPss: (req, res) => {
    //     const { email, password } = req.params;
    //     console.log(email, password);
    //     // admin.getAllAdmin()
    //     user.find().where(
    //         {
    //             $and: [
    //                 { email: { $eq: email } },
    //                 { password: { $eq: password } }
    //             ]
    //         })
    //         .then(a => {
    //             console.log(a);

    //             // const foundAdmin= a.find(u=>u.email===email &&u.password===password);
    //             if (a.length > 0) {
    //                 res.status(200).send({ user: a[0] });
    //             }
    //             else {
    //                 res.status(404).send({ error: "User not found" });
    //             }
    //         })
    //         .catch(err => { res.status(500).send({ error: err.message }); })
    // },
    getUserByMeilAndPss: (req, res) => {
        const { email, password } = req.params;
        console.log(email, password); // בדיקה אם האימייל והסיסמה הגיעו כראוי
    
        user.find({ email: email, password: password })
            .then(users => {
                if (users.length > 0) {
                    res.status(200).send({ user: users[0] });
                } else {
                    res.status(404).send({ error: "User not found" });
                }
            })
            .catch(err => {
                res.status(500).send({ error: err.message });
            });
    },
    
    deleteUser: (req, res) => {
        const { id } = req.params
        User.findByIdAndDelete(id)
            .then(user => {
                res.status(200).send({ message: `delete user ${user._id} succeed!` })
            })
            .catch(err => {
                res.status(500).send({ error: err.message })
            })
    }

}