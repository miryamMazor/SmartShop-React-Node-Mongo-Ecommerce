export const Pow = (props) => {
    const { num } = props

    console.log('pow');

    return <>
        <p>{Number(num) * Number(num)}</p>
    </>
}