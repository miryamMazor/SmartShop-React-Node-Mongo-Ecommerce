import axios from 'axios';
import swal from 'sweetalert';

// כתובת השרת
const baseUrl = `http://localhost:3001`;

// קריאות לשרת עבור קטגוריות
export const Category = () => {
    return axios.get(`${baseUrl}/category/getAllCategory`);
};

export const createCategory = (name) => {
    return axios.post(`${baseUrl}/category/create`, name);
};

export const updateCategory = (id, category) => {
    return axios.patch(`${baseUrl}/category/update/${id}`, category);
};

export const deleteCategory = (id) => {
    return axios.delete(`${baseUrl}/category/delete/${id}`);
};

// קריאות לשרת עבור מוצרים
// export const getAllProducts = (categoryId = 0) => {
//     const url = categoryId ? `${baseUrl}/product/getAll?categoryId=${categoryId}` : `${baseUrl}/product/getAll`;
//     return axios.post(url);
// };
export const getAllProducts = () => {
    return axios.get(`${baseUrl}/product/getAll`);
};


export const createProduct = (product) => {
    return axios.post(`${baseUrl}/product/create`, product);
};

export const updateProduct = (id, product) => {
    return axios.patch(`${baseUrl}/product/update/${id}`, product);
};

export const deleteProduct = (id) => {
    return axios.delete(`${baseUrl}/product/delete/${id}`);
};

export const getByCategoryId = (id) => {
    return axios.get(`${baseUrl}/product/getByCategoryId/${id}`);
};

export const Singup = (user) => {
    return axios.post(`${baseUrl}/user/create`, user);
};

export const login = (email, password) => {
    debugger
    return axios.get(`${baseUrl}/user/getUserByMeilAndPss/${email}/${password}`);

};

export const adminlogin = (email, password) => {
    return axios.get(`${baseUrl}/admin/getUserByMeilAndPss/${email}/${password}`);
};

export const updateUser = (id, user) => {
    return axios.patch(`${baseUrl}/user/update/${id}`,user);
};

export const deleteUser = (id) => {
    return axios.delete(`${baseUrl}/user/delete/${id}`);
};

// קריאות לשרת עבור מנהלים
export const createAdmin = (admin) => {
    return axios.post(`${baseUrl}/admin/create`, admin);
};

export const deleteAdmin = (id) => {
    return axios.delete(`${baseUrl}/admin/delete/${id}`);
};

export const getAllAdmins = () => {
    return axios.get(`${baseUrl}/admin/getAll`);
};

// export const loginAdmin = (email, password) => {
//     return axios.post(`${baseUrl}/admin/getAdminByMeilAndPss/${email}/${password}`);
// };
// // userRouter.route('/update/:idUser/:idProduct').patch(addProduct)

export const AddShoppingcart = (idUser, idProduct) => {

    swal(`Nice`, 'buy successful!', 'success');
    return axios.patch(`${baseUrl}/user/addProductupdate/${idUser}/${idProduct}`);
};

export const deleteProductFromShoppungCart = (idUser, idProduct) => {

    swal(`Nice`, 'buy successful!', 'success');
    return axios.patch(`${baseUrl}/user/update/${idUser}/${idProduct}`);
};

export const getAllShoopingcart = (idUser) => {
    return axios.get(`${baseUrl}/user/getAllShoopingCart/${idUser}`);
};