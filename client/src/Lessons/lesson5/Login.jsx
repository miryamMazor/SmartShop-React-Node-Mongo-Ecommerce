import { useNavigate } from "react-router"
import swal from "sweetalert"

export const Login = () => {

    // hooks - use מתחיל במילה 
    // useState, useRef לדוגמה 
    // אסור להגדיר משתנה של הוקס בתוך פונקציה

    // useNavigate - אחראי על ניתוב בין קומפוננטות
    const navigate = useNavigate()

    const send = (event) => {

        // console.log(event);

        // בברירת המחדל של סבמיט הוא מחכה לקבל ניתוב לעבור ומעביר אותנו אליו
        // מבטל את ברירת המחדל של אירוע סבמיט
        event.preventDefault()

        const user = {
            username: event.target[0].value,
            password: event.target[1].value
        }

        swal(`${user.username}, WELCOME!!`, 'login successful!', 'success')
        // ניתוב לאח - מצריך סלש
        // ניתוב לבן - לא מצריך סלש
        navigate(`/welcome/${user.username}/${user.password}`)
    }

    return <>
        <h1>Login:</h1>
        <form onSubmit={(e) => send(e)}>
            <label>Username:</label><br></br>
            <input type={"text"} placeholder="input username"></input>
            <br></br>
            <br></br>
            <label>Password:</label><br></br>
            <input type={"password"} placeholder="input password"></input>
            <br></br>
            <br></br>
            <input type={'submit'} value={'send'}></input>
        </form>
    </>
}