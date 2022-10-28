import React  from 'react';
import ValidadorAdmin from '../../components/ValidadorAdmin';


class Admin extends React.Component{

  constructor(props){
    super(props)
    this.state = {
    }
  }


  render(){
    
    return(
      
      <div className="container">
        <ValidadorAdmin/>
          Acesso somente Administrativo
      </div>
    )
  }
}

export default Admin;