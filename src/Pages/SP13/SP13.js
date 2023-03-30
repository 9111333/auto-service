import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

export default function SP13() {
  return (
    <>
      <Header/>
      <Container>
        <Row>
          <Col md={12} style={{marginBottom: '2rem'}}>
            <h3>مشکل فرمان هیدرولیک</h3>
          </Col>
          <Col md={7}>
            <p>بسیاری از رانندگان امروزی هرگز بدون فرمان هیدرولیک رانندگی نکرده اند و ممکن است از زحمات رانندگی بدون آن آگاه نباشند. لذا اکثر خودروها با روغن هیدرولیک کار می کنند. حفظ سطح مناسب این روغن هیدرولیک ضروری است .
            </p>
            <p>
              علائم هشدار دهنده مشکل فرمان هیدرولیک :
            </p>
            <ul>
              <li>سطح سیال پایین</li>
              <li>نشت مایع</li>
              <li>جیر جیر هنگام چرخاندن فرمان با سرعت پایین</li>
              <li>سختی فرمان</li>
            </ul>
            <p>
              هر زمان که با مشکل فرمان مواجه شدید، منتظر نمانید - وسیله نقلیه خود را برای تشخیص و تعمیر به کلینیک تخصصی شاهین بیاورید.
            </p>
          </Col>
          <Col md={5}>
            <img src='img/gal-img-4.jpg' alt="img" style={{maxWidth: '100%'}}/>
          </Col>
        </Row>
      </Container>
      <Footer />

    </>
  )
}