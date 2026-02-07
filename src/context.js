import React, { createContext, useContext, useState, useReducer, useEffect} from 'react'
import cartItems from "./data"
import reducer from './reducer'
import { type } from '@testing-library/user-event/dist/type'

const AppContext=createContext()
const initialState={
    loading:false,
    cart:cartItems,
    total:0,
    amount:0,
}
const url = "https://course-api.com/react-useReducer-cart-project";
const AppProvider=({children})=>{
        const [state,dispatch]=useReducer(reducer,initialState);

        const clearCart=()=>{
            dispatch({type:"CLEAR_CART"})
        };

        const remove=(id)=>{
            dispatch({type:"Reset", payload:id})
        };

        const increase=(id)=>{
            dispatch({type:"Increase",payload:id})
        };

        const dicrease=(id)=>{
            dispatch({type:"Dicrease",payload:id})
        };

        const fetchData= async ()=>{
            dispatch({type:"Loading"})
            const response=await fetch(url);
            const cart=await response.json();
            dispatch({type:"Display",payload:cart})
        }

        const toggleAmount=(id,type)=>{
            dispatch({type:"Toggle",payload:{id,type}})
        }

        useEffect=(()=>{
            fetchData();
        },[]);

        useEffect=(()=>{
            dispatch({type:"GetTotals"})
        },[state.cart]);
        return (
            <AppContext.Provider value={{...state,remove,increase,dicrease,clearCart,toggleAmount}}>
            {children}
            </AppContext.Provider>
        )
}

export const useGlobalContext=()=>{
    return useContext(AppContext)
}

export {AppContext,AppProvider}
