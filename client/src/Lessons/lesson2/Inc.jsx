import { useState } from "react"
import { Pow } from "./Pow";

export const Inc = () => {

    console.log('inc');

    // let num = 0

    // הגדרת משתנים שישפיעו על התצוגה ההצ'טאמלית
    // useState (hook)
    // מגדירים מערך המכיל שני איברים
    // האיבר הראשון - המשתנה בעצמו
    // האיבר השני - פונקציה שאחראית על שינוי המשתנה
    // לא מוגדר = undefined בסוגריים העגולות ניתן לתת ערך התחלתי - אם לא המשתנה יהיה 
    const [num, setNum] = useState(0)
    const [x, setX] = useState(1)
    // אין לבגדיר משתנים של יוזסטייט בתוך פונקצייה אלא רק בחוץ
    // const [flag, setFlag] = useState(false)

    const incNum = () => {
        // num++
        // פונקציית עדכון ערכי המשתנים
        // הצבת ערך חדש
        // setNum(5)
        // setFlag(false)
        setNum(num + x)
        // הצבת ערך ביחס לערך הקודם שהיה במשתנה
        // setNum(num => num + 1)
        // setFlag(flag => !flag)
        // הצבת משתנה אחר
        // let y = num + 4
        // setNum(y)
        // console.log(y);
        console.log(num);
    }

    const setValueToInc = (event) => {
        console.log(event);
        console.log(event.target.value);
        setX(Number(event.target.value))
        event.target.value = ""
    }

    return <>
        <h2>{num}</h2>
        <input type='number' placeholder={'input number'} onBlur={(e) => setX(Number(e.target.value))}></input>
        {/* <input type={'number'} placeholder={'input number'} onBlur={(event) => setValueToInc(event)}></input> */}
        <br></br>
        {/* event = camelCase */}
        {/* onclick => onClick */}
        {/* background-color => backgroundColor */}
        {/* font-size => fontSize */}
        {/* זימון פונקציות - תמיד כותבים רק את שם הפונקציה - ללא סוגריים! */}
        {/* סוגריים מפעילות את הפונקצייה בעת קומפילציה */}
        {/* <button onClick={incNum}>inc</button> */}
        <button onClick={() => setNum(num + x)}>inc</button>
        <Pow num={num}></Pow>
    </>
}