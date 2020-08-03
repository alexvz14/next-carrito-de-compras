import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../components/layout/Layout';
import SummaryItem from '../components/ui/summaryCard/SummaryItem';
import Price from '../components/ui/price/Price';
import Button from '../components/ui/Buttons/Button';
import Router from 'next/router';

//Actions de redux
import { getCartDetailsAction } from '../store/action/cartDetailsActions';
import { chekoutAction } from '../store/action/cartActions';

export default function Confirmacion() {

  // Usar el dispatch
  const dispatch = useDispatch();
  const getCartDetails = () => dispatch( getCartDetailsAction() );
  const chekout = () => dispatch( chekoutAction() );

  //useSelector
  const cart = useSelector( state => state.cart.confirmation);
  const currency = useSelector( state => state.config.currency);
  const user = useSelector( state => state.user);

  const nuevaCompraHandler = () => {
    Router.push('/');
  }

  return (
    <>
      <Layout>
      <div className="px-2">
      { cart ? 
        <div className="flex -mx-2 px-8">
          <div className="w-full px-2">
            <div className="border-b border-gray-400 py-2 text-center">
              <h1 className="text-3xl text-blue-700 my-4"> ¡Gracias por tu compra!</h1>
              <span className="span-xl text-black">Hola <span className="capitalize">{user.name}</span> gracias por comprar con nosotros,  <br/> acontinuación tienes el resumen de tu orden</span>
            </div>
            <span className="capitalize">Cliente: {user.name} {user.lastname}</span><br /> 
            <span>Total: <Price mxn={cart.total_mxn} usd={cart.total_usd} currency={currency} /> </span>
            {cart.items.map((product, index) => (
              <SummaryItem 
                borderb
                key={index} 
                min
                product={product}
                currency={currency}  
              /> 
            ))}
            <div className="px-2 py-8 border-t border-gray-400">
              <Button onClick={nuevaCompraHandler} text="Realizar nueva compra" />  
            </div>
          </div>
        </div>
        :
        null
      }
      </div>
      </Layout>
    </>
  )
}
