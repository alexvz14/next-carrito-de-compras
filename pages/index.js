import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../components/layout/Layout';
import ProductCard from '../components/ui/productCard/ProductCard';

//Actions de redux
import { addProductToCart } from '../store/action/cartActions'
import { getProductsAction } from '../store/action/productsActions'

export default function Home() {

  // Usar el dispatch
  const dispatch = useDispatch();
  const addProduct = product => dispatch( addProductToCart(product) );
  const getProducts = () => dispatch( getProductsAction() );

  //Selectors 
  const products = useSelector( state => state.products.items);
  const currency = useSelector( state => state.config.currency);

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
        <div className="px-8">
          <div className="flex -mx-2 md:px-8 flex-col md:flex-row">
              {products.map((product, index) => (
                <div key={index} className="w-full md:w-1/3 px-2">
                  <ProductCard
                    currency={currency}
                    product={product} 
                    addProduct={handlerAddProduct}
                  />
                </div>
              ))}
          </div>
        </div>
      </Layout>
    </>
  )
}
