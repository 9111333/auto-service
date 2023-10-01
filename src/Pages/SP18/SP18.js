import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

export default function SP18() {
  return (
    <>
      <Header/>
      <Container>
        <Row>
          <Col md={12} style={{marginBottom: '2rem'}}>
            <h3>تیون آپ </h3>
          </Col>
          <Col md={7}>
            <p>
              (تیون آپ) تنظیم یک اصطلاح گسترده برای نگهداری پیشگیرانه است. این مانند یک چکاپ برای ماشین شما است و بهترین راه برای افزایش عمر آن و جلوگیری از امکان بروز تعمیرات گران قیمت و شرایط خطرناک رانندگی است .ما با شما کار خواهیم کرد تا برنامه جامع و منحصربفرد تعمیر و نگهداری را برای روال رانندگی و وسیله نقلیه خاص شما ایجاد کنیم. شما می توانید برای نگهداری خودرو خود در بهترین شرایط به ما اعتماد کنید و ما حتی به شما ایمیلی ارسال می کنیم تا به شما یادآوری کنیم که چه زمانی باید تعمیر و نگهداری شما انجام شود.
            </p>
          </Col>
          <Col md={5}>
            <img src='img/tune-up.jpg' alt="img" style={{maxWidth: '100%'}}/>
          </Col>
        </Row>
      </Container>
      <Footer />

    </>
  )
}