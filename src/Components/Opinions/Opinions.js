import React from 'react'
import './Opinions.css'
import {IoMdQuote} from 'react-icons/io'
import {GiRoundStar} from 'react-icons/gi'
export default function Opinions({opmsg , opnametitle}) {
  return (
    <>
    <div className='op-mainbox'>
        <div className='op-icon'><IoMdQuote className='op-iconn'/></div>
        <div className='op-content'><p>{opmsg}</p></div>
        <div className='op-name'><span><p>{opnametitle}<br />
            <GiRoundStar className='op-starr'/><GiRoundStar className='op-starr'/><GiRoundStar className='op-starr'/><GiRoundStar className='op-starr'/><GiRoundStar className='op-starr'/></p></span></div>
    </div>
    </>
  )
}
