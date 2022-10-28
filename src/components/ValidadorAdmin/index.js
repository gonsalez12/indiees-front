import React  from 'react';
import {Navigate} from 'react-router-dom';
import authService from '../../services/auth ';

class ValidadorAdmin extends React.Component{

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
      return <Navigate to={this.state.redirectTo} replace={true} />
    }
    return(
      <div>
      </div>
    )
  }
}
  
  export default ValidadorAdmin;