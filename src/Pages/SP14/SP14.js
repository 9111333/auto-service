import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

export default function SP14() {
  return (
    <>
      <Header/>
      <Container>
        <Row>
          <Col md={12} style={{marginBottom: '2rem'}}>
            <h3>شمع ها</h3>
          </Col>
          <Col md={7}>
            <p>سال‌هاست که خودروها برای احتراق سوخت به شمع‌ها متکی بوده‌اند. برخی از خودروهای مدرن دارای سیستم جرقه زنی پیشرفته هستند که ظاهراً تعویض شمع را غیرقابل توجیه می کند. اکثر وسایل نقلیه باید هر 30000 تا 50000 مایل شمع های خود را تعویض کنند و شرایطی وجود دارد که شمع ها از کار می افتند .
            </p>
            <p>
            علائم هشدار دهنده خرابی شمع :
            </p>
            <ul>
              <li>شتاب آهسته</li>
              <li>مصرف سوخت ضعیف</li>
              <li>خاموش شدن موتور</li>
              <li>دشواری در استارت</li>
            </ul>
            <p>
            اگر با هر یک از این مشکلات سر و کار دارید، وسیله نقلیه خود را در اسرع وقت به کلینیک تخصصی شاهین بیاورید و به مکانیک های دارای گواهی ASE ما اجازه دهید خودروی شما را در بهترین حالت کارکرد قرار دهند.
            </p>
          </Col>
          <Col md={5}>
            <img src='img/sparkplug.jpg' alt="img" style={{maxWidth: '100%'}}/>
          </Col>
        </Row>
      </Container>
      <Footer />

    </>
  )
}