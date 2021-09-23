import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Button from './Button'

import "../styles/banner.scss";

function Banner() {
    return (
        <div className='banner-container'>
            <div className='left-container'>
                <h2>Oi</h2>
                <a href='https://www.corebiz.ag/pt/' target='_blank' rel='noreferrer'>
                    <Button />
                </a>
                <div className='thumb-container'>
                    <div className='thumb'>
                        <img src='' alt=''/>
                    </div>
                    <div className='thumb'>
                        <img src='' alt=''/>
                    </div>
                    <div className='thumb'>
                        <img src='' alt=''/>
                    </div>
                    <div className='thumb'>
                        <img src='' alt=''/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
