import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

export default function SP2() {
  return (
    <>
      <Header/>
      <Container>
        <Row>
          <Col md={12} style={{marginBottom: '2rem'}}>
            <h3>تعمیر سیستم تهویه</h3>
          </Col>
          <Col md={7}>
            <p>یک سیستم تهویه مطبوع که به درستی کار می کند ضروری است. سیستم خود را سالانه بازرسی کنید تا مشکلات را زود تشخیص دهید.
            </p>
            <p>
              علایم هشدار دهنده مشکل ac :
            </p>
            <ul>
              <li>صداهای غیر معمول</li>
              <li>بوهای غیر قابل توضیح</li>
              <li>دمای هوا ناسازگار</li>
            </ul>
            <p>
              در کلینیک تخصصی شاهین، تکنسین‌های خبره ما تجربه و تخصص لازم را برای آزمایش، نگهداری و تعمیر سیستم AC (سیستم تهویه هوا) شما دارند 
            </p>
          </Col>
          <Col md={5}>
            <img src='img/car-ac.jpg' alt="img" style={{maxWidth: '100%'}} />
          </Col>
        </Row>
      </Container>
      <Footer />

    </>
  )
}

