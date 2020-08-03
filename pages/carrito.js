import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../components/layout/Layout';
import SummaryItem from '../components/ui/summaryCard/SummaryItem';
import Sumary from '../components/ui/summaryCard/Summary';
import Link from 'next/link';
import CustomerForm from '../components/forms/CustomerForm';
import Swal from 'sweetalert2';

//Actions de redux
import { getCartDetailsAction } from '../store/action/cartDetailsActions';
import { chekoutAction } from '../store/action/cartActions';
import { setUserAction } from '../store/action/userActions';

export default function Carrito() {

  // Usar el dispatch
  const dispatch = useDispatch();
  const getCartDetails = () => dispatch( getCartDetailsAction() );
  const chekout = () => dispatch( chekoutAction() );
  const setUser = user => dispatch( setUserAction(user) )

  //Items resumen 
  const items = useSelector( state => state.cart.items);
  const cart = useSelector( state => state.cart);
  const currency = useSelector( state => state.config.currency);
  const user = useSelector( state => state.user);

  useEffect(() => {
    //consultar la api
    const initDetails = () => dispatch( getCartDetails );
    initDetails();
  }, [])

  //submitCustomerHandler
  const checkoutHandler = () => {
    if(user.name == '' && user.lastname == ''){
      return Swal.fire({
        icon: 'info',
        title: 'Lo sentimos',
        text : 'Por favor complete sus datos de contacto'
      });
    }
    chekout();
  }

  //Submit usuario
  const submitCustomerHandler = user => {

    if(!user){
      return Swal.fire({
        icon: 'info',
        title: 'Lo sentimos',
        text : 'Por favor complete sus datos de contacto'
      });
    }

    if(!user.name) {
      return Swal.fire({
        icon: 'info',
        title: 'Lo sentimos',
        text : 'Por favor complete el campo nombre'
      });
    }

    if(!user.lastname) {
      return Swal.fire({
        icon: 'info',
        title: 'Lo sentimos',
        text : 'Por favor complete el campo nombre'
      });
    }
    setUser(user);
  }


  

  return (
    <>
      <Layout>
      <div className="px-2">
      { items.length > 0 ? 
        <div className="flex -mx-2 px-8">
          <div className="w-8/12 px-2 my-2">
            <div className=" border-gray-400 py-2">
              <h1>1.- Resumen de compra</h1>
            </div>
            {items.map((product, index) => (
              <SummaryItem 
                bordert
                key={index} 
                product={product}
                currency={currency}  
              /> 
            ))}
          </div>
          <div className="w-4/12 px-2">
            <div className="border border-gray-400 rounded my-2 p-4">
            <h3>2.- Mis datos de contacto</h3>
              { user.name == '' && user.lastname == '' ? 
                <CustomerForm 
                  onClick={submitCustomerHandler}
                />
            : <span className="text-blue-800 capitalize font-semibold text-lg">{user.name} {user.lastname}</span>}
            </div>
            <div className="border border-gray-400 rounded my-2 p-4">
              <Sumary checkoutHandler={checkoutHandler} currency={currency} cart={cart} />
            </div>
          </div>
        </div>
        :
        
        <div className="flex -mx-2 px-8 py-16">
          <div className="w-full px-2">
            <div className="border-b border-gray-400 py-2 text-center">
              <label className="text-xl">Su carrito está vácio, <Link href="/"><a className="text-blue-500 underline">Ir a productos</a></Link></label>
            </div>
          </div>
        </div>
      }
      </div>
      </Layout>
    </>
  )
}
