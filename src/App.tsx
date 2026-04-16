import { Container, Row, Col } from 'react-bootstrap';
import RegisterUser from './components/RegisterUser';
import UserList from './components/UserList';

function App() {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">User Registration App</h2>

      <Row>
        <Col md={5}>
          <RegisterUser />
        </Col>

        <Col md={7}>
          <UserList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;