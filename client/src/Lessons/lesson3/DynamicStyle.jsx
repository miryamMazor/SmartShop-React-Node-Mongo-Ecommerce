import './style.css'

export const DynamicStyle = (props) => {

    const { num, color } = props

    // const style = (num > 10)
    // ? { fontSize: `80px`, color: 'hotpink' }
    // : { fontSize: `20px`, color: 'yellow' }

    // const style = { fontSize: `${num * 2}px`, color: (num > 10) ? 'green' : 'blue' }
    const style = { fontSize: `${num * 2}px`, color }

    return <>

        {/* עיצוב בתוך השורה */}
        {/* <p style={{ fontSize: `${num * 2}px`, color: (num > 10) ? 'green' : 'blue' }}>The num is: {num}</p> */}
        {/* <p style={(num > 10) ? { fontSize: `80px`, color: 'hotpink' } : { fontSize: `20px`, color: 'yellow' }}>The num is: {num}</p> */}
        
        {/* עיצוב - הגדרת המשתנה בחוץ */}
        {/* <p style={style}>The num is: {num}</p> */}
        
        {/* עיצוב דרך קלאס דינמי */}
        <p className={num > 10 ? 'big' : 'small'}>The num is: {num}</p>

    </>
}