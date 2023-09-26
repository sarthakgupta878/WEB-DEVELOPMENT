import React from 'react'
import Chart from 'react-apexcharts'
const StockChart = ({chartData,symbol}) => {
    const [dataFormat, setDataFormat] = React.useState("24h")
    const {day, week, year} = chartData

    const determineTimeFormat = () =>{
        switch(dataFormat){
            case "24h":
                return day
            case "7d":
                return week
            case "1y":
                return year
            default:
                return day
        }
    }

    const color =determineTimeFormat()[determineTimeFormat().length - 1].y - determineTimeFormat()[0].y >0 ? "#26C281":"#ed3419"

    const options = {
        colors:[color],
        title :{
            text: symbol,
            align:"center",
            style:{
                fontSize:'24px'
            }
        },
        chart:{
            id:"Stock data",
            animations:{
                speed:1300
            } 
        },
        xaxis:{
            type:"datetime",
            labels:{
                datetimeUTC:false
            }
        },
        tooltip:{
            x:{
                format:"MMM dd HH:MM"
            }
        }
    }



    const series=[{
        name:symbol,
        data:determineTimeFormat()
    }]

    const renderButtonSelect = (button) =>{
        const classes = "btn m-1 "
        if(button === dataFormat){
            return classes + "btn-primary"
        }else{
            return classes + "btn-outline-primary"
        }
    }

  return (
    <div className='mt-5 p-5 shadow-sm bg-white'>
        <Chart options={options} series={series} type="area" width="100%" />
        <div>
            <button className={renderButtonSelect("24h")} onClick={()=>setDataFormat("24h")} >24h</button>
            <button className={renderButtonSelect("7d")} onClick={()=>setDataFormat("7d")} >7d</button>
            <button className={renderButtonSelect("1y")} onClick={()=>setDataFormat("1y")} >1y</button>
        </div>
    </div>
  )
}

export default StockChart