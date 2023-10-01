import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

export default function SP5() {
  return (
    <>
      <Header/>
      <Container>
        <Row>
          <Col md={12} style={{marginBottom: '2rem'}}>
            <h3>سیستم ترمز</h3>
          </Col>
          <Col md={7}>
            <p>ما انتظار داریم که ترمزها در هنگام استفاده از "در یک آن" عمل کنند چرا که ایمنی ما و دیگران به آن بستگی دارد. بازرسی ترمز بخش مهمی از تعمیر و نگهداری خودرو است و مکانیک های مجاز ما کل سیستم را بازرسی می کنند و ارزیابی جامعی را به شما ارائه می دهند .
            </p>
            <p>
            علائم هشدار دهنده مشکل سیستم ترمز :
            </p>
            <ul>
              <li>صداهای غیر معمول</li>
              <li>گرد و غبار ترمز چرخ ها را فرا گرفته باشد</li>
              <li>هرگونه "احساس" غیرمعمول (کشیدن، تپش، لرزش) هنگام ترمز زدن</li>
            </ul>
            <p>
            لطفاً اگر از نگران عملکرد مناسب ترمزهای خود هستید، معطل نکنید. وسیله نقلیه خود را به کلینیک تخصصی شاهین بیاورید
            </p>
          </Col>
          <Col md={5}>
            <img src='img/gal-img-8.jpg' alt="img" style={{maxWidth: '100%'}} />
          </Col>
        </Row>
      </Container>
      <Footer />

    </>
  )
}