import React from 'react'
import Search from './components/Search'
import Modal from './components/Modal'
import Meals from './components/Meals'
import Favorites from './components/Favorites'
import { AppContext } from './context'

const App = () => {

  const context = React.useContext(AppContext)
  const {showModal, favorites} = context

  return (
    <div>
      <Search/>
      { favorites.length >0 && <Favorites/> }
      <Meals/>
      { showModal && <Modal/>}
    </div>
  )
}

export default App