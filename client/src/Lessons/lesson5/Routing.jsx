// npm i react-router
// npm i react-router-dom

import { Route, Routes } from 'react-router'
import { Add } from './Add'
import { Home } from './Home'
import { Login } from './Login'
import { Products } from './Products'
import { Register } from './Register'
import { Welcome } from './Welcome'

// app-routing מקביל ל 
// y תטען קומפוננטה  x רק הצהרות של הניתובים - עבור ניתוב
export const Routing = () => {
    return <>
        {/* תגית שמכילה את כל הצהרות הניתובים - Routes */}
        <Routes>
            {/* ניתוב ברירת מחדל - ללא ערך במחרוזת הניתוב */}
            <Route path='' element={<Home></Home>}>
                <Route path='login' element={<Login></Login>}></Route>
                <Route path='register' element={<Register></Register>}></Route>
            </Route>
            {/* קומפוננטה שמגדירה ניתוב בודד - Route */}
            <Route path='home' element={<Home></Home>}>
                <Route path='login' element={<Login></Login>}></Route>
                <Route path='register' element={<Register></Register>}></Route>
            </Route>

            <Route path='welcome/:username/:password' element={<Welcome></Welcome>}></Route>
            
            <Route path='products' element={<Products></Products>}>
                <Route path='add/:desc' element={<Add></Add>}></Route>
            </Route>
        </Routes>
    </>
}