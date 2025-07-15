export const SelectCity = (props) => {

    const { cities, setCity } = props

    return <>
        <h3>בחר עיר:</h3>
        <select onChange={(e) => setCity(e.target.value)}>
            <option selected disabled>בחר עיר</option>
            {cities.map((c, i) => <option key={i} value={c}>{c}</option>)}
        </select>
    </>
}