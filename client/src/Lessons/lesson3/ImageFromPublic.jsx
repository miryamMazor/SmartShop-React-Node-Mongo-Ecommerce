export const ImgFromPublic = () => {
    return <>
        <img src={`${process.env.PUBLIC_URL}/images/hole.JPG`}></img>
        <img src={`${process.env.PUBLIC_URL}/images/shadow.JPG`}></img>
        <img src={`${process.env.PUBLIC_URL}/images/water.JPG`}></img>
    </>
}