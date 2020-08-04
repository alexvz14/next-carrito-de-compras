import React from 'react';
import Price from '../price/Price';
import Select from '../select/Select';

const SummaryItem = ({product, min, currency, bordert , borderb, onDeleteClick, onModelHandler }) => {

  const deleteHandler = item => {
    
    if(!item)
      return console.log('deleteHandler error item')

    const id = item._id;

    if(!onDeleteClick)
      return console.log('deleteHandler item >>> ', item)
    
    onDeleteClick(id);  
  }

  const modelHandler = model => {
    if(!model && model == ''){
      console.log('debe seleccionar un modelo')
    }

    if(!onModelHandler)
      return console.log('deleteHandler item >>> ', model)
      
    const change = {
      id: product.product._id,
      value: model, 
      type: 'model'
    }
  
    onModelHandler(change);

  }

  return (
    <div className={` w-full px-4 py-2  border-gray-400 ${bordert ? 'border-t' : null} ${borderb ? 'border-b' : null} `}>
      <div className="flex justify-between">
        <div className="text-gray-700 px-4 py-2 m-2">
          <h2 className="font-bold text-lg">{product.product.name}</h2>
          { !min ? <h3 className="font-light text-lg">{ product.product.maker }</h3> : 
            <>
              <h3 className="font-light text-lg">{ product.product.maker } - { product.model } </h3>
              <label className="block uppercase tracking-wide text-green-500 text-xs font-bold text-left mb-2">
                {product.status}
              </label>
            </>
          }
        </div>
        { !min ? 
          <div className="text-gray-700 text-center px-4 py-2 m-2">
            { product.product.models.length > 0 ? 
              <Select onChange={modelHandler} value={product.model} items={product.product.models} /> : null 
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
            <label className="block uppercase tracking-wide text-green-500 text-xs font-bold mb-2">
              {product.product.status}
            </label>
          </div>
        </div>: 
        null 
      }
      { !min ? 
        <div className="flex justify-between">
          <button type="button" onClick={ () => deleteHandler(product.product)} class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Eliminar
          </button> 
        </div> : 
        null 
      }
    </div>
  );
}
 
export default SummaryItem;