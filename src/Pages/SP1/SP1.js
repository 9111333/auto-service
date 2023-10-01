import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

export default function SP1() {
  return (
    <>
      <Header/>
      <Container>
        <Row>
          <Col md={12} style={{marginBottom: '2rem'}}>
            <h3>تعمیر و نگهداری کلی</h3>
          </Col>
          <Col md={7}>
          <p>وقتی مسافت پیموده شده شما به 60000 یا 100000 می رسد، این یک نقطه عطف بزرگ است. موارد خاصی وجود دارد که باید بازرسی یا تغییر داده شوند تا وسیله نقلیه شما به عملکرد و طول عمر مطلوب خود ادامه دهد.
          </p>
          <p>
          در اینجا برخی از موارد معمول برای اطمینان از صحت عملکرد خودرو جهت پیمودن مسافت های بالا آورده شده است :
          </p>
          <ul>
            <li>تعویض روغن</li>
            <li>تعویض تایر</li>
            <li>تعویض تسمه تایم</li>
            <li>تعویض فیلتر هوا</li>
            <li>تعویض فیلتر هوای کابین</li>
            <li>بررسی سیستم اگزوز و آلایندگی</li>
            <li>بررسی سیستم تهویه مطبوع</li>
            <li>بررسی موتور و گیربکس</li>
            <li>بازرسی کامل ترمز و تعویض لنت</li>
            <li>بررسی خطوط سوخت و انژکتورها</li>
          </ul>
          <p>
          هنگامی که وسیله نقلیه خود را برای انجام خدمات تعمیر و نگهداری کلی به کلینیک تخصصی شاهین می آورید، ما تعمیر و نگهداری کاملی را ارائه می دهیم که باعث می شود خودروی شما سالم تر و بهینه تر کار کند.
          </p>
          </Col>
          <Col md={5}>
            <img src="img/mile-service.jpg" alt="img" style={{maxWidth: '100%'}}/>
          </Col>
        </Row>
      </Container>
      <Footer/>

    </>
  )
}
