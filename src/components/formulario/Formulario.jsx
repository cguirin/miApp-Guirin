import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './Formulario.css'; 

const FormularioRegistro = () => {
  return (
    <div className="contenedor"> 
      <Form>
        <Form.Group className="mb-3" controlId="formNombre">
          <Form.Label className="etiquetas">Nombre</Form.Label> 
          <Form.Control type="text" placeholder="Ingrese su nombre" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formApellido">
          <Form.Label className="etiquetas">Apellido</Form.Label>
          <Form.Control type="text" placeholder="Ingrese su apellido" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label className="etiquetas">Email</Form.Label>
          <Form.Control type="email" placeholder="Ingrese su email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label className="etiquetas">Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Ingrese su contraseña" />
        </Form.Group>

        <Button className="botones" variant="primary" type="submit">
          Ingresar
        </Button>
        <Button className="botones" variant="secondary" type="button">
          Registrarse
        </Button>
      </Form>
    </div>
  );
};

export default FormularioRegistro;

