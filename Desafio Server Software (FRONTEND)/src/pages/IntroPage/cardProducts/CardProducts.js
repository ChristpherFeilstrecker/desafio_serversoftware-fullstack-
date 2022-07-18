import deletRequest from "../../../components/hooks/deletRequest"
import { BASE_URL } from "../../../components/constants/BaseURL"
import { useContext } from "react"
import GlobalContext from "../../../components/global/globalContext"

export default function CardProducts(props) {
    const data = useContext(GlobalContext);
    const setRefresh = data.setRefresh
    const refresh = data.refresh
    const { codigo, descricao } = props.product
    const openDetailProduct = props.openDetailProduct
    const openEditProduct = props.openEditProduct

    const deleteProduct2 = (code) => {
        deletRequest(BASE_URL + "/produtos/deleteProduct?code=" + code);
        setRefresh(!refresh)
    }

    return (
        <div key={codigo} className="product_box">
            <div className="product_code">{codigo}</div>
            <div className="product_description">{descricao}</div>
            <button onClick={() => openEditProduct(props.product)} className="btn">editar</button>
            <button onClick={() => openDetailProduct(props.product)} className="btn">detalhes</button>
            <button className="btn" onClick={() => deleteProduct2(codigo)}>X</button>
        </div>
    )
}