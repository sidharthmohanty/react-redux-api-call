import React from "react";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";

const Login = () => {
  return (
    <Container>
      <Form>
        <FormGroup>
          <Label for="exampleEmail" hidden>
            Email
          </Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Email"
          />
        </FormGroup>{" "}
        <FormGroup>
          <Label for="examplePassword" hidden>
            Password
          </Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="Password"
          />
        </FormGroup>{" "}
        <Button>Submit</Button>
      </Form>
    </Container>
  );
};

export default Login;
