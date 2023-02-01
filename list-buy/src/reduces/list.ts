import { useReducer } from "react";
import {v4 as uuid} from "uuid";

export type item = {
    name: string;
    id : string
}
export type action = {
    type: string;
    payload?:{
        name?: string;
        id?: string;
    }
}
const initialstate:item[] = []
const listReducer=(list:item[],action:action) => {
    switch(action.type){
        case "add" : 
        if(action.payload?.name){
            let newstate = [...list];
            newstate.push({
                id: uuid(),
                name: action.payload.name
            })
            return newstate
        }
        break;
        case "del" :
        if(action.payload?.id){
            let newstate = [...list];
            newstate =  newstate.filter(item=>(item.id !== action.payload?.id))
            return newstate
        }   
        break;
        case "order" :
            {
                let newstate = [...list];
                newstate.sort((a,b)=>(a.name > b.name)? 1: -1);
                return newstate
            }
    }


    return list
}

export const reduceList = () => {
   return useReducer(listReducer,initialstate);
}