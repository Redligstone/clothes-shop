import React from "react";
import s from "./shop.module.scss";
import {BsArrowRight} from 'react-icons/bs'
import ProductItem from "../../components/ProductItem/ProductItem";
import { fetchProducts, productsSelector } from "../../redux/slices/products__slice";
import { useDispatch,useSelector } from "react-redux";
import { categoriesSelector, setCategoryId, setCurrentPage } from "../../redux/slices/categories_slice";
import Categories from "../../components/categories/categories";
import Skeleton from "./skeleton";
import Pagination from "../../components/Pagination/pagination";
import {Link, useLocation} from'react-router-dom'

const Shop: React.FC = () => {
  const dispatch = useDispatch();
  const {categoryId,currentPage} = useSelector(categoriesSelector);
  const { items, status } = useSelector(productsSelector);
  const location = useLocation()
  const path = location.pathname

  if(path !== '/shop'){
    dispatch(setCategoryId(0))
  }

      const onClickCategory = React.useCallback((id:number) => {
        dispatch(setCategoryId(id))
      }, [])
    
      const onChangePage = (number:number) => {
        if(categoryId === 0){
          dispatch(setCurrentPage(number));
        }
        
      };
    
      const getProducts = () => {
        const category = categoryId > 0 ? `category=${categoryId}` : "";
    
        dispatch(
         //@ts-ignore
          fetchProducts({
            category,
            currentPage:String(currentPage),
          })
        );

        window.scrollTo(0, 0);
      };
      
      React.useEffect(() => {
        getProducts();
      }, [categoryId, currentPage]);


      const products = items.map((product:any) => <ProductItem key={product.id} {...product} />);
      const skeletons = [...new Array(9)].map((_, index) => (
        <Skeleton key={index} />
  ));

  

  return (
    <div className={s.wrapper}>
        <div className={s.container}>
          <section className={s.header}>
            <h1>Магазин</h1>
            <div className={s.path}>
              <Link to='/'>Главная</Link>
              <span className={s.path_made}> — </span>
              <span>Магазин</span>
              <span></span>
            </div>
          </section>
    
          <Categories value={categoryId} onClickCategory={onClickCategory} currentPage={currentPage}/>
    
          <section className={s.shop}>
            <p className={s.showed}>{categoryId > 0 || currentPage > 1 ? `Показано: 3 из 12 товаров` : `Показано: 9 из 12 товаров`}</p>
            <main className={s.items__container}>
            
            {   
                !items.length ? skeletons : products
                
            }

            </main>
            <p className={s.showed}>{categoryId > 0 || currentPage > 1 ? `Показано: 3 из 12 товаров` : `Показано: 9 из 12 товаров`}</p>
          </section>
    
          {/* <div className={s.pagination}>
            <span className={s.selected}>1</span>
            <span>2</span>
            <BsArrowRight/>
          </div> */}
          <Pagination currentPage={currentPage} onChangePage={onChangePage}/>
        </div>
    </div>
  );
};

export default Shop;
