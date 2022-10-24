import React  from 'react';
import {Navigate   } from 'react-router-dom'


import EsqueciSenhaSevice from '../../../services/esqueiciSenha';


class EsqueciSenha extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      email: "",
      redirectTo: "",
    }
  }
    sendEsqueciSenha = async (event) => {
      event.preventDefault();
      let data = {
        email : this.state.email
      }
      try {
        await EsqueciSenhaSevice.senha(data)
        alert("Enviado o email com o usuario e senha")
        this.setState({redirectTo : "/login"})
      } catch (error){
        alert("Usuario não localizado")
        
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
                  <form onSubmit={this.sendEsqueciSenha}>
                      <div className="form-group">
                          <label htmlFor="email">Email</label>
                          <input 
                              type="text" 
                              className="form-control"
                              id="email" 
                              placeholder="Digite o email"
                              value={this.state.email}
                              onChange={e => this.setState({email : e.target.value})} />
                      </div>
                      <p></p>
                      <button type="submit" className="btn btn-primary">Enviar email</button>  
                  </form>
              </div>
          </div>
      </div>
    )
  }
}

export default EsqueciSenha;