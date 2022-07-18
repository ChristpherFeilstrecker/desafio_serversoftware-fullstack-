import { useEffect, useState } from "react";
import GlobalContext from "./globalContext";
import useRequestData from "../hooks/useRequestData";
import { BASE_URL } from "../constants/BaseURL";
import deletRequest from "../hooks/deletRequest";

export default function GlobalState(props) {
    let [products, setProducts] = useState("");
    let [refresh, setRefresh] = useState(true);

    let products2 = useRequestData(BASE_URL + "/produtos/showAllProducts")

    useEffect(function getProducts() {
        setProducts(products2 && products2);
    });

    useEffect(() => {
        setProducts(products2 && products2);
    }, [products2, refresh])

    const data = {
        products,
        setProducts,
        refresh,
        setRefresh
    }


    return (<GlobalContext.Provider value={data}>
        {props.children}
    </GlobalContext.Provider>
    )
}

