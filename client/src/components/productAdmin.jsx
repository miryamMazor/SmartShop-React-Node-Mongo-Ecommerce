// import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { getAllProducts, createProduct, updateProduct, deleteProduct, getAllCategories, Category } from './api';
import { useSelector } from 'react-redux';
import swal from 'sweetalert';
import { useEffect, useState } from 'react';

export const ProductAdmin = () => {
    const [productList, setProductList] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    const [newProduct, setNewProduct] = useState({ name: '', amount: '', category: '' });
    const [editingProduct, setEditingProduct] = useState(null);
    const user = useSelector(state => state.currentUser);

    useEffect(() => {
        loadProducts();
        loadCategories();
    }, []);

    const loadProducts = () => {
        getAllProducts()
            .then(response => {
                if (response.data.products) {
                    setProductList(response.data.products);
                } else {
                    console.error('Expected array but got', typeof response.data.products);
                }
            })
            .catch(err => {
                console.error(err);
            });
    };

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

    const handleAddProduct = () => {
        createProduct(newProduct)
            .then(() => {
                setNewProduct({ name: '', amount: '', category: '' });
                loadProducts();
            })
            .catch(err => {
                swal('שים לב', 'המוצר כבר קיים', 'error');
                console.error(err);
            });
    };

    const handleUpdateProduct = () => {
        updateProduct(editingProduct._id, { name: editingProduct.name, amount: editingProduct.amount, category: editingProduct.category })
            .then(() => {
                setEditingProduct(null);
                loadProducts();
            })
            .catch(err => {
                console.error(err);
            });
    };

    const handleDeleteProduct = (id) => {
        deleteProduct(id)
            .then(() => {
                loadProducts();
            })
            .catch(err => {
                console.error(err);
            });
    };

    return (
        <div style={{
            marginTop: '1300px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            flexDirection: 'column'
        }}>
            <h1>Products</h1>
            <div style={{ marginBottom: '2rem' }}>
                <Form.Control 
                    type="text" 
                    placeholder="Enter product name" 
                    value={newProduct.name} 
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} 
                    style={{ marginBottom: '1rem' }}
                />
                <Form.Control 
                    type="number" 
                    placeholder="Enter product amount" 
                    value={newProduct.amount} 
                    onChange={(e) => setNewProduct({ ...newProduct, amount: e.target.value })} 
                    style={{ marginBottom: '1rem' }}
                />
                <Form.Control 
                    as="select"
                    value={newProduct.category}
                    onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                    style={{ marginBottom: '1rem' }}
                >
                    <option value="">בחירת קטגוריה</option>
                    {categoryList.map(category => (
                        <option key={category._id} value={category._id}>{category.name}</option>
                    ))}
                </Form.Control>
                <Button variant="primary" onClick={handleAddProduct}>הוספת מוצר</Button>
            </div>
            {productList.map(product => (
                <Card key={product._id} style={{ width: '50rem', marginBottom: '1rem' }}>
                    <Card.Body>
                        {editingProduct && editingProduct._id === product._id ? (
                            <>
                                <Form.Control 
                                    type="text" 
                                    value={editingProduct.name} 
                                    onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })} 
                                    style={{ marginBottom: '1rem' }}
                                />
                                <Form.Control 
                                    type="number" 
                                    value={editingProduct.amount} 
                                    onChange={(e) => setEditingProduct({ ...editingProduct, amount: e.target.value })} 
                                    style={{ marginBottom: '1rem' }}
                                />
                                <Form.Control 
                                    as="select"
                                    value={editingProduct.category}
                                    onChange={(e) => setEditingProduct({ ...editingProduct, category: e.target.value })}
                                    style={{ marginBottom: '1rem' }}
                                >
                                    <option value=""> מקטגוריה:</option>
                                    {categoryList.map(category => (
                                        <option key={category._id} value={category._id}>{category.name}</option>
                                    ))}
                                </Form.Control>
                                <Button variant="success" onClick={handleUpdateProduct}>שמירה</Button>
                                <Button variant="secondary" onClick={() => setEditingProduct(null)} style={{ marginLeft: '1rem' }}>ביטול</Button>
                            </>
                        ) : (
                            <>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>מחיר: {product.amount}</Card.Text>
                                <Card.Text>קטגורית הקורס: {product.category ? product.category.name : 'לא משתייך לקטגוריה'}</Card.Text>
                                {  (
                                    <>
                                        <Button variant="warning" onClick={() => setEditingProduct(product)}>ערוך</Button>
                                        <Button variant="danger" onClick={() => handleDeleteProduct(product._id)} style={{ marginLeft: '1rem' }}>מחק</Button>
                                    </>
                                )}
                            </>
                        )}
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};

export default ProductAdmin;
