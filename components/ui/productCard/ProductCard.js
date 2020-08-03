import React, { useState } from 'react';
import Price  from "../price/Price";

const ProductCard = ({product, addProduct, currency}) => {

  const [ modelSelected, setModel ] = useState('')
  
  return ( 
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg py-4">
        <img className="w-full" src="https://via.placeholder.com/219X136/eee" alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2"><h2>{product.name}</h2></div>
          <h3>{product.maker}</h3>
          <p className="text-gray-700 text-base">{product.description_es}</p>
          <Price
            className="text-blue-500 text-lg font-semibold text-right" 
            currency={currency} 
            mxn={product.price_mxn} 
            usd={product.price_usd} 
          />
          {/* Modelo */}
          <div className="w-full px-3 mb-2 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
              Modelo
            </label>
            <div className="relative">
              <select onChange={ e => setModel(e.target.value)} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option>Elija un modelo</option>
                {product.models.map((model, index) => (
                  <option key={index} value={model} >{ model }</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
          {/* Modelo */}
        </div>
        <div className="px-6 py-4">
          <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full uppercase"
            onClick={ () => addProduct({ id: product._id, model: modelSelected }) }
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div> 
  );
}
 
export default ProductCard;