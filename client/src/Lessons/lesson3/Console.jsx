import './style.css'

export const Console = (props) => {

    const { type, text } = props

    return <>
        <p className={`console ${type}`}>{type}: {text}</p>
    </>
}