import { Div } from "./Div";
import { Hello } from "./Hello";
import { List } from "./List";
import { Person } from "./Person";
import { Student } from "./Student";

export function Main() {

    return <>
        {/* <Hello></Hello> */}
        {/* <Div></Div> */}
        {/* properties - מאפיינים - attributes */}
        {/* מאפיינים מקבלים רק מחרוזות */}
        {/* אם צריך משתנה מסוג אחר נכניס אותו לסוגריים מסולסלות */}
        {/* גם מחרוזות אפשר לשים בתוך סוגריים */}
        {/* <Person key={0} name="Michal" age={19}></Person> */}
        {/* <Person key={1} name="Odel" age={18}></Person> */}
        {/* <Person age={22}></Person> */}
        {/* <Person name={'Shulamit'}></Person> */}
        {/* <Student name={'מרים'} age={20} grade={100}></Student>
        <Student name={'שרה חיה'} age={8} grade={80}></Student>
        <Student name={'חנוש'} age={28} grade={60}></Student> */}
        <List></List>
    </>
}