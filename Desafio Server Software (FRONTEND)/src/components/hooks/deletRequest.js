import axios from "axios";

const deletRequest = (url) =>{

    let urlLink = url

    axios
    .delete(urlLink)
    .then((response)=>{
       // console.log("resposta deletRequest = ",response)
    })
    .catch((error)=>{
       // console.log("erro deletRequest = ",error)
    });

}

export default deletRequest