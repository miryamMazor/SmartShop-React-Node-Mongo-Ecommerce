import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

import { createCategory, updateCategory, deleteCategory, Category, getByCategoryId } from './api';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentProduct } from './redux/Action';
import { useNavigate } from 'react-router';
import swal from 'sweetalert';

export const Categories = () => {
    const [categoryList, setCategoryList] = useState([]);
    const [newCategoryName, setNewCategoryName] = useState('');
    const [editingCategory, setEditingCategory] = useState(null);
    const user = useSelector(state => state.currentUser);
    const dispatch = useDispatch()
    let nav = useNavigate()

    useEffect(() => {
        loadCategories();
    }, []);

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

    const handleAddCategory = () => {
        createCategory({ name: newCategoryName })
            .then(() => {
                setNewCategoryName('');
                loadCategories();
            })
            .catch(err => {
                swal('שים לב', 'הקטגוריה כבר קיימת', 'error');
                console.error(err);
            });
    };

    const handleUpdateCategory = () => {
        updateCategory(editingCategory._id, { name: editingCategory.name })
            .then(() => {
                setEditingCategory(null);
                loadCategories();
            })
            .catch(err => {
                console.error(err);
            });
    };
    const handleSelectCategory = (id) => {debugger
        getByCategoryId(id)
        
            .then(x => {
                let y = dispatch(setCurrentProduct(x.data.products))
debugger
                nav('/ProductID')
            })
            .catch(err => {
                console.error(err);
            });
    };
    const handleDeleteCategory = (id) => {
        deleteCategory(id)
            .then(() => {
                loadCategories();
            })
            .catch(err => {
                console.error(err);
            });
    };

    return (
        <div style={{
            marginTop: '60px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            flexDirection: 'column'
        }}>
            
            <h1>Categories</h1>
            <div style={{ marginBottom: '2rem' }}>
                <Form.Control
                    type="text"
                    placeholder="Enter new category name"
                    value={newCategoryName}
                    onChange={(e) => setNewCategoryName(e.target.value)}
                    style={{ marginBottom: '1rem' }}
                />
                <Button variant="primary" onClick={handleAddCategory}>Add Category</Button>
            </div>
            {categoryList.map(category => (
                <Card key={category._id} style={{ width: '50rem', marginBottom: '1rem' }}>
                    <Card.Body>
                        {editingCategory && editingCategory._id === category._id ? (
                            <>
                                <Form.Control
                                    type="text"
                                    value={editingCategory.name}
                                    onChange={(e) => setEditingCategory({ ...editingCategory, name: e.target.value })}
                                    style={{ marginBottom: '1rem' }}
                                />
                                <Button variant="success" onClick={handleUpdateCategory}>Save</Button>
                                <Button variant="secondary" onClick={() => setEditingCategory(null)} style={{ marginLeft: '1rem' }}>Cancel</Button>
                            </>
                        ) : (
                            <>
                                <Card.Title>{category.name}</Card.Title>
                                <Button variant="warning" onClick={() => setEditingCategory(category)}>Edit</Button>
                                <Button variant="danger" onClick={() => handleDeleteCategory(category._id)} style={{ marginLeft: '1rem' }}>Delete</Button>
                                <Button variant="success" onClick={() => handleSelectCategory(category._id)} style={{ marginLeft: '1rem' }}>הצגת כל המוצרים בקטגוריה זו</Button>
                            </>
                        )}
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};

export default Categories;
