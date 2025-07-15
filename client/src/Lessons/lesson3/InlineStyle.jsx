import './style.css'

export const InlineStyle = () => {

    const divStyle = {
        backgroundColor: 'orange',
        border: 'solid 2px black',
        fontSize: '20px',
        width: '200px',
        height: '100px'
    }

    return <>
        {/* html */}
        {/* <div style={background-color:'red', border:'solid 1px brown', font-size:'20px'}>WELCOME!</div> */}
        {/* react */}
        {/* ריקאט מחייבת לשים כל אטריביוט שאינו מחרוזת בסוגריים מסולסלות */}
        {/* לכן יש לנו 2 סוגריים - אחד של האטריביוט ואחד של הג'סון */}
        {/* מילה שניה באות גדולה - camelCase תזכורת - בריאטק משתמשים ב  */}
        <div style={{ backgroundColor: 'red', border: 'solid 3px brown', fontSize: '20px', width: '200px', height: '100px' }}>WELCOME!</div>
        <div style={divStyle}>WELCOME!</div>
        {/* css שימוש ב  */}
        <div className="div">WELCOME!</div>
    </>
}