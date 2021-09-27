import React, { Component } from 'react';
import { Container, Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class Contact extends Component {
    render() {
        return (
            <Container style={{ width: '800px' }}>
                <h2> Contacts us</h2>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email adress</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text>
                            We'll never share your email with anyone else
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button varian="primary">Submit</Button>
                </Form>
            </Container>
        );
    }
}

export default Contact;