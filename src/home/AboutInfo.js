import React from 'react';
import { Link } from 'react-router-dom';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TelegramIcon from '@material-ui/icons/Telegram';
import GitHubIcon from '@material-ui/icons/GitHub';
import rasm from '../images/user.png'
import { Col, Container, Row } from 'reactstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';


const AboutInfo = () => {

    return (
        <div className="aboutInfo">
            <Container>
                <Row>
                    <Col md="6">
                        <div className="slide1">

                            <h1>Hi, I'm Osmon</h1>
                            <p>Salom mening ismim Osmon.Men dasturiy taminot ishlab chiqishga qiziqaman.
                                Web ilovalar va mobile ilovalar ishlab chiqish bilan shug'ullanaman.
                                Bu website to'liq react.js qilingan.
                            </p>
                            <div className="homeButtons">
                                <Link to="/about" className="linkAbout">About me</Link>
                                <Link to="/portfolio" className="linkPortfilo">Portfolio</Link>
                            </div>
                            <div className="icons">
                                <a
                                    href="https://www.youtube.com/channel/UCh34VxhyPwv1MGqm0LolYPQ/"
                                    target="_blank"
                                    className="icon">
                                    <YouTubeIcon />
                                </a>
                                <a
                                    href="https://t.me/ToshevOsmon/"
                                    target="_blank" className="icon">
                                    <TelegramIcon />
                                </a>
                                <a
                                    href="https://github.com/ToshevOsmon/"
                                    target="_blank"
                                    className="icon">
                                    <GitHubIcon />
                                </a>

                            </div>
                        </div>

                    </Col>
                    <Col md="6">

                        <div className="slide2">
                            <LazyLoadImage
                                src={rasm}
                                alt="Personal image"
                                effect="blur"
                                delayTime="1500"
                            />

                        </div>

                    </Col>
                </Row>
            </Container>

        </div>
    );
};


export default AboutInfo;