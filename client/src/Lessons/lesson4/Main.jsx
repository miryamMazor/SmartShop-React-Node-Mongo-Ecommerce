import { Login } from "./Login"
import { LoginForm } from "./LoginForm"
import { LoginRef } from "./LoginRef"
import { ValidForm } from "./ValidForm"

export const Main = () => {

    let users = [
        { username: "Miryam", password: "111" },
        { username: "Michal", password: "222" },
        { username: "Chen", password: "333" },
        { username: "Sivi", password: "444" },
        { username: "Tal", password: "555" }
    ]

    const userExists = (user) => {
        let u = users.filter(x => x.username == user.username && x.password == user.password)[0]
        if (!u)
            return false;
        return true;
    }

    const addUser = (user) => {
        if (userExists(user)) {
            return false
        }
        else {
            users.push(user)
            return true
        }
    }

    return <>
        {/* <Login login={userExists}></Login> */}
        {/* <LoginRef login={userExists}></LoginRef> */}
        {/* <LoginForm login={userExists}></LoginForm> */}
        <ValidForm></ValidForm>
    </>
}