import Nav from 'react-bootstrap/Nav';



function MenuAdmin(){
  

    return(
      <div>
        <Nav className="me-auto">
            <Nav.Link href="/admin">Admin</Nav.Link>
        </Nav>
      </div>
    )
  }
  
  export default MenuAdmin;