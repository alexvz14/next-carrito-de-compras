import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../components/layout/Layout';
import ProductCard from '../components/ui/productCard/ProductCard';
import Alert from '../components/ui/alerts/AlertTopAccentBorder'

//Actions de redux
import { addProductToCart } from '../store/action/cartActions'

export default function Home() {

  // Usar el dispatch
  const dispatch = useDispatch();

  //llamada  addProductToCart
  const addProduct = product => dispatch( addProductToCart(product) );

  const error = useSelector( state => state.cart.error);

  const [products, setProducts] = useState([
    {"id":"5efe5f07dbef99b3bde32ca9","name":"Mustang","maker":"Ford","car_type":"Affordable","price_mxn":"869000","price_usd":"34669.99","description_es":"Auto deportivo económico","description_en":"Affordable Sports Car","models":["Red","Black","Gray"]},
    {"id":"5efe620bdbef99b3bde32cad","name":"Supra","maker":"Toyota","car_type":"Luxury","price_mxn":"1074750","price_usd":"42990","description_es":"Auto deportivo de lujo","description_en":"Luxury Sports Car","models":[]},
    {"id":"5efe62b3dbef99b3bde32cae","name":"MX-5","maker":"Mazda","car_type":"Affordable","price_mxn":"405000","price_usd":"16200","description_es":"Roadster dinámico","description_en":"Dynamic Roadster","models":["Red","White"]}
  ]);

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
              {products.map((product, index) => (
                <div key={index} className="w-full md:w-1/3 px-2">
                  <ProductCard
                    currency='mxn'
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
