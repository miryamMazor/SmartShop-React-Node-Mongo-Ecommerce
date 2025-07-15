import { useState } from "react"
import { getToDoes } from "./api"

export const List = () => {

    const [list, setList] = useState()

    getToDoes()
        // בעת הצלחה
        .then(x => {
            console.log(x);
            debugger
        })
        // בעת כשלון
        .catch(err => {

        })

    return <>
        {list && list.map(x => <p key={x.id}>{x.title}</p>)}
    </>
}