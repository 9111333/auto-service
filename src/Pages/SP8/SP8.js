import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

export default function SP8() {
  return (
    <>
      <Header/>
      <Container>
        <Row>
          <Col md={12} style={{marginBottom: '2rem'}}>
            <h3>سرویس دیفرانسیل</h3>
          </Col>
          <Col md={7}>
            <p>دیفرانسیل مکانیزمی است که نیروی موتور را گرفته و به چرخ ها منتقل می کند. همچنین به چرخ های ماشین شما اجازه می دهد تا به آرامی بچرخد. مکانیسم این طور است که چرخ بیرونی باید سریع‌تر از چرخ داخلی بچرخد تا با آن همگام شود. دیفرانسیل این تغییرات چرخشی را تسهیل می کند .
            </p>
            <p>
            علائم هشدار دهنده مشکل دیفرانسیل :
            </p>
            <ul>
              <li>تاخیر برای سرویس روغن دنده </li>
              <li>صدای ناله یا زوزه کشیدن</li>
              <li>چرخش یا لغزش گیربکس</li>
              <li>بوی سوختگی</li>
            </ul>
            <p>
            هر وسیله نقلیه با توجه به دیفرانسیل مشخصات تعمیر و نگهداری خاص خود را دارد. روان کننده ناکافی باعث سایش بیش از حد بلبرینگ ها و چرخ دنده ها می شود. تکنسین های معتبر کلینیک تخصصی شاهین می توانند هر گونه مشکلی را در این سیستم به طور ماهرانه برطرف کنند .
            </p>
          </Col>
          <Col md={5}>
            <img src='img/differential_services-1.jpg' alt="img" style={{maxWidth: '100%'}}/>
          </Col>
        </Row>
      </Container>
      <Footer />

    </>
  )
}