import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import firstslide from '../img/FirstSlide.jpg';
import twoslide from '../img/TwoSlide.jpg';
import treeslide from '../img/TreeSlide.jpg';

class Slider extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={firstslide}
                        alt="first slide"
                        height="919"
                    />
                    <Carousel.Caption>
                        <h3>Proggramming image</h3>
                        <p>Any fool can write code that a computer can understand. Good programmers write code that humans can understand</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={twoslide}
                        alt="two slide"
                        height="919"
                    />
                    <Carousel.Caption>
                        <h3>Proggramming image</h3>
                        <p>Java is to JavaScript what car is to Carpet</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={treeslide}
                        alt="tree slide"
                        height="919"
                    />
                    <Carousel.Caption>
                        <h3>Proggramming image</h3>
                        <p>First, solve the problem. Then, write the code</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default Slider;