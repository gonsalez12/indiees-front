import axios from 'axios';


const apiUrl = "http://localhost:8080/api";

const alterarSenha = {
    

    async alterarSenha(data, token) {
        console.log(token)
        const endpoint = `${apiUrl}/usuarios/esqueciSenha`
        return axios.post(endpoint, data,{
            'Authorization': `Bearer ${token}`
        });
    }

}


export default alterarSenha;