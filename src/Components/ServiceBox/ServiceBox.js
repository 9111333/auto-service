import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './ServiceBox.css'


export default function ServiceBox({hmsg  , address ,src}) {
    return (
        <>
                <div class="ih-item square effect6 from_top_and_bottom"><Link to={address}>
                    <div class="img"><img src={src} /></div>
                    <div class="info">
                        <h3>{hmsg}</h3>
                    </div>  </Link></div>

        </>
    )
}
