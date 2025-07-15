export const Fruit = (props) => {
// export const Fruit = ({ name, color }) => {

    // console.log(props);

    // const { fruit } = props

    // return <>
    //     <h1>~~~~~~~~~~~~~~~~~~~~</h1>
    //     <h2>{fruit.name} is {fruit.color}</h2>
    //     <h1>~~~~~~~~~~~~~~~~~~~~</h1>
    // </>

    const { name, color } = props

    return <>
        <h1>~~~~~~~~~~~~~~~~~~~~</h1>
        <h2>{name} is {color}</h2>
        <h1>~~~~~~~~~~~~~~~~~~~~</h1>
    </>
}