// import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { deleteProductFromShoppungCart, getAllShoopingcart } from './api';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import { minTotalAmount, setCurrentUser, setTotalAmount } from './redux/Action';
import Elevation from './totalAmount';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';

const GetAllShoppingCart = () => {
    const [productList, setProductList] = useState([]);
    const user = useSelector(state => state.currentUser);
    const dispatch = useDispatch();
    const nav = useNavigate();

    useEffect(() => {
        if (user && user._id) {
            getAllShoopingcart(user._id)
                .then(response => {
                    if (response.data.products) {
                        const uniqueProducts = response.data.products.reduce((acc, product) => {
                            const existingProduct = acc.find(p => p._id === product._id);
                            if (existingProduct) {
                                existingProduct.quantity += 1;
                                
                            } else {
                                acc.push({ ...product, quantity: 1 });
                            }
                            return acc;
                        }, []);

                        setProductList(uniqueProducts);

                        const totalAmount = uniqueProducts.reduce((sum, product) => sum + product.amount, 0);
                        dispatch(setTotalAmount(totalAmount));
                    } else {
                        console.error('Expected array but got', typeof response.data.products);
                    }
                })
                .catch(err => {
                    swal('Oops!', 'Something went wrong', 'error');
                });
        }

    }, [user, dispatch]);

    const handleDeleteProduct = async productId => {
        try {
            const response = await deleteProductFromShoppungCart(user._id, productId);

            // Update local product list
            const updatedProducts = productList.filter(product => product._id !== productId);
            setProductList(updatedProducts);

            // Update user in Redux state
            const updatedUser = response.data;
            dispatch(setCurrentUser(updatedUser));

            // Update total amount in Redux state
            const totalAmount = updatedProducts.reduce((sum, product) => sum + product.amount, 0);
            dispatch(minTotalAmount(totalAmount));

            swal('Success', 'Product deleted from cart!', 'success');
        } catch (err) {
            console.error('Error deleting product:', err);
            if (err.response) {
                console.error('Response status:', err.response.status);
                console.error('Response data:', err.response.data);
            }
            swal('Oops!', 'Something went wrong', 'error');
        }

    };

    return (
        <>
            <Elevation />
            <div style={{
                marginTop: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
                {productList.map(product => (
                    <Card key={product._id} style={{ width: '50rem', marginBottom: '1rem' }}>
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>
                                מחיר: {product.amount}
                                <br />
                                כמות: {product.quantity}
                            </Card.Text>
                            <Button variant="primary" onClick={() => handleDeleteProduct(product._id)}>מחק מהסל</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </>
    );
};

export default GetAllShoppingCart;
