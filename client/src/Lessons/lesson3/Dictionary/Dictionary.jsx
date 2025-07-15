import { useState } from "react"
import '../../../App.css'

export const Dictionary = () => {

    const dictionary = {
        apple: 'תפוח',
        pineapple: 'אננס',
        strawberry: 'תות',
        orange: 'תפוז',
        date: 'תמר',
        cherry: 'דובדבן',
        peach: 'אפרסק',
        banana: 'בננה',
        pear: 'אגס',
        melon: 'מלון'
    }

    const shuffle = (arr) => {
        return arr.sort(() => Math.random() - 0.5)
    }

    const [english, setEnglish] = useState(shuffle(Object.keys(dictionary)))
    const [hebrew, setHebrew] = useState(shuffle(Object.values(dictionary)))
    const [dic, setDic] = useState([])

    return <>
        <h1 className={"App"}>Atractive Dictionary</h1>
        <ul>
            {english.map(word =>
                <div key={'english_' + word} className={"App"}
                    style={{ backgroundColor: dic.includes(word) ? 'hotpink' : false }}
                    onMouseOver={() => setDic([word, dictionary[word]])}>
                    {word}</div>
            )}
        </ul>
        <ul>
            {hebrew.map(word =>
                <div key={'hebrew_' + word} className={"App"}
                    style={{ backgroundColor: dic.includes(word) ? 'orange' : false }}>
                    {word}</div>
            )}
        </ul>
    </>
}