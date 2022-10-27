import React  from 'react';
import {Navigate} from 'react-router-dom';
import authService from '../../services/auth ';


class Admin extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      redirectTo: null
    }
  }

  async componentDidMount(){
    let loggedUser = await authService.getLoggedUser()
    if(!loggedUser){
      this.setState({redirectTo : "/login"})
      
    }
  }

  render(){
    if(this.state.redirectTo){
      return <Navigate to={this.state.redirectTo} replace />
    }
    return(
      
      <div className="container">
          Acesso somente Administrativo
      </div>
    )
  }
}

export default Admin;