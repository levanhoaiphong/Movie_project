import { LAY_THONG_TIN_LICH_CHIEU, LAY_THONG_TIN_LICH_CHIEU_HE_THONG_RAP } from "../type/CumRapType"


const stateDefault = {
    filmDetail:{},
    heThongRapChieu:[],
}

const QuanLyRapReducer  = (state=stateDefault, action) =>{
    switch(action.type){
        case LAY_THONG_TIN_LICH_CHIEU:{
            state.filmDetail = action.payload
             return {...state}
        }
        case LAY_THONG_TIN_LICH_CHIEU_HE_THONG_RAP:{
            state.heThongRapChieu = action.payload
            return { ...state }
        }
        default:
           return {...state}
    }
}

export default QuanLyRapReducer