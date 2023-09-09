import React from 'react'
import { AppContext } from '../context'

const Favorites = () => {
  const context = React.useContext(AppContext)

  const {favorites, selectMeal, removeFromFavorites} = context

  return (
    <div className='favorites'>
      <div className="favorites-content">
        <h5>Favorites</h5>
        <div className="favorites-container">
          {
            favorites.map((meal)=>{
              const {idMeal , strMealThumb:image} = meal
              return <div key={idMeal} className="favorite-item">
                <img src={image} alt="img" className='favorites-img img' onClick={()=> selectMeal(idMeal,true)} />
                <button className='remove-btn' onClick={()=>removeFromFavorites(idMeal)} >remove</button>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Favorites