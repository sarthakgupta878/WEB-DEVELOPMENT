import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import finhub from '../apis/finhub'
import StockChart from '../components/StockChart'
import StockData from '../components/StockData'

const formatData = (data) => {
  return data.t.map((timeStamp, index) => {
    return {
      x: timeStamp * 1000,
      y: data.c[index]
    }
  })
}

const StockDetailPage = () => {
  const [chartData, setChartData] = useState()

  const { symbol } = useParams()

  React.useEffect(() => {
    const fetchData = async () => {
      const date = new Date()
      const currentTime = Math.floor(date.getTime() / 1000)
      let oneDay = currentTime -  24 * 60 * 60
      if (date.getDay() === 6) {
        oneDay = currentTime - 2 * 24 * 60 * 60
      }
      if (date.getDay() === 0) {
        oneDay = currentTime - 3 * 24 * 60 * 60
      }

      
      const oneWeek = currentTime - 7 * 24 * 60 * 60
      const oneYear = currentTime - 365 * 24 * 60 * 60
      try {
        const responses = await Promise.all([finhub.get("/stock/candle", {
          params: {
            symbol: symbol,
            from: oneDay,
            to: currentTime,
            resolution: 30
          }
        }), finhub.get("/stock/candle", {
          params: {
            symbol: symbol,
            from: oneWeek,
            to: currentTime,
            resolution: 60
          }
        }), finhub.get("/stock/candle", {
          params: {
            symbol: symbol,
            from: oneYear,
            to: currentTime,
            resolution: 'W'
          }
        })

        ])
        console.log(responses)
        setChartData({
          day: formatData(responses[0].data),
          week: formatData(responses[1].data),
          year: formatData(responses[2].data)
        })
      } catch (err) {
        console.log(err)
      }




    }
    fetchData()
  }, [symbol])

  return (
    <div>
      {chartData && (
      <div>
        <StockChart chartData = {chartData} symbol = {symbol} />
        <StockData symbol={symbol}/>
      </div>)}
    </div>
  )
}

export default StockDetailPage