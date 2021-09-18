import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { YMaps, Map, Placemark, FullscreenControl, TypeSelector, ZoomControl } from 'react-yandex-maps';
import Fade from 'react-reveal/Fade';

const Contacts = () => {
    return (
        <div className="contact">
            <Container>
                <Row>

                    <Col md="6">
                        <h3>Contacts</h3>
                        <p>This is my contacts and address</p>
                        <div>
                            <Fade left cascade>
                                <ul>
                                    <li> Address: <span>Tashkent Uchtepa 24</span></li>
                                    <li> Email: <a href="mailto:toshev.osmon@gmail.com" >toshev.osmon@gmail.com</a></li>
                                    <li> Tel: <a href="tel:+998946530255">+998946530255</a></li>
                                    <li>Telegram: <a href="https://t.me/ToshevOsmon">@ToshevOsmon</a></li>
                                </ul>
                            </Fade>
                        </div>
                    </Col>
                    <Col md="6" className="maps">
                        <YMaps className="yandex">
                            <Map className="map"
                                defaultState={{
                                    center: [41.279392, 69.174896],
                                    zoom: 15,
                                    controls: []
                                }} >
                                <Placemark geometry={[41.279392, 69.174896]} />
                                <FullscreenControl />
                                <TypeSelector options={{ float: 'right' }} />
                                <ZoomControl options={{ float: 'right' }} />
                            </Map>

                        </YMaps>
                    </Col>
                </Row>
            </Container>


        </div>
    );
};



export default Contacts;