import React from 'react'
import finhub from '../apis/finhub'
import { BsFillCaretDownFill,BsFillCaretUpFill } from "react-icons/bs";
import { watchlistContext } from '../context/WatchlistContext';
import { useNavigate } from 'react-router-dom';

const StockList = () => {
 const value = React.useContext(watchlistContext)
 const {watchList,deleteStock} = value

  const [stock, setStock] =React.useState([])
  const navigate = useNavigate()
  
const changeColor =(change)=>{
  return change > 0 ? "success":"danger"
}

const renderIcon= (change)=>{
  return change >  0 ? <BsFillCaretUpFill/>: <BsFillCaretDownFill/>
}

const handleStockSelect = (stockname) =>{
  navigate(`detail/${stockname}`)
}

  React.useEffect(()=>{
    let isMounted =true
    const fetchData = async() =>{
      
      try{
        const responses = await Promise.all(watchList.map((stock)=>{
          return finhub.get("/quote", {
            params:{
              symbol:stock
            }
          })
        }))

       const data = responses.map((response) => {
          return {
            data : response.data,
            symbol:response.config.params.symbol
          }
        })
        // console.log(data)

        if(isMounted){
          setStock(data) 
        }
      }catch(err){
        console.log(err)
        
      }
    }
    fetchData()

    return ()=>(isMounted=false)
  },[watchList])

  return (
    <div>
      <table className='table hover mt-5'>
        <thead> 
            <tr>
              <th scope='col' >Name</th>
              <th scope='col'>Last</th>
              <th scope='col'>Chg</th>
              <th scope='col'>Chg%</th>
              <th scope='col'>High</th>
              <th scope='col'>Low</th>
              <th scope='col'>Open</th>
              <th scope='col'>Pclose</th>
            </tr>
        </thead>
        <tbody>
          {stock.map((stockData) =>{
            return (
              <tr style={{cursor:'pointer'}} onClick={()=> handleStockSelect(stockData.symbol)} className='table-row' key={stockData.symbol}>
                <th scope='row'>{stockData.symbol}</th>
                <td>{stockData.data.c}</td>
                <td className={`text-${changeColor(stockData.data.d)}`}>{stockData.data.d}  {renderIcon(stockData.data.dp)}</td>
                <td className={`text-${changeColor(stockData.data.dp)}`}>{stockData.data.dp} {renderIcon(stockData.data.dp)} </td>
                <td>{stockData.data.h}</td>
                <td>{stockData.data.l}</td>
                <td>{stockData.data.o}</td>
                <td>{stockData.data.pc} <button onClick={(e)=>{
                  e.stopPropagation()
                  deleteStock(stockData.symbol)
                }} className='btn btn-danger btn-sm ml-3 d-inline-block delete-button'>Remove</button> </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default StockList