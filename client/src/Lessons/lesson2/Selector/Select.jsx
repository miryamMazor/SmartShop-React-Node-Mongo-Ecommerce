export const Select = (props) => {

    const { list, set, text } = props

    return <>
        <h3>בחר {text}:</h3>
        <select onChange={(e) => set(e.target.value)}>
            <option selected disabled>בחר {text}</option>
            {list.map((c, i) => <option key={i} value={c}>{c}</option>)}
        </select>
    </>
}