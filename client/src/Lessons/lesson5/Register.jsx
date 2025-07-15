import { useNavigate } from "react-router"
import swal from "sweetalert"

export const Register = () => {

    const navigate = useNavigate()

    const send = (event) => {

        event.preventDefault()

        const user = {
            username: event.target[0].value,
            password: event.target[1].value
        }

        swal(`${user.username}, WELCOME!!`, 'register successful!', 'success')
        // ניתוב לאח - מצריך סלש
        // ניתוב לבן - לא מצריך סלש
        navigate(`/welcome/${user.username}/${user.password}`)
    }

    return <>
        <h1>Register:</h1>
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