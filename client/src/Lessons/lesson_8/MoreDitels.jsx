import { useDispatch,useSelector} from "react-redux"
export const MoreDitels =(id)=>{
    let trip=useSelector(s=>s.currentTrip)

    return<>
    <h1>{trip.tripId}</h1>
    <h1>{trip.tripYaad}</h1>
    <h1>{trip.date}</h1>
    <h1>{trip.numHours}</h1>
    <h1>{trip.numChair}</h1>
    <h1>{trip.price}</h1>
    <h1>{trip.paramedik}</h1>   
    </>
}