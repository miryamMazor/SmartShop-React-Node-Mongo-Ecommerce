import { useEffect, useState } from "react"
import { getTodo, getToDoes } from "./api";

export const List = () => {

    const [list, setList] = useState()
    const [todo, setTodo] = useState()
    const [error, setError] = useState()

    useEffect(() => {
        getToDoes()
            // בעת הצלחה
            .then(x => {
                console.log(x.data);
                // debugger
                setList(x.data)
                setError()
            })
            // בעת כשלון
            .catch(err => {
                setList()
                setError(err.message)
            })
    }, [])

    const choose = (id) => {
        getTodo(id)
            // בעת הצלחה
            .then(x => {
                console.log(x.data);
                setTodo(x.data)
            })
    }

    return <>
        {todo && <h2>{todo.title}</h2>}
        {list && list.map(x => <div>
            <p key={x.id}>{x.title}</p>
            <button onClick={() => choose(x.id)}>choose</button>
        </div>)}
        {error && <h1>{error}</h1>}
    </>
}