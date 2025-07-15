import swal from "sweetalert"

export const LoginForm = (props) => {

    const { login } = props

    const send = (event) => {

        // console.log(event);

        // בברירת המחדל של סבמיט הוא מחכה לקבל ניתוב לעבור ומעביר אותנו אליו
        // מבטל את ברירת המחדל של אירוע סבמיט
        event.preventDefault()

        const user = {
            username: event.target[0].value,
            password: event.target[1].value
        }

        if (login(user) == true) {
            swal(`${user.username}, WELCOME!!`, 'login successful!', 'success')
        }
        else {
            swal('Oopps!!', 'login failed!', 'error')
        }
    }

    return <>
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