 import React from 'react';
 import SummaryItem from './SummaryItem';
 import Price from '../price/Price';
 import Button from '../Buttons/Button';

const Summary = ({cart, checkoutHandler, currency}) => {
  return (
    <>
    <h2>3.- Resumen de compra: {cart.items.length} producto{cart.items.length > 1 ? 's' : null} </h2> 
    { cart.items.map((product, index) => (<SummaryItem borderb min key={index} product={product} currency={currency} /> )) }
    <div className="w-full px-4 py-2 border-b border-gray-400">
      <div className="flex justify-between">
        <div className="text-gray-700 px-4 py-2 m-2">
          <h2 className="font-bold text-lg">Total <Price mxn={cart.total_mxn} usd={cart.total_usd} currency={currency} /></h2>
        </div>
      </div>
    </div>
    <Button text="Comprar" onClick={checkoutHandler} />
    </>
  );
}
 
export default Summary;