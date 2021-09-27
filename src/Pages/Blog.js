import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import {Row, Col, Media, ListGroup} from 'react-bootstrap';
import MediaBody from 'react-bootstrap/Media'
import { Card } from 'react-bootstrap';



class Blog extends Component {
    render() {
        return (
            <Container className="blog">

                        <div className="menu-blog">
                            <h5>Categories</h5>
                            <Card>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Java</ListGroup.Item>
                                    <ListGroup.Item>PHP</ListGroup.Item>
                                    <ListGroup.Item>C++</ListGroup.Item>
                                    <ListGroup.Item>Python</ListGroup.Item>
                                    <ListGroup.Item>JavaScript</ListGroup.Item>
                                    <ListGroup.Item>HTML/CSS</ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </div>
                   
                <Row>
                    <Col md="9">
                        <Media className="blog-message">
                            <img 
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                                alt="img"
                            />
                            <MediaBody>
                                <h5>Blog post</h5>
                                <p>
                                    For the past four years this survey has helped us do just that, by collecting data from over 20,000 developers to identify current and upcoming trends.
                                </p>

                                <p>
                                This year again, take the survey to help us find out which libraries developers want to learn next, which have the best satisfaction ratings,
                                and much more.
                                </p>
                            </MediaBody>
                        </Media>
                    </Col>
                
                    <Col md="9">
                        <Media className="blog-message">
                            <img 
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                                alt="img"
                            />
                            <MediaBody>
                                <h5>Blog post</h5>
                                <p>
                                    For the past four years this survey has helped us do just that, by collecting data from over 20,000 developers to identify
                                    current and upcoming trends.
                                </p>

                                <p>
                                This year again, take the survey to help us find out which libraries developers want to learn next, which have the best satisfaction ratings,
                                and much more.
                                </p>
                            </MediaBody>
                        </Media>
                    </Col>
                    <Col md="9">
                        <Media className="blog-message">
                            <img 
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                                alt="img"
                            />
                            <MediaBody>
                                <h5>Blog post</h5>
                                <p>
                                    For the past four years this survey has helped us do just that, by collecting data from over 20,000 developers to identify
                                    current and upcoming trends.
                                </p>

                                <p>
                                This year again, take the survey to help us find out which libraries developers want to learn next, which have the best satisfaction ratings,
                                and much more.
                                </p>
                            </MediaBody>
                        </Media>
                    </Col>
                    <Col md="9">
                        <Media className="blog-message">
                            <img 
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                                alt="img"
                            />
                            <MediaBody>
                                <h5>Blog post</h5>
                                <p>
                                    For the past four years this survey has helped us do just that, by collecting data from over 20,000 developers to identifycurrent and upcoming trends.
                                </p>

                                <p>
                                This year again, take the survey to help us find out which libraries developers want to learn next, which have the best satisfaction ratings,
                                and much more.
                                </p>
                            </MediaBody>
                        </Media>
                    </Col>
                    <Col md="9">
                        <Media className="blog-message">
                            <img 
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                                alt="img"
                            />
                            <MediaBody>
                                <h5>Blog post</h5>
                                <p>
                                    For the past four years this survey has helped us do just that, by collecting data from over 20,000 developers to identify
                                    current and upcoming trends.
                                </p>

                                <p>
                                This year again, take the survey to help us find out which libraries developers want to learn next, which have the best satisfaction ratings,
                                and much more.
                                </p>
                            </MediaBody>
                        </Media>
                    </Col>
                    
                </Row>
            </Container>
        );
    }
}

export default Blog;