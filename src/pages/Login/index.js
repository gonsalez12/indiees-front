import React from 'react';

import './login.css';

class SignIn extends React.Component{


  render(){
    return (
      <div class="login-page">
        <div class="form">
          <form class="login-form" >
            <input type="text" 
                  placeholder="username"  
                  />
            <input type="password" 
                  placeholder="password" 
                  id="password" 
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
