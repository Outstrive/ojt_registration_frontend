import { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import axios from 'axios';

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
    <Card>
      <Card.Body>
        <h4>Register User</h4>
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

          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default RegisterUser;