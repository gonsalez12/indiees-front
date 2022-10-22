import axios from 'axios';

const apiUrl = "http://localhost:8080/api";

const CadastroService = {

    async cadastrar(data) {
        const endpoint = `${apiUrl}/usuarios/salvar`
        return axios.post(endpoint, data);
    }

}


export default CadastroService;