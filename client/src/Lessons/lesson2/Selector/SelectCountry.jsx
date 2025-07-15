export const SelectCountry = (props) => {

    const { countries, setCountry } = props

    return <>
        <h3>בחר ארץ:</h3>
        <select onChange={(e) => setCountry(e.target.value)}>
            <option selected disabled>בחר ארץ</option>
            {countries.map((c, i) => <option key={i} value={c}>{c}</option>)}
        </select>
    </>
}