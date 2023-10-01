import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

export default function SP7() {
  return (
    <>
      <Header/>
      <Container>
        <Row>
          <Col md={12} style={{marginBottom: '2rem'}}>
            <h3>نشت مایع خنک کننده</h3>
          </Col>
          <Col md={7}>
            <p>خنک‌کننده یا همان طور که گاهی اوقات به آن ضد یخ می‌گویند، از موتور شما در برابر گرم شدن بیش از حد در تابستان‌های گرم محافظت می‌کند و از یخ زدن آب در سیستم خنک‌کننده شما در هنگام سردی جلوگیری می‌کند. همچنین از ایجاد زنگ زدگی در رادیاتور و موتور شما جلوگیری می کند. مهم است که چکاپ مایع خنک کننده را در روتین نگهداری منظم خود بگنجانید.
            </p>
            <p>
            علائم هشدار دهنده نشت مایع خنک کننده :
            </p>
            <ul>
              <li>بوی شیرین</li>
              <li>نشت مایعات سبز، صورتی، آبی یا نارنجی</li>
              <li>دمای کارکرد خودرو بالاتر از حد معمول</li>
            </ul>
            <p>
            سیستم خنک کننده برای وسیله نقلیه شما بسیار مهم است. بی توجهی به این مسائل منجر به آسیب جدی به موتور شما و در نتیجه تعمیرات پرهزینه می شود. قبل از بروز هر گونه مشکل، وسایل نقلیه خود را برای بررسی مایع خنک کننده به کلینیک تخصصی شاهین بیاورید.
            </p>
          </Col>
          <Col md={5}>
            <img src='img/gal-img-2.jpg' alt="img" style={{maxWidth: '100%'}}/>
          </Col>
        </Row>
      </Container>
      <Footer />

    </>
  )
}
