import { useParams } from "react-router"

export const Add = () => {

    const p = useParams()

    const { desc } = p

    return <>
        <div className="add">
            {desc} add to cart!
        </div>
    </>
}