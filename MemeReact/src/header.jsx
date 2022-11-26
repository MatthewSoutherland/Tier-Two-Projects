import reactLogo from './reactLogo.jpeg'
import reactLogoDark from './reactLogoDark.jpeg'
import React from 'react'

export default function Header() {
    
    return (
        <div id='header-container'>
            <header>
               <img src={reactLogo} alt='React Logo' className='react-logo'></img>
              <h2 id="nav-h">Meme Generator</h2>
            </header>
        </div>
    )
}