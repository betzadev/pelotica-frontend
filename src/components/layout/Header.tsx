import React from 'react';
import Image from 'next/image';
import darklogo from '@/img/darklogo.svg';
import Link from 'next/link'; // Import the Link component

const Navbar = () => {

  return (

<div className="header">
<Image
        priority
        src={darklogo}
        alt="pelotica-logo"
        width="200" height="60"
      />
  <input className="menu-btn" type="checkbox" id="menu-btn" />
  <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
  <ul className="menu">
    <li><Link href="/">Inicio</Link></li>
    <li><Link href="/nosotros">Nosotros</Link></li>
    <li><Link href="/contacto">Contacto</Link></li>
    <li><Link href="/ingresa">Ingresa</Link></li>
  </ul>
</div>
  );
};

export default Navbar;



