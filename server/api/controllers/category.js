const Category = require('../models/category');

module.exports = {

    getAllCategory: (req, res) => {
        Category.find()
            // הצלחה
            .then(data => {
                res.status(200).send({ categories: data });
            })
            // כשלון
            .catch(err => {
                res.status(500).send({ error: err.message });
            });
    },

    deleteCategory: (req, res) => {
        const { id } = req.params;

        Category.findByIdAndDelete(id)
            .then(category => {
                Category.find()
                    .then(data => {
                        res.status(200).send({ message: `delete category ${category._id} succeed!`, categories: data });
                    })
                    .catch(err => {
                        res.status(500).send({ error: err.message });
                    });
            })
            .catch(err => {
                res.status(500).send({ error: err.message });
            });
    },

    // createCategory: (req, res) => {
    //     const { name } = req.body;
    //     const newCategory = new Category({
    //         name,
    //         products: []
    //     });

    //     // שמירת האובייקט החדש במודל במונגו
    //     newCategory.save()
    //         .then(category => {
    //             Category.find()
    //                 .then(data => {
    //                     res.status(200).send({ message: `create category succeed`, categories: data });
    //                 })
    //                 .catch(err => {
    //                     res.status(500).send({ error: err.message });
    //                 });
    //         })
    //         .catch(err => {
    //             res.status(500).send({ error: err.message });
    //         });
    // },
    createCategory: (req, res) => {
        const { name } = req.body;

        // בדיקה אם הקטגוריה כבר קיימת
        Category.findOne({ name })
            .then(existingCategory => {
                if (existingCategory) {
                    return res.status(400).send({ message: `Category with name '${name}' already exists` });
                }

                const newCategory = new Category({
                    name,
                    products: []
                });

                // שמירת האובייקט החדש במודל במונגו
                newCategory.save()
                    .then(category => {
                        Category.find()
                            .then(data => {
                                res.status(200).send({ message: `create category succeed`, categories: data });
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

    updateCategory: (req, res) => {
        const { id } = req.params;

        Category.findByIdAndUpdate(id, req.body, { new: true })
            .then(category => {
                Category.find()
                    .then(data => {
                        res.status(200).send({ message: `update category ${category._id} succeed!`, categories: data });
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

        Category.findById(id)
            .populate('products')
            .then(category => {
                res.status(200).send({ category });
            })
            .catch(err => {
                res.status(500).send({ error: err.message });
            });
    }
};
