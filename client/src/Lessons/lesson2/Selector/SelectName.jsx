export const SelectName = (props) => {

    const { setname } = props
    return <>
        <input placeholder="input name" onBlur={(e) => setname(e.target.value)}></input>
    </>
}