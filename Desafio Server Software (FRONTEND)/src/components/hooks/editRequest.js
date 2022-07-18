import axios from "axios";

const editRequest = (url, newBody, productToedit) =>{
 let description = newBody.descricao.toString()
    let urlLink = url
    let body = {
        "new_code":newBody.codigo,
        "description":description,
        "price":newBody.preco
    }
    
   // console.log("url = ",urlLink)
   // console.log("body = ",body)
  let result =  axios
    .put(urlLink,body)
    .then((response)=>{
        //console.log("resposta editRequest = ",response)
    })
    .catch((error)=>{
       // console.log("erro editRequest = ",error)
    });
return result
}

export default editRequest