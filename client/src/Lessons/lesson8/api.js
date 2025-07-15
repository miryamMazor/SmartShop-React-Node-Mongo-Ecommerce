import axios from 'axios'
// npm i axios - קריאות שרת

export const getToDoes = () => {
    // axios.method - שיטת הגישה
    // בתוך הסוגריים: url
    return axios.get(`https://jsonplaceholder.typicode.com/todos`)
}

export const getTodo = (id) => {
    // לתוך הניתוב נשרשר פרמטרים - params
    return axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
}

export const addTodo = (todo) => {
    // פרמטרים שנשלחים בגוף הבקשה: url, body
    return axios.post(`https://jsonplaceholder.typicode.com/todos`, todo)
}