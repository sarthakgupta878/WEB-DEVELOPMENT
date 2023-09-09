import React from 'react'
import { AppContext } from '../context'

const Search = () => {
  const context = React.useContext(AppContext)
  const {setSearchTerm, fetchRandomMeal} = context
  const [text , setText] = React.useState('')


  const handleChange = (e)=>{
    setText(e.target.value)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(text){
      setSearchTerm(text)
      setText('')
    }
  }

  const handleRandomMeal = (e) =>{
    setSearchTerm('')
    fetchRandomMeal()
  }

  return (
   <header className='search-container'>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='type favorite meal' className='form-input'  onChange={handleChange} value={text}/>
        <button type='submit' className='btn' >search</button>
        <button type='button' className='btn btn-hipster' onClick={handleRandomMeal} >suprise me!</button>
      </form>
   </header>
  )
}

export default Search