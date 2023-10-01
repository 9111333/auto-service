import React from 'react'
import { useEffect } from "react";
import './MainPage.css'
import { Container, Row, Col } from 'react-bootstrap'
import Opinions from '../Opinions/Opinions'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';


export default function MainPage() {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>
            <Header/>
            <div className='header-pic'>
                <img src="img/q.jpg" alt="logo" />
            </div>
            <div className='mainbody'>
                <Container>
                    <Row>
                        <Col md={4}>
                            <span><img src="img/tire.png" alt="" /></span>
                            <span><h4>تعمیر و خدمات تایر </h4></span>
                            <p className="text-center">ترمیم ساییدگی آج برای استفاده حداکثری از لاستیک های خودرو حیاتی است. کلینیک تخصصی شاهین طیف کاملی از خدمات تایر از جمله تعمیر تایر، چرخش لاستیک و بالانس چرخ را ارائه می دهد.</p>

                            <span><img src="img/climate.png" alt="" /></span>
                            <span><h4>تعمیر سیستم تهویه</h4></span>
                            <p className="text-center">سیستم های کنترل آب و هوا برای افزایش و بهبود عملکرد ، نیاز به تعمیر و نگهداری مداوم دارند. کلینیک تخصصی شاهین در تعمیر و نگهداری سیستم های کنترل آب و هوا تخصص دارد.</p>

                            <span><img src="img/egzoz.png" alt="" /></span>
                            <span><h4>تعمیر سیستم اگزوز</h4></span>
                            <p className="text-center">سیستم اگزوز عملکرد خودرو را ساده می کند و در عین حال عملکرد را به حداکثر می رساند. تکنسین های دارای گواهینامه رسمی در کلینیک تخصصی شاهین کارایی موتور را با نگهداری و تعمیر سیستم اگزوز تضمین می کنند.</p>
                        </Col>
                        <Col md={4}>
                            <div className='car-roof'>
                                <img src="img/car-roof.png" alt="" />
                            </div>
                        </Col>
                        <Col md={4} className='colide-prevent'>
                            <span><img src="img/gearbox.png" alt="" /></span>
                            <span><h4>تعمیر گیربکس</h4></span>
                            <p className="text-center">گیربکس رابط بین موتور و چرخ های یک وسیله نقلیه است. کلینیک تخصصی شاهین در تعمیر و نگهداری و همچنین رفع یا جلوگیری از خرابی گیربکس تخصص دارد.</p>

                            <span><img src="img/tasme.png" alt="" /></span>
                            <span><h4>تعمیر تسمه ها و لوله ها</h4></span>
                            <p className="text-center">تسمه ها و لوله ها نقش مهمی در عملکرد خودرو دارند و گرمایش، سرمایش و ترمز مناسب آن را حفظ می کنند. کلینیک تخصصی شاهین متخصص در تعمیر و تعویض لوله و تسمه است.</p>

                            <span><img src="img/brake.png" alt="" /></span>
                            <span><h4>تعمیر سیستم ترمز</h4></span>
                            <p className="text-center">عملکرد سیستم ترمز نقش مهمی در ایمنی جاده ایفا می کند. کلینیک تخصصی شاهین در خدمات ترمز عادی و ای بی اس تخصص دارد و مجهز به یک ایستگاه تنظیم ترمز رسمی تایید شده دولتی است.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='opinions-main-title'>
                <span className='opinions-main-title-span'><h2>مشتریان ما چه می گویند ...</h2></span>
            </div>
            <div className='opinions'>
                <Container className='op-container'>
                    <Row className='op-row'>
                        <Col md={4} className='op-margin'>
                            <Opinions opmsg='متخصصان کلینیک شاهین با حوصله به تمام سؤالات من پاسخ دادند و با ارایه پیشنهادات مفید و مناسب ، کمک بزرگی به ارتقای سطح کیفی خودرو من کردند. همچنین فقط در صورت لزوم ، اقدام به تعویض قطعات شد و از تحمیل هزینه های اضافی و غیر ضروری جلوگیری شد.' opnametitle='علیرضا کریمی' />
                        </Col>
                        <Col md={4} className='op-margin'>
                            <Opinions opmsg='من معتقد به استفاده از یک مرکز تخصصی مدرن برای نیازهای مکانیکی خود هستم. قبلاً ماشینم را نزد افراد دیگری برده‌ام و احساس می‌کنم که آنها همیشه هزینه‌ها و خدمات مضحکی را که واقعاً به آنها نیاز ندارم ارایه می‌کنند.اما به نظرات تیم کلینیک تخصصی شاهین اعتماد دارم.' opnametitle='معین عابدی' />
                        </Col>
                        <Col md={4} className='op-margin'>
                            <Opinions opmsg='کامیون من 2500 دور در دقیقه سرعت می گرفت و توانایی رانندگی من را محدود می کرد، بنابراین مجبور شدم آن را برای سرویس بیاورم. کلینیک تخصصی شاهین توانست تشخیص دهد که مشکل از سنسور CAM است، قطعه جایگزین آن را نصب کردند، و من روز بعد در جاده بودم. چه آرامشی...' opnametitle='ناصر پاکروان' />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='mainpage-brands'>
                <span className='mainpage-brands-title'><h2>برندهایی که تخصص ما است</h2></span>
            </div>
            <div className='brands-pics'>
                <Container>
                    <Row>
                        <Col md={3} className='text-center'><div data-aos="fade-left" data-aos-duration = '1500ms'><img src="img/audi-logo.png" alt="brandLogo" /></div></Col>
                        <Col md={3} className='text-center'><div data-aos="fade-down" data-aos-duration = '1500ms'><img src="img/bentley-logo.png" alt="brandLogo" /></div></Col>
                        <Col md={3} className='text-center'><div data-aos="fade-down" data-aos-duration = '1500ms'><img src="img/bmw-logo.png" alt="brandLogo" /></div></Col>
                        <Col md={3} className='text-center'><div data-aos="fade-right" data-aos-duration = '1500ms'><img src="img/ferrari-logo.png" alt="brandLogo" /></div></Col>
                        <Col md={3} className='text-center'><div data-aos="fade-left" data-aos-duration = '1500ms'><img src="img/lambo-logo.png" alt="brandLogo" /></div></Col>
                        <Col md={3} className='text-center'><div data-aos="fade-up" data-aos-duration = '1500ms'><img src="img/mercedes-logo.png" alt="brandLogo" /></div></Col>
                        <Col md={3} className='text-center'><div data-aos="fade-up" data-aos-duration = '1500ms'><img src="img/porsche-logo.png" alt="brandLogo" /></div></Col>
                        <Col md={3} className='text-center'><div data-aos="fade-right" data-aos-duration = '1500ms'><img src="img/rolls-royce-logo.png" alt="brandLogo" /></div></Col>
                    </Row>
                </Container>
            </div>
            <Footer/>
        </>
    )
}
