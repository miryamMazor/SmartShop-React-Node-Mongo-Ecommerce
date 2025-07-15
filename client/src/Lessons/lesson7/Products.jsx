import { useSelector, useDispatch } from 'react-redux'
import { setCurrentProduct } from './redux/ProductAction'

export const Products = () => {

    // useDispatch() - הפעלת פעולה וזריקה לאויר
    let dispatch = useDispatch()

    // שליפת משתנים מתוך הסטור
    // useSelector()
    // מקבל פונקציית חץ שהמשתנה שלה הוא הסטור
    // כשיש כמה רדיוסרים - צריך לגשת לרדיוסר (לסטייט) המסוים
    let list = useSelector(x => x.product.products)

    const choose = (id) => {
        dispatch(setCurrentProduct(id))
    }

    return <>

        <div className="list">
            {list.map(p =>
                <div key={p.id}>
                    <p>description: {p.desc} price: {p.price}</p>
                    <button onClick={() => choose(p.id)}>choose</button>
                </div>
            )}
        </div>
    </>
}