import { defaults } from "lodash-es"
import { DISPLAY_LOADIG, HIDE_LOADIG } from "../type/LoadingType"


const stateDefault ={
    isLoading: false
}

export const LoadingReducer = (state = stateDefault, action)=>{
    switch(action.type){
        case DISPLAY_LOADIG:{
            state.isLoading = true
            return {...state}
        }
        case HIDE_LOADIG:{
            state.isLoading = false
            return { ...state }
        }
        default: 
        return {...state}
    }
}