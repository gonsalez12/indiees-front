import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import React  from 'react';
import authService from '../../services/auth ';


class Header extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      userData : null
    }
  }

  async loadUser(){
    let userDate = authService.getLoggedUser()
    this.setState({userData : userDate})
  }

  componentDidMount(){
    this.loadUser()
  }

  
  logout(){
    this.setState({userData : null})
    localStorage.clear()

  }
  

  render(){
    let login;

    

    if(this.state.userData == null){
      login = <Nav.Link aling="center" href="/login" >Login</Nav.Link>;
    }else{
      login = <Nav.Link aling="center" onClick={()=> this.logout()}>Logout</Nav.Link>;
      
    }

    return(
      <header>
        <Navbar bg="primary" variant="dark">
          <Container>
              <Navbar.Brand href="/">
                <img
                  alt=""
                  src="/logo.jpg"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />
                Indiees
              </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/admin">Admin</Nav.Link>
            </Nav>
            <Nav>
              {login}
            </Nav>
          </Container>
        </Navbar>
      </header>
    )
  }
}

export default Header;