export function Person(props) {

    // const name = 'Michal'
    // const age = 19

    // props = { name: "Michal", age: 19 }

    // const name = props.name
    // const age = props.age

    // שליפת כל המפתחות של אובייקט הפרופס
    // עי הגדרת משתנים כשמות של המפתחות
    // הערכים מוצבים בהתאמה
    const { age, name } = props

    return <>
        <h2>~~~~~~~~~~~~~~~</h2>
        {/* נכתוב בתוך סוגרים מסלסלות JS קוד */}
        {/* <h2>name: {props.name}</h2>
        <h2>age: {props.age}</h2> */}
        <h2>name: {name}</h2>
        <h2>age: {age}</h2>
        <h2>~~~~~~~~~~~~~~~</h2>
    </>
}

// הגדרת ערכי ברירת מחדל למאפייני הקומפוננטה
Person.defaultProps = {
    name: 'Annonymous',
    age: 0
}

// JS סוגי משתנים ב 
var x
// var - גלובלי - מוכר בכל מקום- ניתן לשינוי
// מוכר בכל הקובץ - בתוך פונקציות...
let y
// let - לוקאלי - מוכר רק במקום בו הגדירו אותו - נתן לשינוי
let num = 0
let arr = []

// דוגמה
// הגדרנו משתנה לוקאלי וניסינו להשתמש מחוץ ללולאה
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 10)
//         break;
// }
// // error: 'i' is not defined
// if (i == arr.length) {
//     console.log('none');
// }

// שתי דרכים לפתור את הבעיה:
//1. הגדרה כמשתנה גלובלי
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > 10)
//         break;
// }
// if (i == arr.length) {
//     console.log('none');
// }

// הגדרה בחוץ
// let i
// for (i = 0; i < arr.length; i++) {
//     if (arr[i] > 10)
//         break;
// }
// if (i == arr.length) {
//     console.log('none');
// }

const z = 5
// const - לוקאלי - לא ניתן לשינוי
// חובה לתת לו ערך בזמן ההגדרה - כי א"א לתת אחכ ערך
// ובלי ערך אין לו משמעות