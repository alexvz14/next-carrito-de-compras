import React from 'react';

const Select = ({value = '', placeholder="Elija una opción", items = [], onChange }) => {

  const handle = (e) => {
    console.log('selected', e.target.value)
  }

  return ( 
    <>
    <select onChange={onChange ? e => onChange(e.target.value) : handle } value={value} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
      <option>{ placeholder }</option>
      { items.length > 0 ? items.map((value, index) => ( <option key={index} value={value} >{ value }</option>))  : null }
    </select>     
    </>
  );
}
 
export default Select;