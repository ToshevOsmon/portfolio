import React from 'react';
import Reveal from 'react-reveal/Reveal'
import { Col, Container, Row } from 'reactstrap';
import NavSec from '../home/NavSec'
import web from '../images/web.jpg'
import android from '../images/android.jpg'
import network from '../images/network.jpg'
import Footer from '../footer/Footer'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Fade from 'react-reveal/Fade';

const Setap = () => {
    return (
        <div className="setap">
            <Reveal effect="animNav" >
                <NavSec />
            </Reveal>
            <h2>Skills</h2>
            <p>Turli yo'nalishlarda bilim ko'nikmalarim</p>
            <Container>
                <Row>
                    <Col md="4">
                        <Fade left>
                            <LazyLoadImage effect="blur" src={web} alt="image web" />
                        </Fade>

                    </Col>
                    <Col md="4">
                        <Fade top>
                            <LazyLoadImage effect="blur" src={android} alt="image android" />
                        </Fade>
                    </Col>
                    <Col md="4">
                        <Fade right>
                            <LazyLoadImage effect="blur" src={network} alt="image network" />
                        </Fade>
                    </Col>
                </Row>
                <Row>
                    <Col md="4" >
                        <ul className="front">
                            <p>Frontend Developer</p>
                            <li>HTML5
                                <div><progress max="100" value="85">85%</progress></div>
                            </li>
                            <li>CSS3
                                <div><progress max="100" value="70">70%</progress></div>
                            </li>
                            <li>SCSS
                                <div><progress max="100" value="60">60%</progress></div>
                            </li>
                            <li>Bootstrap4
                                <div><progress max="100" value="60">60%</progress></div>
                            </li>
                            <li>JavaScript
                                <div><progress max="100" value="70">70%</progress></div>
                            </li>
                            <li>jQuery
                                <div><progress max="100" value="50">50%</progress></div>
                            </li>
                            <li>React.js
                                <div><progress max="100" value="65">65%</progress></div>
                            </li>
                        </ul>
                    </Col>
                    <Col md="4" >
                        <ul className="android">
                            <p>Android Developer</p>
                            <li>Java,OOP
                                <div><progress max="100" value="75">75%</progress></div>
                            </li>
                            <li>Kotlin
                                <div><progress max="100" value="60">60%</progress></div>
                            </li>
                            <li>Android SDK
                                <div><progress max="100" value="80">80%</progress></div>
                            </li>
                            <li>SqLite
                                <div><progress max="100" value="65">65%</progress></div>
                            </li>
                            <li>Room
                                <div><progress max="100" value="80">80%</progress></div>
                            </li>

                            <li>Architecture Components
                                <div><progress max="100" value="65">70%</progress></div>
                            </li>
                            <li>Fragments,Lifecycle
                                <div><progress max="100" value="60">60%</progress></div>
                            </li>


                        </ul>
                    </Col>
                    <Col md="4">
                        <ul className="set">
                            <p>Network Administation</p>

                            <li>DHCP/IP
                                <div><progress max="100" value="80">80%</progress></div>
                            </li>
                            <li>Switch
                                <div><progress max="100" value="70">70%</progress></div>
                            </li>
                            <li>Router/Wifi router
                                <div><progress max="100" value="65">65%</progress></div>
                            </li>
                            <li>OSPF/EIGRP/BGP
                                <div><progress max="100" value="60">60%</progress></div>
                            </li>
                            <li>NAT/DNS/DHCP
                                <div><progress max="100" value="75">75%</progress></div>
                            </li>
                            <li>SSH/Telnet
                                <div><progress max="100" value="90">90%</progress></div>
                            </li>
                            <li>Sisco ASA/DMZ/VPN
                                <div><progress max="100" value="50">50%</progress></div>
                            </li>

                        </ul>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};


export default Setap;