import axios from 'axios'

export const getToDoes = () => {
    return axios.get(`.https://jsonplaceholder.typicodecom/todos`)
}