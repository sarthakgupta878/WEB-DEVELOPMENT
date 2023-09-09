import React from 'react'
import { AppContext } from '../context'

const Modal = () => {
  const context = React.useContext(AppContext)
  const {selectedMeal,closeModal} = context

  const {strMealThumb:image ,strMeal:title ,strInstructions: text, strSource:source} =selectedMeal

  return (
    <aside className='modal-overlay'>
      <div className='modal-container'>
        <img src={image} className='img modal-img' alt='img'/>
        <div className="modal-content">
          <h4>{title}</h4>
          <p>Cooking Instruction</p>
          <p>{text}</p>
          <a href={source} target='_blank' rel="noreferrer" >Origional Source</a>
          <button className='btn btn-hipster close-btn' onClick={closeModal} >close </button>
        </div>
      </div>
    </aside>
  )
}

export default Modal