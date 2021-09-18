import React from 'react';
import Reveal from 'react-reveal/Reveal'
import { Col, Container, Row } from 'reactstrap';
import NavSec from '../home/NavSec'
import portfolio from '../images/portfolio.jpg'
import shop from '../images/shop.jpg'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
import Footer from '../footer/Footer'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Rotate from 'react-reveal/Rotate';

const Portfolio = () => {
    return (
        <div className="portfolio">
            <Reveal effect="animNav" >
                <NavSec />
            </Reveal>
            <Container>
                <h2>Portfolio</h2>
                <p>Bu yerda siz men qilgan ishlardan na'munalar keltirilgan ko'rishingiz mumkin.</p>
                <Row className="row1">
                    <Col md="6">
                        <Rotate top left>
                            <LazyLoadImage src={portfolio} alt="my first website"
                                effect="blur" />
                        </Rotate>

                    </Col>
                    <Col md="6" className="title">
                        <h3>My First Portfolio</h3>
                        <p>Portfolio website mening birinchi ishim hisoblanadi.
                            Bu website responsivega moslangan va turli xil animatsilardan foydalanilgan.
                            Bu website ni men HTML,CSS,Bootstrap4 dan foydalnganman.</p>
                        <div className="links">
                            <a href="https://github.com/ToshevOsmon/first-website"
                                target="_blank"
                                rel="noreferrer"
                                className="source">Source <GitHubIcon /> </a>
                            <a href="https://devosportfolio.netlify.app"
                                target="_blank"
                                rel="noreferrer"
                                className="demo">Demo <LinkIcon /> </a>
                        </div>
                    </Col>
                </Row>
                <Row className="row2">
                    <Col md="6" className="title">
                        <h3>Shopping Website</h3>
                        <p>Shopping website reactda landing page qilingan.
                            Bu website responsive ga moslanmagan</p>
                        <div className="links">
                            <a href="https://github.com/ToshevOsmon/shopping-website"
                                target="_blank"
                                rel="noreferrer"
                                className="source">Source <GitHubIcon /> </a>
                            <a href="https://shoppinguz.netlify.app/"
                                target="_blank"
                                rel="noreferrer"
                                className="demo">Demo <LinkIcon /> </a>
                        </div>
                    </Col>

                    <Col md="6">
                        <Rotate top right>
                            <LazyLoadImage src={shop} alt="shopping web site"
                                effect="blur" />
                        </Rotate>

                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};


export default Portfolio;