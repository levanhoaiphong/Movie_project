import { GET_BANNER } from "../type/CarouselType"


const initialState = {
    carouselImg :[
       
    ]
}

const CarouselReducer = (state = initialState, action) =>{
    switch(action.type){
      case GET_BANNER:{
        state.carouselImg = action.payload
        return { ...state }
      }
        default:
            return {...state}
    }
}

export default CarouselReducer