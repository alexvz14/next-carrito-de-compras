import React from 'react';
import Link from 'next/link';
import Header from './header/Header';

const Layout = props => {
  return ( 
    <>
      <Header />
      <h1>Comprar autos</h1>
      <nav>
        <ul>
          <li><Link href="/"><a>Inicio</a></Link></li>
          <li><Link href="nosotros"><a>Nosotros</a></Link></li>
        </ul>
      </nav>
      <main>
          {props.children}
      </main>
    </>
    );
}
 
export default Layout;