import { BrowserRouter } from "react-router-dom"
// import { Home } from "./Home"
import { Routing } from "./Routing"
import { Nav } from "./Nav"
import { Provider } from "react-redux"
import store from '../lesson_8/redux/Store'


export const Main =()=>{
    return<>
             <Provider store={store}>           

         <BrowserRouter>

            <Nav></Nav>
            <Routing></Routing>

        </BrowserRouter>
        </Provider>

    </>
}