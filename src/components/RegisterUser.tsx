import { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import Accordion from 'react-bootstrap/Accordion';

const RegisterUser = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: ''
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("Chekckingthe data before sending to backend", formData)
    try {
      await axios.post('http://127.0.0.1:3000/api/users', formData);
      alert('User registered successfully');

      setFormData({ name: '', email: '', mobile: '' });
    } catch (error) {
      console.error(error);
      alert('Error registering user');
    }
  };

  return (
    <div>
    <Card>
      <Card.Body>
        <h4>Register User Page</h4>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Mobile</Form.Label>
            <Form.Control
              type="number"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button variant="success" type="submit">
            Register
          </Button>
        </Form>
      </Card.Body>


      <br/>

      <hr/>


       <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Heading 1</Accordion.Header>
        <Accordion.Body>
             Heading 1 content
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Heading 2</Accordion.Header>
        <Accordion.Body>
           Heading 2 Content
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>


    </Card>



     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>


    </div>
  );
};

export default RegisterUser;