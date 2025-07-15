import { useState } from "react"
import { List } from "./List"
import { Num } from "./Num"

export const Main = () => {

    const [flag, setFlag] = useState(false)

    return <>
        {/* <List></List> */}
        <button onClick={() => setFlag(flag => !flag)}>show / hide</button>
        {flag && <Num></Num>}
    </>
}