import {
    SET_CURRENCY,
  } from '../types/configTypes';
  
  //Cada reducer tiene su propio state
  const initialState = {
    currency: 'mxn',
    error: null,
    loading: false
  }
  
  export default function (state = initialState, action) {
    switch(action.type) {
      case SET_CURRENCY:
        return {
          ...state,
          currency: action.payload
        }
      default:
        return state;
    }
  }