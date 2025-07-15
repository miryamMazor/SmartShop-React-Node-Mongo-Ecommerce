import { useParams } from "react-router"

export const Welcome = () => {

    // useParams
    const params = useParams()

    console.log(params);

    const { username, password } = params

    return <>
        {/* <h1>WELCOME {params.username}!!!</h1> */}
        <h1>WELCOME {username}!!!</h1>
        <h4>Your password is: {password}</h4>
    </>
}