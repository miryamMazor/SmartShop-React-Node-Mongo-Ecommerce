import { Outlet, useNavigate } from 'react-router'
import './style.css'

export const Products = () => {

    const nav = useNavigate()

    const list = [
        { desc: 'chocolate', price: '6' },
        { desc: 'chips', price: '4' },
        { desc: 'bamba', price: '2' },
        { desc: 'candies', price: '10' },
        { desc: 'wine', price: '30' },
        { desc: 'cola', price: '6' }
    ]

    const add = (desc) => {
        // add ניתוב לקומפוננטה 
        // ניתוב לבן - לא מצריך סלש
        nav(`add/${desc}`)
    }

    return <>
    
        <div className="list">
            {list.map((p, i) => <div key={i}>
                <p>description: {p.desc} price:{p.price}</p>
                <button onClick={() => add(p.desc)}>add to cart</button>
            </div>)}
        </div>
        {/* קומפוננטה שמאפשרת לטעון ילד */}
        <Outlet></Outlet>
    </>
}