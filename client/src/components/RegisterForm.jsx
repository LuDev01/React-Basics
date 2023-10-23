import { useState } from "react"
import Form from 'react-bootstrap/Form';

export const RegisterForm = () => {
  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const { firstName, lastName, email, password } = inputs

  const handleInputs = (e) => {
    setInputs({...inputs, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      firstName,
      lastName,
      email,
      password
    }

    fetch('http://localhost:5000/register',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({...user})
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))

    setInputs({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    })
    alert('Usuario creado')
  }

  return (
    <>
      <Form className="container" onSubmit={(e) => handleSubmit(e)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombres</Form.Label>
        <Form.Control type="text" placeholder="Benito Camelo" name="firstName" onChange={(e) => handleInputs(e)} value={firstName} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Apellidos</Form.Label>
        <Form.Control type="text" placeholder="Zapata Velez" name="lastName" onChange={(e) => handleInputs(e)} value={lastName} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Correo</Form.Label>
        <Form.Control type="email" placeholder="Pabenito@corre.com" name="email" onChange={(e) => handleInputs(e)} value={email} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" onChange={(e) => handleInputs(e)} value={password} />
      </Form.Group>
      <button type="submit" className="btn bg-primary">
        Submit
      </button>
    </Form>
    </>
  )
}
