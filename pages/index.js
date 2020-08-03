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
    <Layout>
      <div class="px-4 md:px-8 lg:px-32">
        <div class="flex flex-wrap -mx-2">
          {products.map((product, index) => (
            <div class="w-full md:w-6/12 lg:w-1/3 px-2 my-2">
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
  )
}
