import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

export default function SP9() {
  return (
    <>
      <Header/>
      <Container>
        <Row>
          <Col md={12} style={{marginBottom: '2rem'}}>
            <h3>تعمیر سیستم انتشار</h3>
          </Col>
          <Col md={7}>
            <p>در گذشته، وسایل نقلیه مقادیر زیادی گازهای مضر منتشر می کردند. امروزه، سازندگان خودرو طبق قانون ملزم به نصب تعداد بی‌شماری از سیستم‌های پیچیده و کنترل‌شده توسط کامپیوتر برای کنترل خروجی آلایندگی خودرو شما هستند. مالکان همچنین موظفند این سیستم ها را در شرایط کاری مناسب نگهداری کنند .
            </p>
            <p>
            علائم هشدار دهنده مشکلات سیستم انتشار :
            </p>
            <ul>
              <li>اگزوز بوی سوخت، تخم مرغ فاسد یا شیرین می دهد</li>
              <li>اگزوز دود قابل مشاهده (سیاه، آبی، خاکستری) داشته باشد</li>
              <li>موتور نمی تواند در دور آرام بچرخد یا برای روشن شدن مشکل دارد</li>
            </ul>
            <p>
            مانند هر سیستم پیچیده، آموزش و تخصص برای تشخیص و تعمیر سیستم های انتشار مورد نیاز است. اجازه دهید کارکنان گواهی شده کلینیک تخصصی شاهین به شما کمک کنند تا وسیله نقلیه شما را به بهترین نحو کار کند .
            </p>
          </Col>
          <Col md={5}>
            <img src='img/stateinspection.jpg' alt="img" style={{maxWidth: '100%'}}/>
          </Col>
        </Row>
      </Container>
      <Footer />

    </>
  )
}
