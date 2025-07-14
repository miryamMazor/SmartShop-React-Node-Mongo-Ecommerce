const admin = require('../models/admin')
const Admin = require('../models/admin')

module.exports = {
   
    getAll: (req, res) => {
        Admin.find()
            // הצלחה
            .then(data => {
                res.status(200).send({ admins: data })
            })
            // כשלון
            .catch(err => {
                res.status(500).send({ error: err.message })
            })
    },
    deleteAdmin: (req, res) => {
        const { id } = req.params

        Admin.findByIdAndDelete(id)
            .then(admin => {
                res.status(200).send({ message: `delete category ${admin._id} succeed!` })
            })
            .catch(err => {
                res.status(500).send({ error: err.message })
            })
    },
    
    createAdmin: (req, res) => {
        const { name,password,email} = req.body
        const newAdmin = new Admin({
            name,
            password,
            email
        })
        newAdmin.save()
            .then(admin => {
                res.status(200).send({ message: `welcome to our aplication! 🤵💼` })
            })
            .catch(err => {
                res.status(500).send({ error: err.message })
            })
    },
    getShoopingCart:(req, res)=>{
        const {id}=req.params
        Admin.findById(id)
        .populate('product')
        .then(user => {
            res.status(200).send({ products:admin.products })
        })
        .catch(err => {
            res.status(500).send({ error: err.message })
        })
    },
    // getAdminByMeilAndPss: (req, res) => {
    //     const { email, password } = req.params;
    //     console.log(email, password);
    //     admin.find().where(
    //         {
    //             $and: [
    //                 { email: { $eq: email } },
    //                 { password: { $eq: password } }
    //             ]
    //         })
    //         .then(a => {
    //             if (a.length > 0) {
    //                 res.status(200).send({ admin: a[0] });
    //             }
    //             else {
    //                 res.status(404).send({ error: "Admin not found" });
    //             }
    //         })
    //         .catch(err => { res.status(500).send({ error: err.message }); })
    // },
    getUserByMeilAndPss: (req, res) => {
        const { email, password } = req.params;
        console.log(email, password); // בדיקה אם האימייל והסיסמה הגיעו כראוי
    
        admin.find({ email: email, password: password })
            .then(users => {
                if (users.length > 0) {
                    res.status(200).send({ admin: users[0] });
                } else {
                    res.status(404).send({ error: "User not found" });
                }
            })
            .catch(err => {
                res.status(500).send({ error: err.message });
            });
    },
}