import axios from 'axios';


const apiUrl = "http://localhost:8080/api";

const EsqueciSenhaSevice = {

    async senha(data) {
        const endpoint = `${apiUrl}/usuarios/esqueciSenha`
        return axios.post(endpoint, data);
    }

}


export default EsqueciSenhaSevice;