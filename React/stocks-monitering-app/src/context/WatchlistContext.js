import React from 'react'

 const watchlistContext = React.createContext()

 const WatchlistContextProvider = (props) => {
    const [watchList, setWatchList] =React.useState( localStorage.getItem("watchlist")?.split(",") ||["GOOGL", "MSFT", "AMZN","TSLA"])
    React.useEffect(()=>{
      if(watchList.length >0){

        localStorage.setItem("watchlist",watchList)
      }else{
        localStorage.removeItem("watchlist")
      }
    },[watchList])

    const addStock = (stock) =>{
      if(watchList.indexOf(stock) === -1)
      setWatchList([...watchList,stock])
    }

    const deleteStock = (stock)=>{
      const newWatchList = watchList.filter((element)=>{
        return element !==stock
      })
      setWatchList(newWatchList)
    }

  return (
    <watchlistContext.Provider value={{watchList, addStock, deleteStock}}>
      {props.children}
    </watchlistContext.Provider>
  )
}

export  {watchlistContext,WatchlistContextProvider}