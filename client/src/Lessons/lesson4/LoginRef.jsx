import { useRef, useState } from "react"
import swal from "sweetalert"

export const LoginRef = (props) => {

    const { login } = props

    // referance - מצביע
    const unRef = useRef()
    const passRef = useRef()
    const hRef = useRef()

    const send = () => {

        const user = {
            username: unRef.current.value,
            password: passRef.current.value
        }

        if (login(user) == true) {
            swal(`${user.username}, WELCOME!!`, 'login successful!', 'success')
            hRef.current.innerHTML = user.username
        }
        else {
            swal('Oopps!!', 'login failed!', 'error')
        }
    }

    return <>
        <h1 ref={hRef}></h1>
        <label>Username:</label><br></br>
        <input type={"text"} placeholder="input username" ref={unRef}></input>
        <br></br>
        <br></br>
        <label>Password:</label><br></br>
        <input type={"password"} placeholder="input password" ref={passRef}></input>
        <br></br>
        <br></br>
        <button onClick={send}>send</button>
    </>
}