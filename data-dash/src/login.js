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

class Login extends React.Component {
  render() {
    return (
      <>
        <Container className='h-100'>
          <Row className='h-100 justify-content-center align-items-center'>
            <Col className='12'>
              <Card style={{ width: "18rem" }}>
                <CardImg
                  alt="..."
                  src={require("./assets/img/theme/react.jpg")}
                  top
                />
                <CardBody>
                  <CardTitle>
                    <h3>Welcome</h3>{" "}
                  </CardTitle>
                  <CardText>Please Login In!</CardText>
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
                        <Button block color="success" size="lg" type="button">
                          Login
                        </Button>
                      </Col>
                      <Col>
                        <Button block color="secondary" size="lg" type="button">
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
      </>
    )
  }
}

export default Login
