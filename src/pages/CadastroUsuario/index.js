import React  from 'react';
import {Navigate   } from 'react-router-dom'

import CadastroService from '../../services/cadastro';


class CadastroUsuario extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      nome: "",
      email: "",
      senha: "",
      perfil: "2",
      redirectTo: null
    }
  }
    sendCadastro = async (event) => {
      event.preventDefault();
      let data = {
        nome : this.state.nome,
        perfil : this.state.perfil,
        email : this.state.email,
        senha : this.state.senha
      }
      try {
        await CadastroService.cadastrar(data)
        alert("Cadastrado com sucesso")
        this.setState({redirectTo : "/login"})
      } catch (error){
        alert("Erro ao efetuar o cadastro")
        
      }
    }
  

  render(){
    if(this.state.redirectTo){
      return(
        <Navigate to={this.state.redirectTo}/>
      )
    }
    return(
        <div className="container d-flex justify-content-center">
          <div className="card mt-5 w-50">
              <div className="card-body">
                  <form onSubmit={this.sendCadastro}>
                    <div className="form-group">
                          <label htmlFor="nome">Nome</label>
                          <input 
                              type="text" 
                              className="form-control"
                              id="nome" 
                              placeholder="Digite o nome completo"
                              value={this.state.nome}
                              onChange={e => this.setState({nome : e.target.value})} />
                      </div>
                      <p></p>
                      <div className="form-group">
                          <label htmlFor="email">Usuário</label>
                          <input 
                              type="text" 
                              className="form-control"
                              id="email" 
                              placeholder="Digite o email"
                              value={this.state.email}
                              onChange={e => this.setState({email : e.target.value})} />
                      </div>
                      <p></p>
                      <div className="form-group">
                          <label htmlFor="senha">Senha</label>
                          <input 
                              type="senha" 
                              className="form-control" 
                              id="senha" 
                              placeholder="Digite a Senha"
                              value={this.state.senha}
                              onChange={e => this.setState({senha : e.target.value})}/>
                      </div>
                      <p></p>
                      <button type="submit" className="btn btn-primary">Cadastrar</button>  
                  </form>
              </div>
          </div>
      </div>
    )
  }
}

export default CadastroUsuario;