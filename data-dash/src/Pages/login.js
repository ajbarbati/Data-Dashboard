import React from "react"

// reactstrap components
import {
  FormGroup,
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
                    <CardText>Please Login In!</CardText>
                    <form action="auth" method="POST">
                      <Row>
                        <Col>
                          <FormGroup>
                            <Input
                              block
                              id="Email"
                              name="username"
                              placeholder="Email"
                              type="text"
                              required
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <FormGroup>
                            <Input
                              id="Password"
                              name="password"
                              placeholder="Password"
                              type="password"
                              required
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                        {/* <NavLink exact to="/Dash" activeClassName="is-active"> */}
                            <Button
                              block
                              color="success"
                              size="lg"
                              type="submit"
                            >
                              Submit
                            </Button>
                          {/* </NavLink> */}
                        </Col>
                      </Row>
                    </form>
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
