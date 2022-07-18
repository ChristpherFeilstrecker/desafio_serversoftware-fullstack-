import { useState } from "react";
import axios from "axios";

const useRequestData = (url) => {
    const [data, setData] = useState();
    let urlLink = url

        axios
            .get(urlLink)
            .then((response) => {

                setData(response.data);
            })
            .catch((error) => {
               // console.log("erro useRequestData = ", error)
            });
  

    return data;

}

export default useRequestData

