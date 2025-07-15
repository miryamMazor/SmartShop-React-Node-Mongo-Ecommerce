import { useSelector } from "react-redux"

export const Product = () => {

    const product = useSelector(store => store.currentProduct)

    return <>
        {product.desc && <h2>{product.desc}</h2>}
    </>
}