import React from 'react'
import './Contact.css'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Contact() {
    return (
        <>
            <Header/>
            <Container>
                <Row>
                    <Col className='text-center'>
                        <div className='contact-header'><span><h4>با ما در ارتباط باشید</h4></span></div>

                        <div class="formwrapper">
                            <form class="form">
                                <span>نام</span>
                                <span>نام خانوادگی</span>
                                <input type="text" id="" />
                                <input type="text" id="" />
                                <span>تلفن</span>
                                <span>ایمیل</span>
                                <input type="tel" id="" />
                                <input type="email" id="" />
                                <span>متن درخواست</span>
                                <textarea class="area"></textarea>
                            </form>
                        </div>

                        <div class="second-flex">
                            <button type="submit">ارسال</button>
                        </div>

                    </Col>


                </Row>
            </Container>
            <Footer/>
        </>
    )
}
