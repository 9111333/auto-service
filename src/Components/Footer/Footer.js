import React from 'react'
import './Footer.css'
import { Container, Row, Col } from 'react-bootstrap'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'
import { BsPersonWorkspace } from 'react-icons/bs'

export default function Footer() {
    return (
        <>
            <div className='footer-wrapper'>
                <Container className='container'>
                    <Row className='row'>
                        <Col className='text-center'><span className='footer-span'><FaMapMarkerAlt />   آدرس : تهران، بزرگراه حکیم غرب، بعد از بزرگراه چمران </span></Col>
                        <Col className='text-center'><span className='footer-span'><FiPhoneCall />    شماره تماس : 021-12345678</span></Col>
                        <Col className='text-center'><span className='footer-span'><HiOutlineMail />    ایمیل : www.email.com</span></Col>
                        <Col className='text-center'><span className='footer-span'><BsPersonWorkspace />    ساعات کاری : همه روزه از 7 تا 19</span></Col>
                    </Row>
                </Container>
            </div>


        </>
    )
}
