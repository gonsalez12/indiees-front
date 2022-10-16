import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'

import './login.css';

function Login(){
  

  return(
    <div class="borda" >
      <Container>
        <Row  className="justify-content-md-center">
          <div className='form'>
          <Col >
              <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Digite o email" />
              </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="senha" placeholder="Senha" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
              </Form.Group>
              <Button variant="primary" type="submit">Logar</Button>
            </Form>
          </Col>
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default Login;