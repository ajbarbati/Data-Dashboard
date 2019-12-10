import React from "react"

// reactstrap components
import {
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  Container
} from "reactstrap"

import { NavLink} from "react-router-dom"
import Routing from "../Routes"

class Login extends React.Component {
  render() {
    return (
      <>
          <div>
            <Container className="justify-content-center align-items-center">
              <Row className="justify-content-center align-items-center">
                <Col className="justify-content-center align-items-center">
                  <Card style={{ width: "100%" }}>
                    <CardImg
                      alt="..."
                      src={require("../assets/img/theme/react.jpg")}
                      top
                    />
                    <CardBody>
                      <CardTitle>
                        <h3>Welcome</h3>{" "}
                      </CardTitle>
                      <CardText>Please enter email and password!</CardText>
                      <Form>
                        <Row>
                          <Col>
                            <FormGroup>
                              <Input
                                block
                                id="Email"
                                placeholder="Email"
                                type="email"
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <FormGroup>
                              <Input
                                id="Password"
                                placeholder="Password"
                                type="password"
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Button
                              block
                              color="secondary"
                              size="lg"
                              type="button"
                            >
                              Register
                            </Button>
                          </Col>
                        </Row>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
      </>
    )
  }
}

export default Login
