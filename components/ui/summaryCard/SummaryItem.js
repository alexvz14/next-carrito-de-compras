import React from 'react';
import Price from '../price/Price';
import Select from '../select/Select';

const SummaryItem = ({product, min, currency, bordert , borderb }) => {
  return (
    <div className={` w-full px-4 py-2  border-gray-400 ${bordert ? 'border-t' : null} ${borderb ? 'border-b' : null} `}>
      <div className="flex justify-between">
        <div className="text-gray-700 px-4 py-2 m-2">
          <h2 className="font-bold text-lg">{product.product.name}</h2>
          { !min ? <h3 className="font-light text-lg">{ product.product.maker }</h3> : null }
        </div>
        { !min ? 
          <div className="text-gray-700 text-center px-4 py-2 m-2">
            { product.product.models.length > 0 ? 
              <Select items={product.product.models} /> : null 
            }
          </div> :  
          <Price 
            mxn={product.product.price_mxn}
            usd={product.product.price_usd}
            currency={currency}
          /> 
        }
      </div>
      { !min ?
        <div className="flex justify-between">
          <div className="text-gray-700 px-4 py-2 m-2">
            <Price 
              mxn={product.product.price_mxn}
              usd={product.product.price_usd}
              currency={currency}
            />
          </div>
          <div className="text-gray-700 text-center px-4 py-2 m-2">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Cantidad
            </label>
            <input value="1" className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text"/>
          </div>
        </div>: 
        null 
      }
      { !min ? 
        <div className="flex justify-between">
          <button class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Eliminar
          </button> 
        </div> : 
        null 
      }
    </div>
  );
}
 
export default SummaryItem;