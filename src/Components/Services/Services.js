import React from 'react'
import "./Services.css"
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import TypeWriter from '../TypeWriter/TypeWriter';
import ServiceBox from '../ServiceBox/ServiceBox';



export default function Services() {
    return (
        <>
            <Header/>
            <TypeWriter />
            <Container className='container'>
                <Row className='row'>
                    <Col md={6} className='col'>
                        <ServiceBox address='/servicesArticles1' hmsg='تعمیر و نگهداری کلی' src='/img/mile-service.jpg' />
                    </Col >
                    <Col md={6} className='col'>
                        <ServiceBox address='/servicesArticles2' hmsg='تعمیر سیستم تهویه' src='/img/car-ac.jpg' />
                    </Col >
                    <Col md={6} className='col'>
                        <ServiceBox address='/servicesArticles3' hmsg='تعمیر سیستم برق' src='/img/auto-electrical-repair.jpg' />
                    </Col >
                    <Col md={6} className='col'>
                        <ServiceBox address='/servicesArticles4' hmsg='جایگزینی باتری' src='/img/battery-replacement.jpg' />
                    </Col >
                    <Col md={6} className='col'>
                        <ServiceBox address='/servicesArticles5' hmsg='تعمیر سیستم ترمز' src='/img/gal-img-8.jpg' />
                    </Col >
                    <Col md={6} className='col'>
                        <ServiceBox address='/servicesArticles6' hmsg='تعمیر چراغ موتور' src='/img/enginelight.jpg' />
                    </Col >
                    <Col md={6} className='col'>
                        <ServiceBox address='/servicesArticles7' hmsg='تعمیر نشتی میعانات' src='/img/gal-img-2.jpg' />
                    </Col >
                    <Col md={6} className='col'>
                        <ServiceBox address='/servicesArticles8' hmsg='سرویس دیفرانسیل' src='/img/differential_services-1.jpg' />
                    </Col >
                    <Col md={6} className='col'>
                        <ServiceBox address='/servicesArticles9' hmsg='تعمیر سیستم انتشار' src='/img/stateinspection.jpg' />
                    </Col >
                    <Col md={6} className='col'>
                        <ServiceBox address='/servicesArticles10' hmsg='تعمیر اگزوز' src='/img/gal-img-3.jpg' />
                    </Col >
                    <Col md={6} className='col'>
                        <ServiceBox address='/servicesArticles11' hmsg='خدمات تزریق سوخت' src='/img/transmissionflush.jpg' />
                    </Col >
                    <Col md={6} className='col'>
                        <ServiceBox address='/servicesArticles12' hmsg='تعویض روغن' src='/img/gal-img-1.jpg' />
                    </Col >
                    <Col md={6} className='col'>
                        <ServiceBox address='/servicesArticles13' hmsg='تعمیر سیستم هیدرولیک' src='/img/gal-img-4.jpg' />
                    </Col >
                    <Col md={6} className='col'>
                        <ServiceBox address='/servicesArticles14' hmsg='تعمیر شمع ها' src='/img/sparkplug.jpg' />
                    </Col >
                    <Col md={6} className='col'>
                        <ServiceBox address='/servicesArticles15' hmsg='تعمیر کمک فنر ها' src='/img/strut-shocks-fix.jpg' />
                    </Col >
                    <Col md={6} className='col'>
                        <ServiceBox address='/servicesArticles16' hmsg='سرویس سیستم مانیتورینگ' src='/img/tpms.jpg' />
                    </Col >
                    <Col md={6} className='col'>
                        <ServiceBox address='/servicesArticles17' hmsg='تعمیر گیربکس' src='/img/gal-img-3.jpg' />
                    </Col >
                    <Col md={6} className='col'>
                        <ServiceBox address='/servicesArticles18' hmsg='تیون آپ' src='/img/tune-up.jpg' />
                    </Col >
                </Row>
            </Container>
            <Footer />
        </>
    )
}
