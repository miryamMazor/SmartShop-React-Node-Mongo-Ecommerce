import { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCategory, deleteCategory } from './redux/CategoryAction'

export const Categories = () => {
    let categoryRef = useRef()

    // useDispatch() - הפעלת פעולה וזריקה לאויר
    let dispatch = useDispatch()

    // שליפת משתנים מתוך הסטור
    // useSelector()
    // מקבל פונקציית חץ שהמשתנה שלה הוא הסטור
    // כשיש כמה רדיוסרים - צריך לגשת לרדיוסר (לסטייט) המסוים
    let list = useSelector(x => x.category.categories)

    const remove = (id) => {
        dispatch(deleteCategory(id))
    }

    const add=()=>{
        dispatch(addCategory(categoryRef.current.value))
    }

    return <>
        <h3>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</h3>
        <div className="list">
            {list.map(p =>
                <div key={p.id}>
                    <p>description: {p.desc}</p>
                    <button onClick={() => remove(p.id)}>delete</button>
                </div>
            )}
        </div>
        <input placeholder='input category description' ref={categoryRef}></input>
        <button onClick={add}>add category</button>
        <h3>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</h3>
    </>
}