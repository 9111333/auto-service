import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

export default function SP4() {
  return (
    <>
      <Header/>
      <Container>
        <Row>
          <Col md={12} style={{marginBottom: '2rem'}}>
            <h3>جایگزینی باتری</h3>
          </Col>
          <Col md={7}>
            <p>وسیله نقلیه شما به یک باتری بادوام و قابل اعتماد نیاز دارد تا نیروی مورد نیاز خود را تامین و عملکرد الکترونیکی مطمین را فراهم کند. کلینیک تخصصی شاهین مکانی است که باید برای تست، سرویس و تعویض باتری خودروی شما با کمترین هزینه.
            </p>
            <p>
              علائم هشدار دهنده مشکل باتری :
            </p>
            <ul>
              <li>مشکل در استارت خوردن</li>
              <li>ضعف چراغ ها</li>
              <li>نشتی باتری</li>
            </ul>
            <p>
              در صورت لزوم می‌توانید به تکنسین‌های ما برای بازرسی، نگهداری و تعویض باتری خود اعتماد کنید.
            </p>
          </Col>
          <Col md={5}>
            <img src='img/battery-replacement.jpg' alt="img" style={{maxWidth: '100%'}} />
          </Col>
        </Row>
      </Container>
      <Footer />

    </>
  )
}
