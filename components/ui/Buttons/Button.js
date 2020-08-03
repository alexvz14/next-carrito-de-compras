import React from 'react';

const Button = ({type = 'button', text = 'Click aquí', onClick}) => {
  const onClickHandle = e => {
    console.log('onClick');
  }
  return ( 
    <button onClick={onClick ? onClick : onClickHandle } type={type} className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      { text }
    </button>
  );
}
 
export default Button;