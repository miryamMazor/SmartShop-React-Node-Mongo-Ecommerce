import { Provider } from "react-redux"
import { Product } from "./Product"
import { Products } from "./Products"
import store from "./redux/Store"

export const Main = () => {
    return <>
        {/* Provider - ספק */}
        {/* מקבל כפרופס את הסטור */}
        <Provider store={store}>
            {/* Provider כל קומפוננטה שטען בתוך ה  */}
            {/* תכיר את הסטור ותוכל לגשת למשתנים */}
            <Products></Products>
            <Product></Product>
        </Provider>
    </>
}