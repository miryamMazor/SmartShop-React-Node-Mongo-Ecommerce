import { Console } from "./Console"
import { DynamicStyle } from "./DynamicStyle"
import { Image } from "./Image"
import { ImgFromPublic } from "./ImageFromPublic"
import { InlineStyle } from "./InlineStyle"

export const Main = () => {
    return <>
        {/* <InlineStyle></InlineStyle> */}
        {/* <DynamicStyle num={45}></DynamicStyle> */}
        <DynamicStyle num={8} color={'pink'}></DynamicStyle>

        {/* <Console type={'error'} text={'Cannot assignment a constant variable'}></Console> */}
        {/* <Console type={'warning'} text={'Each child should have a unique key'}></Console> */}
        {/* <Console type={'info'} text={'We can use dynamic style in react'}></Console> */}

        {/* <Image></Image> */}
        <ImgFromPublic></ImgFromPublic>
    </>
}