import React from 'react'

import CorebizTransp from '../assets/images/logo-corebiz-global.svg'

function Header() {
    return (
        <div>
            <ul>
                <li>
                    <img src={CorebizTransp} alt='Logo Corebiz'/>
                </li>
            </ul>
        </div>
    )
}

export default Header
