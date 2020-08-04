import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import Header from './header/Header';
import guid from '../../helpers/uuid';
import { setCartTokenAction } from '../../store/action/cartActions';

const Layout = props => {
  
  const dispatch = useDispatch();
  const addToken = token => dispatch( setCartTokenAction(token) )


  useEffect(() => {
    //consultar la api
    const initToken = () => dispatch( addToken );
    initToken();
  }, [])

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