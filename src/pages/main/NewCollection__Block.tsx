import React from 'react'
import s from './NewCollection.module.scss'
import ProductItem from '../../components/ProductItem/ProductItem'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { productsSelector } from '../../redux/slices/products__slice'
import axios from 'axios'


const NewCollection__Block: React.FC  = () => {

  const [products,setProducts] = React.useState<CartItem[]>([])
 

  React.useEffect(() => {
      async function fetchProducts () {
       try{
          const {data} = await axios.get( `https://6440292eb9e6d064be09816e.mockapi.io/shop?&limit=3`);
          setProducts(data.slice(0,3))
          console.log(data)
       } catch(error){
          console.log(error)
       }
      }
      fetchProducts()
      
  },[])


  return (
    <div className='container'>
        <div className={s.new__container}>
            <h2>Новая Коллекция</h2>

            <div className={s.items__block}>
              {
                products.map((product) => <ProductItem id={product.id} imageUrl={product.imageUrl} title={product.title} price={product.price}  />)
              }
            </div>

            <div className={s.button}>
              <Link to='/shop'>Открыть магазин</Link>
            </div>
        </div>
    </div>
  )
}

export default NewCollection__Block