import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

export default function SP6() {
  return (
    <>
      <Header/>
      <Container>
        <Row>
          <Col md={12} style={{marginBottom: '2rem'}}>
            <h3>تعمیر چراغ موتور </h3>
          </Col>
          <Col md={7}>
            <p>تکنولوژی خودروهای امروزی هشدارهایی را در اختیار شما قرار می دهد که نه تنها به شما اخطار می دهد که مشکلی را به شما نشان می دهد، بلکه از بروز آنها نیز جلوگیری می کند
            </p>
            <p>
            چراغ هشدار موتور می تواند هر چیزی را از شل بودن درپوش گاز گرفته تا خرابی مبدل کاتالیزوری نشان دهد. مشکلات ایمنی یا تعمیرات پرهزینه‌تر می‌تواند ناشی از نادیده گرفتن عملکرد صحیح چراغ هشدار باشد .
            </p>
            <p>
            لطفاً اگر از نگران عملکرد مناسب ترمزهای خود هستید، معطل نکنید. وسیله نقلیه خود را به کلینیک تخصصی شاهین بیاورید
            </p>
            <p>
            ما در کلینیک تخصصی شاهین نه تنها از فناوری دسترسی به سیستم رایانه داخلی و مشخص کردن مشکل برخورداریم، بلکه تکنسین‌های دارای گواهی ASE نیز داریم که می‌توانند هر مشکلی را برطرف کنند.
            </p>
          </Col>
          <Col md={5}>
            <img src='img/enginelight.jpg' alt="img" style={{maxWidth: '100%'}} />
          </Col>
        </Row>
      </Container>
      <Footer />

    </>
  )
}
