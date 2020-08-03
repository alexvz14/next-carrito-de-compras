import React, { useState } from 'react';
import Button from '../ui/Buttons/Button';


const CustomerForm = ({ onClick, firstplaceholder = '', lastplaceholder = ''}) => {

  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  

  const clickHandler = () => {
    const customer  = {
      name: name,
      lastname: lastname
    };
    if(!onClick)
      return console.log('submit >>> ', customer );

    onClick(customer);
  }

  return ( 
    <form class="w-full max-w-lg" autocomplete="off">
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
            Nombre
          </label>
          <input name="name" value={name} onChange={e => setName(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder={firstplaceholder} />
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
            Apellido
          </label>
          <input name="lastname" value={lastname} onChange={e => setLastname(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder={lastplaceholder} />
        </div>
      </div>
      <Button text="Guardar" onClick={ clickHandler } />
    </form>    
  );
}
 
export default CustomerForm;