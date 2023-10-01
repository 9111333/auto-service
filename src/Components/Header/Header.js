import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <div className='header'>
                <div className='title-pic'>
                    <img src="img/logo.png" alt="logo" />
                </div>
            </div >
            <div className='menu'>
                <ul>
                    <li>
                        <Link to={'/'}>صفحه اصلی</Link>
                    </li>
                    <li>
                        <Link to={'/services-p'}>خدمات</Link>
                    </li>
                    <li>
                        <Link to={'/aboutus-p'}>درباره ما</Link>
                    </li>
                    <li>
                        <Link to={'/contactus-p'}>تماس با ما</Link>
                    </li>
                </ul>
            </div >
        </>
    )
}
