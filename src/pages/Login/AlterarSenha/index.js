import React  from 'react';
import {Navigate} from 'react-router-dom';


import authService from '../../../services/auth ';
import alterarSenhaService from '../../../services/alterarSenha';


class AlterarSenha extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      nome: "",
      email: "",
      novaSenha: "",
      token: "",
      redirectTo: null
    }
  }

  async componentDidMount(){
    let loggedUser = await authService.getLoggedUser()
    if(!loggedUser && loggedUser.alterar_senha){
      this.setState({redirectTo : "/login"}) 
    }
    this.setState({nome :loggedUser.nome})
    this.setState({email :loggedUser.email})
    this.setState({token : loggedUser.token})
  }

  alterarSenha = async (event) => {
    event.preventDefault();
    let data = {
      email : this.state.email,
      senha : this.state.senha
    }
    try {
      await alterarSenhaService.alterarSenha(data, this.state.token)
      alert("Senha alterada com sucesso")
      this.setState({redirectTo : "/home"})
    } catch (error){
      alert("Erro na troca de senha")
      
    }

  }

  render(){
    if(this.state.redirectTo){
      return <Navigate to={this.state.redirectTo} replace />
    }
    return(
    <div className="container d-flex justify-content-center">
          <div className="card mt-5 w-50">
              <div className="card-body">
                  <form onSubmit={this.alterarSenha}>
                      <div className="form-group">
                          <label htmlFor="Nome">Nome</label>
                          <input 
                              type="text" 
                              className="form-control"
                              id="Nome" 
                              placeholder="Digite o email"
                              value={this.state.nome}
                              disabled />
                      </div>
                      <p></p>
                      <div className="form-group">
                          <label htmlFor="novaSenha">Email</label>
                          <input 
                              type="text" 
                              className="form-control"
                              id="email" 
                              placeholder="Digite o email"
                              value={this.state.email}
                              disabled />
                      </div>
                      <p></p>
                      <div className="form-group">
                          <label htmlFor="novaSenha">Nova senha</label>
                          <input 
                              type="text" 
                              className="form-control"
                              id="novaSenha" 
                              placeholder="Digite a nova senha"
                              value={this.state.novaSenha}
                              onChange={e => this.setState({novaSenha : e.target.value})} />
                      </div>
                      <p></p>
                      <button type="submit" className="btn btn-primary">Alterar Sennha</button>  
                  </form>
              </div>
          </div>
      </div>
    )
  }
}

export default AlterarSenha;