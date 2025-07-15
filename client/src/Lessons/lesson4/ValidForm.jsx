import { useState } from "react"
import "./style.css"

export const ValidForm = () => {

    const [errors, setErrors] = useState({})

    const validUN = (name) => {
        if (name.length < 3) {
            setErrors({ ...errors, username: 'username is shorted!' })
        }
        else {
            setErrors({ ...errors, username: '' })
        }
    }

    const validEmail = (email) => {
        // regex - ביטוי רגולרי
        const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
        if (!regex.test(email)) {
            setErrors({ ...errors, email: 'invalid email' })
        }
        else {
            setErrors({ ...errors, email: '' })
        }
    }

    const validPass = (password) => {
        const regex = /^[A-Z]+{3-5}[A-Za-z0-9]/
        if (!password.match(regex)) {
            setErrors({ ...errors, password: 'password must start with capital letter and contain english letters and numbers only!' })
        }
        else {
            setErrors({ ...errors, password: '' })
        }
    }

    const send = () => { }

    return <>
        <form onSubmit={(e) => send(e)}>
            <label>Username:</label><br></br>
            <input type={"text"} placeholder="input username" onChange={(e) => validUN(e.target.value)}></input>
            <p className="error">{errors.username}</p>
            <label>Email:</label><br></br>
            <input type={"email"} placeholder="input email" onChange={(e) => validEmail(e.target.value)}></input>
            <p className="error">{errors.email}</p>
            <label>Password:</label><br></br>
            <input type={"password"} placeholder="input password" onChange={(e) => validPass(e.target.value)}></input>
            <p className="error">{errors.password}</p>
            <input type={'submit'} value={'send'}></input>
        </form>
    </>
}