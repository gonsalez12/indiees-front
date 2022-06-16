import React, { Component } from "react";

import './login.css';

import api from "../../services/api";
import { login } from "../../services/auth";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  handleSignIn = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
    } else {
      try {

        const response = await api.post("usuarios/autenticar", { 
          "email" : email, 
          "senha" : password 
        });
        login(response.data.token);
      
      } catch (err) {
        console.log();  
        this.setState({
          error:
              err.response.data
        });
      }
    }
  };


  render(){
    return (
      <div class="login-page">
        <div class="form">
          <form class="login-form" onSubmit={this.handleSignIn}>
          {this.state.error && <p>{this.state.error}</p>}
            <input type="text" 
                  placeholder="username"  
                  onChange={e => this.setState({ email: e.target.value })}
                  />
            <input type="password" 
                  placeholder="password" 
                  id="password" 
                  onChange={e => this.setState({ password: e.target.value })}
                  />
            <button type="submit">login</button>
            <p class="message"> <a href="#">Criar conta</a></p>
          </form>
        </div>
      </div>
    )
  }

}

export default SignIn;
