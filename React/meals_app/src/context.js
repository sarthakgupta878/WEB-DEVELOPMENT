import React from "react";
import axios from "axios";

const AppContext = React.createContext();

 const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=a"
 const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php"

 const AppProvider = ({children}) => {

     const [loading,setLoading]= React.useState(false)
    const [meals,setMeals]= React.useState([])

    // const fetchData = async()=>{
    //     try{
    //         const response = await fetch("https://randomuser.me/api/")
    //         const data = await response.json()
    //         console.log(data)

    //     }catch(error){
    //         console.log(error)
    //     }
    // }
     
    const fetchMeals = async(url) =>{
        setLoading(true)
        try{
            const {data} = await axios.get(url)
            if(data.meals){
                
                setMeals(data.meals)
            }else{
                setMeals([])
            }
        }catch(e){
            console.log(e)
        }
        setLoading(false)
    }

    React.useEffect(()=>{
       
        // fetchData()
        fetchMeals(allMealsUrl)
    },[])
  return (
    <AppContext.Provider value ={{loading,meals}}>
        {children}
    </AppContext.Provider>
  )
}

export  {AppContext, AppProvider}