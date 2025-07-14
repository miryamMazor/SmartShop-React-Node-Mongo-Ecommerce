const Product = require('../models/product');

module.exports = {
    getAll: (req, res) => {
        Product.find()
        .populate('category') 
            // הצלחה
            .then(data => {
                res.status(200).send({ products: data });
            })
            // כשלון
            .catch(err => {
                res.status(500).send({ error: err.message });
            });
    },

    // createProduct: (req, res) => {
    //     const { name, amount, category } = req.body;
    //     const newProduct = new Product({
    //         name,
    //         amount,
    //         category
    //     });

    //     // שמירת האובייקט החדש במודל במונגו
    //     newProduct.save()
    //         .then(product => {
    //             Product.find()
    //                 .then(data => {
    //                     res.status(200).send({ message: `create product succeed!`, products: data });
    //                 })
    //                 .catch(err => {
    //                     res.status(500).send({ error: err.message });
    //                 });
    //         })
    //         .catch(err => {
    //             res.status(500).send({ error: err.message });
    //         });
    // },
    createProduct: (req, res) => {
        const { name, amount, category } = req.body;

        // בדיקה אם המוצר כבר קיים
        Product.findOne({ name })
            .then(existingProduct => {
                if (existingProduct) {
                    return res.status(400).send({ message: `Product with name '${name}' already exists` });
                }

                const newProduct = new Product({
                    name,
                    amount,
                    category
                });

                // שמירת האובייקט החדש במודל במונגו
                newProduct.save()
                    .then(product => {
                        Product.find()
                            .then(data => {
                                res.status(200).send({ message: `create product succeed!`, products: data });
                            })
                            .catch(err => {
                                res.status(500).send({ error: err.message });
                            });
                    })
                    .catch(err => {
                        res.status(500).send({ error: err.message });
                    });
            })
            .catch(err => {
                res.status(500).send({ error: err.message });
            });
    },

    deleteProduct: (req, res) => {
        const { id } = req.params;
        Product.findByIdAndDelete(id)
            .then(product => {
                Product.find()
                    .then(data => {
                        res.status(200).send({ message: `delete product ${product._id} succeed!`, products: data });
                    })
                    .catch(err => {
                        res.status(500).send({ error: err.message });
                    });
            })
            .catch(err => {
                res.status(500).send({ error: err.message });
            });
    },

    updateProduct: (req, res) => {
        const { id } = req.params;

        Product.findByIdAndUpdate(id, req.body, { new: true })
            .then(product => {
                Product.find()
                    .then(data => {
                        res.status(200).send({ message: `update product ${product._id} succeed!`, products: data });
                    })
                    .catch(err => {
                        res.status(500).send({ error: err.message });
                    });
            })
            .catch(err => {
                res.status(500).send({ error: err.message });
            });
    },
        getByCategoryId: (req, res) => {
            const { id } = req.params;
    
            let query = {};
            if (id !== '0') {
                query = { category: id };
            }
    
            Product.find(query) // מצא את כל המוצרים שמשוייכים לקטגוריה עם ה-id שנשלח, אם ה-id הוא 0 יחזיר את כל המוצרים
                .populate('category') // populate על שדה הקטגוריה כדי להביא את פרטי הקטגוריה
                .then(products => {
                    res.status(200).send({ products });
                })
                .catch(err => {
                    res.status(500).send({ error: err.message });
                });
        }
};
