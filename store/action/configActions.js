import {
  SET_CURRENCY
} from '../types/configTypes'

//Seting Currency
export function setCurrencyAction( currency ) {
  return (dispatch) => {
    if(currency)
      dispatch( setCurrency(currency) );
  }
}

const setCurrency = payload => ({
    type: SET_CURRENCY,
    payload: payload
})
