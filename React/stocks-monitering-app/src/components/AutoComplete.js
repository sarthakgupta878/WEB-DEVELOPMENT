import React from 'react'
import finhub from '../apis/finhub'
import { watchlistContext } from '../context/WatchlistContext';

const AutoComplete = () => {

  const value = React.useContext(watchlistContext)
  const {addStock} = value

  const [search, setSearch] = React.useState("")
  const [results, setResults] = React.useState([])


const renderDropdown = ()=>{
  const dropDownClass = search ? 'show':null
  return(
    <ul style={{
      height:"500px",
      overflowY:"scroll",
      overflowX:"hidden",
      cursor:"pointer"
    }} className={`dropdown-menu ${dropDownClass}`}>
        {results.map((result) => {
          return(
            <li onClick={()=>{addStock(result.symbol); setSearch("")}} key={result.symbol} className='dropdown-item'>{result.description} ({result.symbol})</li>
          )
        } )}
    </ul>
  )
}

  React.useEffect(() => {
    let isMounted = true
    const fetchData = async () => {
      try {
        const response = await finhub.get("/search", {
          params: {
            q: search
          }
        })
        console.log(response)

        if (isMounted) {
          setResults(response.data.result)
        }

      } catch (err) {
        console.log(err)
      }
    }
    if (search.length > 0) {

      fetchData()
    }else{
      setResults([])
    }

    return ()=>(isMounted=false)
  }, [search])

  return (

    <div className='w-50 h-27 p-5 rounded mx-auto'>
      <div className="form-floating dropdown">
        <input className='form-control' placeholder='Search' type="text" name="search"
          id="search" style={{ backgroundColor: "rgba(145,157,171,0.04)" }} autoComplete='off'
          value={search} onChange={(e) => setSearch(e.target.value)} />

        <label htmlFor="search">Search</label>
        {/* <ul className="dropdown-menu">
          <li>Stock1</li>
          <li>Stock2</li>
          <li>Stock3</li>
        </ul> */}
        {renderDropdown()}
      </div>
    </div>
  )
}

export default AutoComplete