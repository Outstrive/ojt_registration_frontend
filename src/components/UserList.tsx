import { useEffect, useState } from 'react';
import { Table, Card, Button } from 'react-bootstrap';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await axios.get('http://127.0.0.1:3000/api/users');
      setUsers(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Card>
      <Card.Body>
        <div className="d-flex justify-content-between mb-3">
          <h4>Users List</h4>
          <Button onClick={fetchUsers}>Refresh</Button>
        </div>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Created On</th>
              <th>Updated On</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: any) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.mobile}</td>
                <td>{user.createdAt}</td>
                <td>{user.updatedAt}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default UserList;