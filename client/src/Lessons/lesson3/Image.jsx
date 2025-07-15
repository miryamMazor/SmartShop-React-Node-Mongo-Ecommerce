import green from './imgs/ירוק.JPG'
import dessert from './imgs/צוקים.JPG'
import water from './imgs/נחל.JPG'
import field from './imgs/שדה.JPG'
import forest from './imgs/יער.JPG'
// יבוא התמונה כקובץ והצבה במשתנה

import './style.css'

export const Image = () => {
    return <>
        {/* מקור התמונה יהיה המשתנה שבו ייבאנו את התמונה */}
        <img src={green}></img>
        <img src={dessert}></img>
        <img src={water}></img>
        <img src={field}></img>
        <img src={forest}></img>
    </>
}