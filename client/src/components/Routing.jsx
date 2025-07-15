import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import { Signup } from './singup'; // שים לב שייתכן והקובץ שלך נקרא singup במקום Signup
import Categories from './categories';
import Products from './products';
import GetAllShoppingCart from './getAllShoopingCart';
import { Profile } from './Profile';
import Admin from './admin';
// import NavAdmin from './navAdmin';
import ProductAdmin from './productAdmin';
import ResponsiveAppBar from './appnav';
import ProductID from './productId';

function Routing() {
    return (
        <div>
            <Routes>
                <Route path="home" element={<Home></Home>} />
                <Route path="login" element={<Login></Login>} />
                <Route path="signup" element={<Signup></Signup>} />
                <Route path="categories" element={<Categories></Categories>} />
                <Route path="products" element={<Products></Products>} />
                <Route path="profile" element={<Profile></Profile>} />
                <Route path="cart" element={<GetAllShoppingCart></GetAllShoppingCart>} />
                <Route path="admin" element={<Admin></Admin>} />
                <Route path="ProductID" element={<ProductID></ProductID>} />

                <Route path="productAdmin" element={<ProductAdmin></ProductAdmin>} />
                <Route path="navbar" element={<ResponsiveAppBar></ResponsiveAppBar>
} />

                <Route path="" element={<Home></Home>} />
            </Routes>
        </div>
    );
}

export default Routing;
