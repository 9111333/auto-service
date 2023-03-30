import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

export default function SP17() {
  return (
    <>
      <Header/>
      <Container>
        <Row>
          <Col md={12} style={{marginBottom: '2rem'}}>
            <h3>تعمیر و نگهداری گیربکس</h3>
          </Col>
          <Col md={7}>
            <p>مایع گیربکس با گذشت زمان باعث ایجاد کثیفی و لجن می شود و این بر عملکرد و عمر موتور شما تأثیر می گذارد .در کلینیک تخصصی شاهین ما می‌توانیم یک روش مدرن شستشوی گیربکس را انجام دهیم که این آلودگی‌ها را از بین می‌برد و گیربکس و موتور شما را از آسیب محافظت می‌کند .
            </p>
            <p>
            علائم هشدار دهنده اشکال در گیربکس :
            </p>
            <ul>
              <li>صداهای عجیب </li>
              <li>مشکلات تعویض دنده</li>
              <li>چرخ دنده های لغزنده</li>
              <li>حرکت موجی وسیله نقلیه</li>
              <li>تاخیر در حرکت خودرو</li>
            </ul>
            <p>
            باید توجه داشته باشید که اگر خودرو این علائم را نشان می‌دهد، خواه گیربکس شما اتوماتیک باشد یا دستی؛ گیربکس کثیف شما ممکن است مشکلات بزرگ‌تری ایجاد کرده باشد. تأخیر نکنید - فوراً با ما تماس بگیرید.
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