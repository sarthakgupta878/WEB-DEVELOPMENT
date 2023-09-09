import React from 'react'
import {BsHandThumbsUp} from 'react-icons/bs'
import { AppContext } from '../context'

const Meals = () => {
    const context = React.useContext(AppContext)
    // console.log(context)
    const {loading,meals,selectMeal,addToFavorites} = context

    if(loading){
        return(
            <div className="section">
                <h4>Loading...</h4>
            </div>
        )
    }

    if(meals.length<1){
        return(
            <div className="section">
                <h4>No meals Matched Your Search.Please try again.</h4>
            </div>
        )
    }


  return (
    <div className='section-center'>
        {meals.map((singleMeal)=>{
            // console.log(singleMeal)
            const {idMeal ,strMeal:title ,strMealThumb:image} = singleMeal
            return (
                <article className='single-meal' key={idMeal}>
                    <img src={image} className='img' onClick={()=>selectMeal(idMeal,false)} />
                    <footer>
                        <h5>{title}</h5>
                        <button className='like-btn' onClick={()=>addToFavorites(idMeal)} ><BsHandThumbsUp/></button>
                    </footer>
                </article>
            )
        })}
    </div>
  )
}

export default Meals