import { useState } from "react"
import swal from "sweetalert"

export const Login = (props) => {

    const { login } = props

    // const [name, setName] = useState()
    // const [pass, setPass] = useState()

    // useState עדכון מערך ב 
    // נציב בפונקציית העריכה מערך חדש
    // נשפוך לתוכו את כל האיברים שהיו במערך הקודם 
    // ונציב בסוף את האיבר החדש
    // const [arr, setArr] = useState()
    // let x
    // let a = arr
    // a.push(x)
    // setArr(a)
    // setArr([...arr, x])

    // אותו דבר בעדכון אובייקט ג'סון
    // נשפוך את כל הנתונים שבכר היו באובייקט
    // ונציב ערך במפתח החדש
    // הערה לגבי עדכון מפתח באובייקט ג'סון
    // אם הצבנו ערך במפתח כלשהו
    // והמפתח לא היה קיים - המפתח יתווסף עם הערך
    // אם המפתח היה קיים - הערך ישתנה
    const [user, setUser] = useState({})

    const send = () => {

        // const user = {
        //     username: name,
        //     password: pass
        // }

        if (login(user) == true) {
            swal(`${user.username}, WELCOME!!`, 'login successful!', 'success')
        }
        else {
            swal('Oopps!!', 'login failed!', 'error')
        }
    }

    return <>
        <label>Username:</label><br></br>
        {/* <input type={"text"} placeholder="input username" onBlur={(e) => setName(e.target.value)}></input> */}
        <input type={"text"} placeholder="input username" onBlur={(e) => setUser({ ...user, username: e.target.value })}></input>
        <br></br>
        <br></br>
        <label>Password:</label><br></br>
        {/* <input type={"password"} placeholder="input password" onBlur={(e) => setPass(e.target.value)}></input> */}
        <input type={"password"} placeholder="input password" onBlur={(e) => setUser({ ...user, password: e.target.value })}></input>
        <br></br>
        <br></br>
        <button onClick={send}>send</button>
    </>
}