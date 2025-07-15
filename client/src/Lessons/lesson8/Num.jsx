import { useEffect, useState } from "react"

const calc = (text) => {
    let arr = text.split(" ")
    return arr.length
}

export const Num = () => {

    const [n, setN] = useState()
    const [text, setText] = useState("Hello")

    // let x = calc(num)
    // setN(x)

    useEffect(()=>{
        document.title = `num: ${n}`
    }, [n])

    // פונקציה שמופעלת בעת טעינת קומפוננטה
    useEffect(() => {
        console.log('effect');
        // בעת טעינה
        let x = calc(text)
        setN(x)
        // document.title = `count of words: ${n}`

        // בעת דריסה
        return () => {
            document.title = 'React App'
        }
        // בעת שינוי של משתנה מסוים - תופעל הפונקציה שוב
    }, [text])

    return <>
        <h1>{text}</h1>
        <input placeholder="input text" onBlur={(e) => setText(e.target.value)}></input>
        <h2>{n}</h2>
        <input placeholder="input num" onBlur={(e) => setN(Number(e.target.value))}></input>
    </>
}