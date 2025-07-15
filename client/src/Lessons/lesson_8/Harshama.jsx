import { useNavigate } from "react-router"
import swal from "sweetalert"
import { useSelector ,useDispatch} from "react-redux"
import {addUser,setCurrentUser} from './redux/UserAction'

export const Harshama=()=>{

    const navigate=useNavigate()
    const dispatch=useDispatch()

    const send=(event)=>{
        event.preventDefault()

        const thisuser = {
            username: event.target[0].value,
            password: event.target[1].value,
            phone: event.target[2].value,
            address: event.target[3].value
        }
        // מוסיף את החדש לתוך מערך המשתמשים
            dispatch(addUser(thisuser))
            // מעדכן את הנוכחי
            dispatch(setCurrentUser(thisuser))
            // הודעה שהצליח
            swal(`${thisuser.username}, WELCOME!!`, 'register successful!', 'success')
            // מעביר לעל הטיולים
            navigate(`/AllTrips`)
        
    }
    return<>
    
    <form onSubmit={(e)=> send(e)}>
    <label>שם</label><br></br>
    <input type={"text"} placeholder="הכנס שם" ></input><br></br>

    <label>סיסמא</label><br></br>
    <input type={"text"} placeholder="הכנס סיסמא"></input><br></br>

    <label>טלפון</label><br></br>
    <input type={"text"} placeholder="הכנס טלפון"></input><br></br>

    <label>כתובת</label><br></br>
    <input type={"text"} placeholder="הכנס כתובת"></input><br></br>



    <input type={'submit'} value={'send'}>tryerty</input>
</form>
    </>
}