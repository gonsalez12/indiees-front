import React  from 'react';
import authService from '../../services/auth ';
import {Navigate,Link   } from 'react-router-dom'



import './login.css';



class Login extends React.Component{
  

  
  constructor(props){
    super(props)
    this.state = {
      
      email: "",
      senha: "",
      redirectTo: null
    }
    
  }

  

  sendLogin = async (event) => {
    event.preventDefault();
    let data = {
      email : this.state.email,
      senha : this.state.senha
    }
    try {
      let res = await authService.authenticate(data)
      authService.setLoggedUser(res.data)
      this.setState({redirectTo : "/admin"})
    } catch (error){
      alert("Erro ao efetuar o login")
      
    }
  }
  
  cadastro() {
    
    console.log("clicou");
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
                  <form onSubmit={this.sendLogin}>
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
                      <button type="submit" className="btn btn-primary">Entrar</button>
                      
                  </form>
                  <p></p>
                  <button className="btn btn-light">
                    <div class="linkCadastro">
                      <Link to="/CadastroUsuario" >  
                        Cadastro
                      </Link>
                    </div>
                  </button>
              </div>
              
          </div>
      </div>
    )
  }
}

export default Login;