import { useState } from "react"
import { useNavigate,Outlet } from "react-router"
import swal from "sweetalert"
import { useDispatch,useSelector} from "react-redux"



export const Hitchabrot=()=>{

    const navigate=useNavigate()
    const dispatch=useDispatch()
    let users = useSelector(store => store.user.users)
    const send=(event)=>{
        event.preventDefault()

        const thisuser = {
            username: event.target[0].value,
            password: event.target[1].value
        }
        

        let index=users.findIndex(x=>x.username==thisuser.username)
        if(index==-1)
           navigate(`Register`)
        else{
            dispatch(setCurrentUser(thisuser))
            swal(`${thisuser.username}, WELCOME!!`, 'login successful!', 'success')
            navigate(`/AllTrips`)
        }
    }
    
    const [currentUser,setCurrentUser]=useState()
    return<>
    <form onSubmit={(e)=> send(e)}>
    <label>שם</label><br></br>
    <input type={"text"} placeholder="הכנס שם" ></input><br></br>

    <label>סיסמה</label><br></br>
    <input type={"number"} placeholder="הכנס סיסמה"></input><br></br>


    <input type={'submit'} value={'send'}>tryerty</input>
</form>
<Outlet></Outlet>
    </>
}