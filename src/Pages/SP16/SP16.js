import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

export default function SP16() {
  return (
    <>
      <Header/>
      <Container>
        <Row>
          <Col md={12} style={{marginBottom: '2rem'}}>
            <h3>سیستم مانیتورینگ فشار تایر</h3>
          </Col>
          <Col md={7}>
            <p>سیستم مانیتورینگ فشار تایر ، همانطور که از نامش پیداست از سنسورهایی برای نظارت بر فشار باد تایر ها استفاده می کند و در صورت کم شدن فشار به شما هشدار می دهد. . علاوه بر ملاحظات ایمنی، تایرهای کم باد شده سوخت را سریع‌تر به هدر می‌دهند لذا لازم است که به طور منظم فشار باد لاستیک ها را بررسی کنید .
            </p>
            <p>
            در کلینیک تخصصی شاهین، ما اینجا هستیم تا با تکنسین های خبره و تکنولوژی و تجهیزات ضروری، TPMS شما را سرویس کنیم.
            </p>
          </Col>
          <Col md={5}>
            <img src='img/tpms.jpg' alt="img" style={{maxWidth: '100%'}}/>
          </Col>
        </Row>
      </Container>
      <Footer />

    </>
  )
}
