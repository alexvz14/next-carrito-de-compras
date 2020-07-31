import React from 'react';

const ProductCard = ({product, addProduct, currency}) => {

  
  return ( 
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg py-4">
        <img className="w-full" src="https://via.placeholder.com/219X136/eee" alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2"><h2>{product.name}</h2></div>
          <h3>{product.maker}</h3>
          <p className="text-gray-700 text-base">{product.description_es}</p>
          <p className="text-blue-500 text-lg font-semibold text-right">${product.price_mxn}</p>
          
        </div>
        <div className="px-6 py-4">
          <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full uppercase"
            onClick={ () => addProduct(product.id) }
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div> 
  );
}
 
export default ProductCard;