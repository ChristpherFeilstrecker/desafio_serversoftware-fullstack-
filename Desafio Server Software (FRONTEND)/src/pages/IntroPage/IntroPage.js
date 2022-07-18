import "./StyledIntroPage.css";
import { useContext, useState } from "react";
import GlobalContext from "../../components/global/globalContext";
import CardProducts from "./cardProducts/CardProducts";
import editRequest from "../../components/hooks/editRequest";
import { BASE_URL } from "../../components/constants/BaseURL";
import useForm from "../../components/hooks/useForm"

export default function IntroPage() {
    const data = useContext(GlobalContext);
    const products = data.products
    let [slid, setSlid] = useState(false)
    let [slid2, setSlid2] = useState(false)
    let [detailProd, setDetailProd] = useState("")
    let [editProd, setEditProd] = useState("")

    const openDetailProduct = (prod) => {
        setSlid(true)
        setSlid2(false)
        setDetailProd(prod)
    }

    const openEditProduct = (prod) => {
        setSlid2(true)
        setSlid(false)
        setEditProd(prod)
    }

    const ListProducts = products && products.map((product) => {
        return <CardProducts key={product.codigo} product={product} setSlid={setSlid} openDetailProduct={openDetailProduct} openEditProduct={openEditProduct} />
    })

    const [form, onChange, clear] = useForm({ codigo: "", descricao: "", preco: "" })

    const onChangeInputs = (ev) => {
        ev.preventDefault()
     
        let url =BASE_URL + "/produtos/editProduct?code="+editProd.codigo
        editRequest(url,form,editProd)
   
        clear()
        setSlid2(false)
    }

    return (
        <div className="products_container">
            <div className={slid ? "products_detail_box " : "torigth"}>
                <button onClick={() => setSlid(false)}>Fechar</button>
                <div className="products_detail_container">
                    <div>codigo:{detailProd && detailProd.codigo}</div>
                    <div>descrição:{detailProd && detailProd.descricao}</div>
                    <div>preço: R${detailProd && detailProd.preco}</div>
                    <div>data do cadastro:{detailProd && detailProd.data_cadastro}</div>
                </div>
            </div>

            <div className="products_box">
                <h1>Produtos</h1>
                <div className="products_select">
                {products ? <div>{ListProducts}</div>:<div>LOADING...</div>}
                </div>
            </div>
            <div className="container_position">
                <div className={slid2 ? "products_edit_box" : "toTop"}>
                    <button onClick={() => setSlid2(!slid2)}>Fechar</button>
                    <div className="products_edit_container">
                        <div>Preencha todos os dados para editar o produto: {editProd.descricao}</div>
                        <form className="form-container-box" onSubmit={onChangeInputs}>
                            <div className="form-container">
                                <div className="form-personal-data-container2">
                                    <input
                                        placeholder={"Código"}
                                        type='number'
                                        name="codigo"
                                        value={form.codigo}
                                        onChange={onChange}
                                        required
                                    />

                                    <input
                                        placeholder={"Descrição"}
                                        type='string'
                                        name="descricao"
                                        value={form.descricao}
                                        onChange={onChange}
                                        required
                                    />

                                    <input
                                        placeholder={"Preço"}
                                        type='number'
                                        name="preco"
                                        value={form.preco}
                                        onChange={onChange}
                                        required
                                    />

                                </div>
                                <div className="form-btn-container-contact-section-2">
                                    <div className="btns-send-container-contact-section-2">
                                        <button className="btn-send-contact-section-2">EDITAR</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}