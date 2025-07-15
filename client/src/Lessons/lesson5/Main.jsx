import { BrowserRouter } from "react-router-dom"
import { Nav } from "./Nav"
import { Routing } from "./Routing"

export const Main = () => {
    return <>
        {/* קומפוננטה שמנהלת את הניתובים -
         יודעת לטעון בפועל בכל פעם את הקומפוננטה הרצויה בלבד! */}
        <BrowserRouter>
            <Nav></Nav>
            {/* מיקום הטעינה של קומפוננטת הניתבים משפיע על מיקום הטעינה בפועל של הקומפוננטות */}
            <Routing></Routing>
        </BrowserRouter>
    </>
}