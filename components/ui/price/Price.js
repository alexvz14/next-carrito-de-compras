import React from 'react';

const Price = ( { mxn, usd, currency = 'mxn', className} ) => {
    return ( 
    <label className={ className ? className : 'font-base text-sm'}>${ currency == 'mxn' ? mxn  : usd } <span className="uppercase"> { currency }</span></label>
     );
}
 
export default Price;