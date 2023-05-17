import React from 'react';
import s from './categories.module.scss'

type CategoriesProps = {
    value:number,
    currentPage:number,
    onClickCategory:(i:number) => void,
}

const Categories:React.FC<CategoriesProps> = React.memo(({value,onClickCategory,currentPage}) => {

    const categories = ['Все','Пальто','Свитшоты','Кардиганы','Толстовки' ]

    const onClickFunc = (index) => {
        if(currentPage === 1){
            onClickCategory(index)
        }
    }
    return (
        <section className={s.categories}>
        <ul>
            {categories.map((categoryName,index)=>{
                return <li key={index} className={value === index ? `${s.selected}` : ''} onClick={() => onClickFunc(index) 
                   
                }>{categoryName}</li>
            })}
        </ul>
      </section>
    );
})
export default Categories;
