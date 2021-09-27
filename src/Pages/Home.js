import React, { Component } from 'react';
import { CardGroup, Container } from 'react-bootstrap';
import Slider from '../Commponents/Slider';
import Card from 'react-bootstrap/Card'
import CardBody from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap';

class Home extends Component {
    render() {
        return (
            <>
                <Slider />
                <Container>
                    <h2 className="text-center m-4">About us</h2>
                        <CardGroup>
                        <Card style={{ margin: '10px'}}>
                            <Card.Img 
                            variant="top"
                            src="https://wallpaperaccess.com/full/3949076.jpg"
                            height={300}
                            />
                            <CardBody>
                                <Card.Title>Developer</Card.Title>
                                <Card.Text>
                                    Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                                </Card.Text>
                            </CardBody>
                            <Button variant="primary">About</Button>
                        </Card>

                        <Card style={{ margin: '10px' }}>
                            <Card.Img 
                            variant="top"
                            src="https://bestprogrammer.ru/wp-content/uploads/2021/01/Luchshie-proekty-JavaScript-dlya-nachinayushhih.jpg"
                            height={300}
                            />

                            <CardBody>
                                <Card.Title>Developer</Card.Title>
                                <Card.Text>
                                    Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                                </Card.Text>
                            </CardBody> 
                            <Button variant="primary">About</Button>
                        </Card>

                        <Card style={{ margin: '10px' }}>
                            <Card.Img 
                            variant="top"
                            src="https://i0.wp.com/apptractor.ru/wp-content/uploads/2017/08/HTML5.png?fit=740%2C522&ssl=1"
                            height={300}
                            />

                            <CardBody>
                                <Card.Title>Developer</Card.Title>
                                <Card.Text>
                                    Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                                </Card.Text>
                            </CardBody>
                            <Button variant="primary">About</Button>
                        </Card>
                        
                        </CardGroup>
                </Container>
            </>
        );
    }
}

export default Home;