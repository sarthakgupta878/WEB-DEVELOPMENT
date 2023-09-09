import React from "react";
import axios from "axios";

const AppContext = React.createContext();

 const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s="
 const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php"

 const AppProvider = ({children}) => {

     const [loading,setLoading]= React.useState(false)
     const [meals,setMeals]= React.useState([])
     const [searchTerm,setSearchTerm]= React.useState('')
     
     const [showModal,setshowModal] = React.useState(false)
     const [selectedMeal,setSelectedMeal] = React.useState(null)
     const [favorites,setFavorites] = React.useState(JSON.parse(localStorage.getItem('favorites')) || [])


    const closeModal =()=>{
        setshowModal(false)
    }

    const selectMeal = (idMeal,favoriteMeal)=>{

        let meal;
        if(favoriteMeal){
        meal = favorites.find((meal) => meal.idMeal === idMeal)
        }else{
        meal = meals.find((meal) => meal.idMeal === idMeal)
        }

        setSelectedMeal(meal)
        setshowModal(true)
    }


    const addToFavorites = (idMeal)=>{
        const meal = meals.find((meal)=> meal.idMeal === idMeal )

        const alreadyFavorites = favorites.find((meal)=> meal.idMeal === idMeal )
        if(alreadyFavorites) return

        const updateFavorites = [...favorites, meal]
        setFavorites(updateFavorites)
        localStorage.setItem('favorites' , JSON.stringify(updateFavorites))
        
    }
    
    const removeFromFavorites = (idMeal)=>{
        const updateFavorites = favorites.filter((meal)=> meal.idMeal !== idMeal)
        setFavorites(updateFavorites)
        localStorage.setItem('favorites' , JSON.stringify(updateFavorites))

    }

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

    const fetchRandomMeal = ()=>{
        fetchMeals(randomMealUrl)
    }

    React.useEffect(()=>{
        // fetchData()
        if(searchTerm === '')return
        fetchMeals(`${allMealsUrl}${searchTerm}`)
    },[searchTerm])


    React.useEffect(()=>{
        fetchMeals(allMealsUrl)
    },[])


  return (
    <AppContext.Provider value ={{loading,meals,setSearchTerm, fetchRandomMeal, showModal, selectedMeal, selectMeal, closeModal, addToFavorites, removeFromFavorites,favorites}}>
        {children}
    </AppContext.Provider>
  )
}

export  {AppContext, AppProvider}