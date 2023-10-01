import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

export default function SP10() {
  return (
    <>
      <Header/>
      <Container>
        <Row>
          <Col md={12} style={{marginBottom: '2rem'}}>
            <h3>تعمیر اگزوز</h3>
          </Col>
          <Col md={7}>
            <p>سیستم های کنترل اگزوز و آلایندگی برای کنترل آلاینده های مضر و کاهش صدای خروجی از ماشین شما ترکیب می شوند. با پیروی از برنامه نگهداری توصیه شده خودرو، می توانید از تعمیرات پرهزینه سیستم اگزوز خود جلوگیری کنید .
            </p>
            <p>
            علائم هشدار دهنده مشکل سیستم اگزوز :
            </p>
            <ul>
              <li>بوی سوختگی</li>
              <li>بوی بنزین</li>
              <li>موتور پر سر و صدا</li>
              <li>کاهش قدرت و شتاب</li>
              <li>کاهش راندمان سوخت</li>
              <li>لوله اگزوز آویزان</li>
            </ul>
            <p>
            چه نیاز به تعمیر و نگهداری داشته باشید یا اگر مشکوک هستید که خودروی شما با سیستم اگزوز مشکل دارد، تکنسین های دارای گواهینامه ASE در کلینیک تخصصی شاهین می توانند به شما کمک کنند و از تعمیرات پرهزینه در آینده جلوگیری کنند.
            </p>
          </Col>
          <Col md={5}>
            <img src='img/gal-img-3.jpg' alt="img" style={{maxWidth: '100%'}}/>
          </Col>
        </Row>
      </Container>
      <Footer />

    </>
  )
}