import { GET_BANNER } from "../type/CarouselType"


const initialState = {
    carouselImg :[
        {
      maBanner: 1,
      maPhim: 1282,
      hinhAnh: "http://movieapi.cyberlearn.vn/hinhanh/ban-tay-diet-quy.png",
    },
    {
      maBanner: 1,
      maPhim: 1282,
      hinhAnh: "http://movieapi.cyberlearn.vn/hinhanh/ban-tay-diet-quy.png",
    },
    {
      maBanner: 1,
      maPhim: 1282,
      hinhAnh: "http://movieapi.cyberlearn.vn/hinhanh/ban-tay-diet-quy.png",
    },
    ]
}

const CarouselReducer = (state = initialState, action) =>{
    switch(action.type){
      case GET_BANNER:{
        state.carouselImg = action.payload
      }
        default:
            return {...state}
    }
}

export default CarouselReducer