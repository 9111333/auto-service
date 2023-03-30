import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

export default function SP11() {
  return (
    <>
      <Header/>
      <Container>
        <Row>
          <Col md={12} style={{marginBottom: '2rem'}}>
            <h3>خدمات تزریق سوخت</h3>
          </Col>
          <Col md={7}>
            <p>خدمات تزریق سوخت، رسوبات کربن را از انژکتور سوخت شما پاک می کند و سیستم سوخت را شستشو می دهد. این رسوبات تنها با یک بازرسی طولانی و پر زحمت قابل مشاهده هستند. به همین دلیل، توصیه می‌شود که توصیه‌های مربوط به مسافت پیموده شده و یا سن را برای سرویس تزریق سوخت دنبال کنید، مگر اینکه علائم خاصی را تجربه کنید .
            </p>
            <p>
            علائم مورد نیاز خدمات تزریق سوخت :
            </p>
            <ul>
              <li>دشواری استارت</li>
              <li>مشکل دریچه گاز</li>
              <li>ضربه داشتن موتور یا پینگ</li>
              <li>عملکرد کلی ضعیف</li>
              <li>کاهش راندمان سوخت</li>
              <li>لوله اگزوز آویزان</li>
            </ul>
            <p>
            شما واقعاً متوجه تفاوتی خواهید شد که یک سرویس تزریق سوخت ارائه می دهد. کلینیک تخخصی شاهین دارای تجهیزات و تخصص است و برای انجام درست کار وقت صرف می کند.
            </p>
          </Col>
          <Col md={5}>
            <img src='img/transmissionflush.jpg' alt="img" style={{maxWidth: '100%'}}/>
          </Col>
        </Row>
      </Container>
      <Footer />

    </>
  )
}
