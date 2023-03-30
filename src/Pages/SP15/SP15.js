import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

export default function SP15() {
  return (
    <>
      <Header/>
      <Container>
        <Row>
          <Col md={12} style={{marginBottom: '2rem'}}>
            <h3>تعمیر کمک فنر ها </h3>
          </Col>
          <Col md={7}>
            <p>اصولا پس از طی مسافت های طولانی، اجزای سیستم کمک ها نیاز به تعمیر یا تعویض دارند.
            </p>
            <p>
            علائم هشدار دهنده مشکل استرات ها و شوک ها :
            </p>
            <ul>
              <li>لاستیک ها به صورت ناهموار فرسوده می شوند</li>
              <li>لرزش، تاب خوردن، تکان خوردن یا لرزش در جاده های ناهموار</li>
              <li>عبور سخت از روی دست اندازها یا شیب های تند </li>
              <li>نشت مایعات از پایه ها یا کمک ها </li>
            </ul>
            <p>
            حفظ کمک ها و پایه ها می تواند از آسیب طولانی مدت به خودروی شما جلوگیری کند. کلینیک تخصصی شاهین دارای جدیدترین فناوری و کادری مجرب برای رسیدگی به تمام مشکلات سیستم کمک های شماست .
            </p>
          </Col>
          <Col md={5}>
            <img src='img/strut-shocks-fix.jpg' alt="img" style={{maxWidth: '100%'}}/>
          </Col>
        </Row>
      </Container>
      <Footer />

    </>
  )
}