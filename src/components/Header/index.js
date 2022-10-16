import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header(){
  return(
    <header>
      <Navbar bg="primary" variant="dark">
        <Container>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="/logo.jpg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{ }
              Indiees
            </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/teste">Teste</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link aling="center" href="/login" >Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header;