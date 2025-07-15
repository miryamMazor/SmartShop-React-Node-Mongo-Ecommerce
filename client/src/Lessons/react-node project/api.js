import axios from 'axios'
// npm i axios - קריאות שרת

const baseUrl=`http://localhost:3001`

export const getCategories = () => {
    // axios.method - שיטת הגישה
    // בתוך הסוגריים: url
    return axios.get(`${baseUrl}/category`)
}

export const addCategory = (category) => {
    // לתוך הניתוב נשרשר פרמטרים - params
    debugger
    return axios.post(`${baseUrl}/category`, category)
}

export const register = (user) => {    
    return axios.post(`${baseUrl}/user/register`, user)
}

export const login = (user) => {    
    return axios.post(`${baseUrl}/user/login`, user)
}