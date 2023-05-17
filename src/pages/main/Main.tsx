import React from 'react'
import {Routes,Route, useLocation} from 'react-router-dom'
import FirstSlider from './FirstSlider'
import './main.scss'
import NewCollection__Block from './NewCollection__Block'
import Important_Block from './important_Block'
import DreamTeam from './DreamTeam'
import { useDispatch } from 'react-redux'
import { setCategoryId } from '../../redux/slices/categories_slice'

const Main:React.FC = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const path = location.pathname

 
  if(path !== '/shop'){
    dispatch(setCategoryId(0))
  }

  return (
    <div className='container'>
        <div>
            <FirstSlider/>
            <NewCollection__Block/>
            <Important_Block/>
            <DreamTeam/>
        </div>
    </div>
  )
}

export default Main