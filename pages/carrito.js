import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../components/layout/Layout';
import ProductCard from '../components/ui/productCard/ProductCard';
import Alert from '../components/ui/alerts/AlertTopAccentBorder'

//Actions de redux
import { addProductToCart } from '../store/action/cartActions'
import { getProductsAction } from '../store/action/productsActions'

export default function Home() {

  // Usar el dispatch
  const dispatch = useDispatch();
  const addProduct = product => dispatch( addProductToCart(product) );
  const getProducts = () => dispatch( getProductsAction() );

  //Selectors 
  const error = useSelector( state => state.cart.error);
  const products = useSelector( state => state.products.items);

  useEffect(() => {
    //consultar la api
    const initProducts = () => dispatch( getProducts );
    initProducts();
  }, [])

  //Agregar producto al carrito
  const handlerAddProduct = product => {
    //Encontrar el producto
    const found = products.find( item => ( item.id == product.id ))
    //Agregar el producto
    addProduct(product);
  }

  return (
    <>
      <Layout>
        { !error ? null :<Alert type="danger" message="Hubo un error" info={error} /> }
        <div className="px-8">
          <div className="flex -mx-2 md:px-8 flex-col md:flex-row">
            Hola soy carrito
          </div>
        </div>
      </Layout>
    </>
  )
}
