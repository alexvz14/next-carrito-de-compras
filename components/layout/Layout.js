import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import Header from './header/Header';
import { setCartTokenAction } from '../../store/action/cartActions';
import { setCurrencyAction } from '../../store/action/configActions';

const Layout = props => {
  
  const dispatch = useDispatch();
  const addToken = token => dispatch( setCartTokenAction(token) )
  const setCurrency = currency => dispatch( setCurrencyAction(currency) )

  //Selectors 
  const currency = useSelector( state => state.config.currency);

  const currencyHandler = currency => {
    if(currency)
      setCurrency(currency);
  }

  useEffect(() => {
    //consultar la api
    const initToken = () => dispatch( addToken );
    initToken();
  }, [])

  return ( 
    <>
      <Header 
        currency={currency}
        changeCurrency={currencyHandler}
      />
      <h1 className="text-blue-700 text-center font-semibold text-4xl my-8">Comprar autos</h1>
      <main>
          {props.children}
      </main>
    </>
    );
}
 
export default Layout;