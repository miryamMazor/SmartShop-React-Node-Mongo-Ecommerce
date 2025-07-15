import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';
import { Category } from './api';

const ProductID = () => {
    const currentProduct = useSelector(state => state.currentProduct);
    console.log(currentProduct);

    const [newProduct, setNewProduct] = useState({ name: '', amount: '', category: '' });
    const [editingProduct, setEditingProduct] = useState(null);
    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        // fetch categories
        loadCategories();
    }, []);

    const loadCategories = () => {
        // Replace with your API call to fetch categories
        Category()
            .then(response => setCategoryList(response.data.categories))
            .catch(err => console.error(err));
    };

    const handleAddProduct = () => {
        // Implement the logic to add a new product
    };

    const handleUpdateProduct = () => {
        // Implement the logic to update the product
    };

    const handleDeleteProduct = (id) => {
        // Implement the logic to delete the product
    };

    return (
        <div style={{
            marginTop: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
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
                    <option value="">Select category</option>
                    {categoryList.map(category => (
                        <option key={category._id} value={category._id}>{category.name}</option>
                    ))}
                </Form.Control>
                <Button variant="primary" onClick={handleAddProduct}>Add Product</Button>
            </div>
            {currentProduct && currentProduct.length > 0 ? (
                currentProduct.map(product => (
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
                                        <option value="">Select category</option>
                                        {categoryList.map(category => (
                                            <option key={category._id} value={category._id}>{category.name}</option>
                                        ))}
                                    </Form.Control>
                                    <Button variant="success" onClick={handleUpdateProduct}>Save</Button>
                                    <Button variant="secondary" onClick={() => setEditingProduct(null)} style={{ marginLeft: '1rem' }}>Cancel</Button>
                                </>
                            ) : (
                                <>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text>Amount: {product.amount}</Card.Text>
                                    <Card.Text>Category: {product.category ? product.category.name : 'No Category'}</Card.Text>
                                    <Button variant="warning" onClick={() => setEditingProduct(product)}>Edit</Button>
                                    <Button variant="danger" onClick={() => handleDeleteProduct(product._id)} style={{ marginLeft: '1rem' }}>Delete</Button>
                                </>
                            )}
                        </Card.Body>
                    </Card>
                ))
            ) : (
                <p>No products available.</p>
            )}
        </div>
    );
};

export default ProductID;
