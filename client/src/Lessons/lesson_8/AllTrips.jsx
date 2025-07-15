import { useSelector, useDispatch } from 'react-redux'
import { useNavigate,Outlet } from 'react-router'
import { addTrip } from './redux/TripAction'
import {setCurrenTrip} from './redux/TripAction'
import { useState,useEffect } from "react"
import {GetAlltrips} from './api'

export const AllTrips =()=>{

    // מעביר אותי לדף שאני רוצה
    const navigate=useNavigate()
    // יכולת להשתמש בפונקציה שהיא בתוך הרדיוסר
    const dispatch=useDispatch()

    // מערך שבתוכו נכניס את כל הנתונים
    const [list, setList] = useState()
    // מערך שגיאות
    const [error, setError] = useState()

    // בטעינת הדף
    useEffect(()=>{
        // שליפה של כל הטיולים
        GetAlltrips ()
        // בעת הצלחה
        .then(x => {
            console.log(x.data);
            // הוספת טיול
            setList(x.data)
            list.forEach(item => {
                // בכל תא ברשימה נשים טיול
                dispatch(addTrip(item))
            });
            setError()
        })
        // בעת כשלון
        .catch(err => {
            setList()
            setError(err.message)
        })
    }, [])

const choose = (id) => {
    dispatch(setCurrenTrip(id))
    // מעביר לפרטים נוספים ע"י שליחת האידי
    navigate(`MoreDitels/${id}`)
}

return <>
    {list && list.map(x => <div>
        <p key={x.tripId}>{x.tripYaad}</p>
        <button onClick={() => choose(x.tripId)}>choose</button>
    </div>)}
    {error && <h1>{error}</h1>}
    <Outlet></Outlet>
</>
}