import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

export default function SP12() {
  return (
    <>
      <Header/>
      <Container>
        <Row>
          <Col md={12} style={{marginBottom: '2rem'}}>
            <h3>تعویض روغن</h3>
          </Col>
          <Col md={7}>
            <p>یکی از موارد اساسی تعمیر و نگهداری خودرو، پیروی از یک برنامه منظم تعویض روغن است. در حالی که رعایت برنامه تعویض روغن توصیه شده توسط سازنده بسیار مهم است، اما ممکن است زمانی که وسیله نقلیه شما قدیمی تر می شود، مسافت پیموده شده بالا می رود یا در آب و هوای سخت کار می کند، تعویض روغن بیشتر مورد نیاز باشد .
            </p>
            <p>
            علائم مورد نیاز تعویض روغن :
            </p>
            <ul>
              <li>دود  بیش از حد اگزوز خودرو</li>
              <li>لرزش در حالت بیکار</li>
              <li>سطح روغن پایین</li>
              <li>افزایش صدای موتور یا صدای تیک در هنگام استارت</li>
            </ul>
            <p>
            هر زمان که نیاز به تعویض روغن دارید، وسیله نقلیه خود را به کلینیک تخصصی شاهین بیاورید، جایی که ما تعویض روغن مقرون به صرفه را با استفاده از بهترین محصولات در صنعت ارائه می دهیم.
            </p>
          </Col>
          <Col md={5}>
            <img src='img/gal-img-1.jpg' alt="img" style={{maxWidth: '100%'}}/>
          </Col>
        </Row>
      </Container>
      <Footer />

    </>
  )
}
