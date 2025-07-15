import { useSelector, useDispatch } from 'react-redux'
import { setCurrentProduct } from './redux/Action'

export const Products = () => {

    // useDispatch() - הפעלת פעולה וזריקה לאויר
    let dispatch = useDispatch()

    // שליפת משתנים מתוך הסטור
    // useSelector()
    let list = useSelector(x => x.products)

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