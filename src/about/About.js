import React from 'react';
import Reveal from 'react-reveal/Reveal'
import { Col, Container, Row } from 'reactstrap';
import Contacts from '../contact/Contacts';
import Footer from '../footer/Footer'
import NavSec from '../home/NavSec'
import rasm from '../images/personal.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const About = () => {
    return (
        <div className="about">
            <Reveal effect="animNav">
                <NavSec />
            </Reveal>
            <h2>About me</h2>
            <p>O'zim haqimda qisqacha ma'lumot</p>
            <Container>
                <Row>
                    <Col md="6">
                        <LazyLoadImage src={rasm} alt="personal image"
                            effect="blur" />
                    </Col>
                    <Col md="6" className="info">
                        <h3>Information about me</h3>
                        <p>Salom.Men Toshev Osmon 1996-yilda Qashqdaryo viloyati Sharhisabz tumanida tug'ilganman.
                            2017-yilda Toshkent Axborot Texnalogiyalari Unversititi
                            Kompyuter injiniringi yo'nalishiga o'qishga kirdim.
                            4 yillik o'qishim davomida turli sohalardagi bilim va ko'nikmalarga ega bo'lib bordim.
                            Tarmoq administratorlik va android mobile ilovalar ishlab chiqish bo'yicha kursga bordim.
                            Web ilovalar ishlab chiqish bo'yicha mustaqil
                            raravishda frontend developerlikni o'rganib kelmoqdaman.
                            <p> Maqsad bitta <strong>"Beshikdan qabirgacha ilim izlash"</strong> </p>
                        </p>
                    </Col>
                </Row>

            </Container>
            <Contacts />
            <Footer />
        </div>
    );
};


export default About;