import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { AddShoppingcart, Category, getAllProducts, getByCategoryId } from './api';
import { useSelector } from 'react-redux';

export const Products = () => {
    const [productlist, setListProduct] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('0'); // Default to '0' to fetch all products
    const [categoryList, setCategoryList] = useState([]);
    const user = useSelector(x => x.currentUser);

    useEffect(() => {
        loadCategories();
    }, []);

    useEffect(() => {
        fetchProducts();
    }, [selectedCategory]);

    const loadCategories = () => {
        Category()
            .then(response => {
                if (response.data.categories) {
                    setCategoryList(response.data.categories);
                } else {
                    console.error('Expected array but got', typeof response.data.categories);
                }
            })
            .catch(err => {
                console.error(err);
            });
    };

    const fetchProducts = () => {
        if (selectedCategory === '0') {
            getAllProducts()
                .then(x => {
                    console.log(x.data);
                    if (x.data.products) {
                        setListProduct(x.data.products);
                    } else {
                        console.error('Expected array but got', typeof x.data.products);
                    }
                })
                .catch(err => {
                    console.error(err);
                });
        } else {
            getByCategoryId(selectedCategory)
                .then(x => {
                    console.log(x.data);
                    if (x.data.products) {
                        setListProduct(x.data.products);
                    } else {
                        console.error('Expected array but got', typeof x.data.products);
                    }
                })
                .catch(err => {
                    console.error(err);
                });
        }
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    return (
        <>
            <div style={{
                marginTop: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
                <Form.Control
                    as="select"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    style={{ marginBottom: '1rem', width: '200px' }}
                >
                    <option value="0">כל הקטגוריות</option>
                    {categoryList.map(category => (
                        <option key={category._id} value={category._id}>{category.name}</option>
                    ))}
                </Form.Control>

                {productlist.map(product => (
                    <Card key={product._id} style={{ width: '50rem', marginBottom: '1rem' }}>
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>
                                מחיר: {product.amount}
                            </Card.Text>
                            <Button variant="primary" onClick={() => AddShoppingcart(user._id, product._id)}>הוספה לסל</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </>
    );
}

export default Products;
