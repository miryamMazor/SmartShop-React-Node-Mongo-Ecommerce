import axios from 'axios'

export const GetTripById =(id)=>{
    return axios.get(`localhost:7000/api/trips/gettripbyid/${id}`)
}
export const GetAlltrips =()=>{
    return axios.get(`localhost:7000/api/trips/getalltrips/`)
}
export const addTrip =(trip)=>{
    return axios.post(`localhost:7000/api/trips/addtrip/`,trip)
}
export const deleteTrip =(id)=>{
    return axios.delete(`localhost:7000/api/trips/deletetrip/${id}`)
}

