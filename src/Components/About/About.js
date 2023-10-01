import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AOS from 'aos';
import { useEffect } from "react";


export default function About() {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>
            <Header/>
            <Container>
                <Row>
                    <Col className='diasappear'>
                        <div data-aos="fade-left" data-aos-duration='850ms'>
                            <div className='about-pic-wrapper'>
                                <img src="img/aboutt.PNG" alt="" />
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div data-aos="fade-right" data-aos-duration='850ms'>
                            <div className='about-title'>
                                <span><h3>درباره ما</h3></span>
                            </div>
                            <div className='about-text'>
                                <p>وقتی برای کارهای خودروسازی از کلینیک تخصصی شاهین بازدید می‌کنید، دهه‌ها تجربه صنعتی در زمینه هر خدماتی به دست می‌آورید. کارکنان ما دارای سال ها تجربه ترکیبی در کار بر روی طیف گسترده ای از مسائل با خودروها و کامیون ها از همه برندها و مدل های مختلف هستند. تخصص همه کاره ما، همراه با ابزار و تجهیزات باکیفیت، تضمین می کند که بازرسی، نگهداری و تعمیرات شما را به طور دقیق و قطعی انجام می دهیم. ما مسایل مربوط به موتور، گیربکس، سیستم تهویه مطبوع، سیستم الکتریکی، رادیاتور و هر جزء زیر کاپوت شما را برطرف می‌کنیم. علاوه بر این، ما مجموعه گسترده‌ای از لاستیک‌ها و چرخ‌ها را برای هر زمان که لاستیک‌های شما نیاز به تعویض داشته باشند یا بخواهید از چرخ‌های کارخانه خود ارتقا دهید، پوشش می دهیم. ما هر روز هفته باز هستیم و موقعیت مناسب ما در تهران پذیرای مشتریان جدید و مشتریان قدیمی است. هنگامی که به بازرسی، نگهداری و تعمیرات متخصص نیاز دارید، با ما تماس بگیرید تا با تکنسین های مجرب و با استعداد ما، خدمات را برنامه ریزی کنیم. اگر دچار خرابی خودرو شدید، با ما تماس بگیرید یا خودروی خود را به فروشگاه خودروی ما بیاورید تا در اسرع وقت آن را برای تعمیر تحویل دهیم.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className='accordpic'>
                            <img src="img/why us.png" alt="" />
                        </div>
                    </Col>
                    <Col xs={12} className='text-center'>
                        <div className='accordwrapper'>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header><p>خدمات کامل خودرو</p> </Accordion.Header>
                                <Accordion.Body>
                                    کلینیک تخصصی شاهین یک مرکز تعمیرات خودرو با خدمات کامل است که می تواند تمام نیازهای خودروی شما را برطرف کند. تعمیر صحیح خودروهای پیچیده امروزی نیازمند دانش و تجهیزات تخصصی بیشتر از هر زمان دیگری است. تکنسین های آموزش دیده ما تعمیرات خودرو با کیفیت بالا را تضمین می کنند. همچنین ما مجهز به تجهیزات پیشرفته ای هستیم که خودرو شما را به بهترین نحو تعمیر می کند.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header><p>خدمات شخصی</p></Accordion.Header>
                                <Accordion.Body>
                                    کلینیک تخصصی شاهین با ارائه خدمات در اسرع وقت و سرویس رفت و برگشت رایگان، تجربه شما را تا حد امکان راحت و لذت بخش می کند. قیمت های ما بر اساس نرخ مصوب و کارکنان ما در محیطی حرفه ای و دوستانه به ارایه خدمت خواهند پرداخت. ما راه صحیح را به شما نشان می دهیم تا از تعمیرات پرهزینه و بیهوده خودرو جلوگیری شود. تمام خدمات تعمیر و نگهداری ما متناسب با وسیله نقلیه شما ایجاد شده است.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header><p>ضمانت</p></Accordion.Header>
                                <Accordion.Body>
                                    کلینیک تخصصی شاهین 15 ماه یا 15000 کیلومتر گارانتی برای کلیه تعمیرات مکانیکی ارائه می دهد. همچنین کلینیک ماب ضمانت مادام العمر در برابر نقص بدنه و یا رنگ ارائه می دهد.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header><p>تنظیم زمان حضور</p></Accordion.Header>
                                <Accordion.Body>
                                    برای به حداکثر رساندن ارایه خدمات و ایجاد نظم ، برای زمان حضور مشتری موعد دقیق تعیین می شود. برای تعیین وقت قبلی، با شماره 021-12345678 تماس بگیرید. ما همچنین برای آن دسته از مشتریانی که ساعات کاری ما پاسخگوی آن‌ها نیست، یک وقت فوق العاده در نظر می گیریم.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header><p>خط مشی حمایت از مشتری</p></Accordion.Header>
                                <Accordion.Body>
                                    ما درک می کنیم که وقت شما ارزشمند است به همین دلیل است که می خواهیم تجربه شما در تعامل با ما تا حد امکان لذت بخش باشد. کلینیک تخصصی شاهین همیشه اینجاست تا به مشتریان خود گوش دهد،لذا اگر پیشنهاد و یا نظری دارید خوشحال می شویم که با ما در میا بگذارید.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer/>

        </>
    )
}
