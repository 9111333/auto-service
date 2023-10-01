import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

export default function SP3() {
  return (
    <>
      <Header/>
      <Container>
        <Row>
          <Col md={12} style={{marginBottom: '2rem'}}>
            <h3>تعمیر برق خودرو</h3>
          </Col>
          <Col md={7}>
            <p>مشکلات الکتریکی نیاز به تشخیص و تعمیر متخصص دارد. یک سیستم الکتریکی جامد برای ایمنی و عملکرد بهینه در خودروهای امروزی مهم است.
            </p>
            <p>
            علائم هشدار دهنده مشکل برق :
            </p>
            <ul>
              <li>موتور روشن نمی شود</li>
              <li>باتری نشتی یا آسیب دیده است</li>
              <li>چراغ هایی که کم نور می شوند</li>
              <li>فیوزهای سوخته</li>
              <li>بوی سوختن پلاستیک یا عایق الکتریکی</li>
            </ul>
            <p>
            اگر هر یک از موارد بالا را تجربه کردید، لطفا منتظر نمانید. خودروی خود را به کلینیک تخصصی شاهین بیاورید تا مشکل را شناسایی کرده و بهترین راه حل تعمیر را دریافت کنید.
            </p>
          </Col>
          <Col md={5}>
            <img src='img/auto-electrical-repair.jpg' alt="img" style={{maxWidth: '100%'}}/>
          </Col>
        </Row>
      </Container>
      <Footer />

    </>
  )
}
