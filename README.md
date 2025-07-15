# SmartShop-React-Node-Mongo-Ecommerce
A full-stack e-commerce application built with React, Node.js (Express), and MongoDB.

## Features

### 🔐 Authentication
- User registration with unique email validation (server-side)
- Login for both users and admin
- Admin is inserted manually into the DB

### 🛒 User Interface (React)
- Browse products by category
- Add products to shopping cart
- Quantity is managed (same product appears once with updated count)
- Personal area to update user details
- SweetAlert for user notifications
- MUI components for modern responsive UI

### ⚙️ Admin Panel (React)
- Login for admin
- Full CRUD for categories and products
- Navigate products by category
- Prevent adding duplicate products or categories
- Navigation using React Router + category code in URL
- useEffect and useState for dynamic data loading

###  Backend (Node.js)
- RESTful API using Express
- Input validation and error handling
- MongoDB with Mongoose for data persistence

## Technologies Used

- React (.jsx)
- Node.js + Express
- MongoDB + Mongoose
- React Router DOM
- Material UI (MUI)
- SweetAlert
- Axios

## Folder Structure

