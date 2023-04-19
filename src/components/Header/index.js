import React from 'react';
import logo from '../../assets/logo.png';
import search from '../../assets/search.png'
import  './style.css'

function Header () {
  return (
  <header>
    <section className='cabecalho'>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className='container'>
        <input className='input' placeholder='O você procura?' type="text" />
        <img src={search} alt="search" />
      </div>
    </section>
  </header>
  )
}

export default Header;