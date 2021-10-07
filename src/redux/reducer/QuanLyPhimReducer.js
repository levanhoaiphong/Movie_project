import { LAY_DANH_SACH_PHIM, LAY_DANH_SACH_PHIM_DANG_CHIEU, LAY_DANH_SACH_PHIM_SAP_CHIEU, LAY_THONG_TIN_PHIM } from "../type/LayDanhSachPhimType"

const initialState = {
    danhSachMovie:[],
    thongTinPhim:{},
    dangChieu: true,
    sapChieu: true,
    arrDefault:[],
}

const QuanLyPhimReducer = (state= initialState, action) =>{
    switch(action.type){
        case LAY_DANH_SACH_PHIM:{
            state.danhSachMovie = action.payload
            state.arrDefault = state.danhSachMovie
            return {...state}
        }
        case LAY_DANH_SACH_PHIM_DANG_CHIEU:{
            state.dangChieu = !state.dangChieu

            state.danhSachMovie = state.arrDefault.filter(movie => movie.dangChieu === state.dangChieu)
            return {...state}
        }
        case LAY_DANH_SACH_PHIM_SAP_CHIEU: {
            state.sapChieu = !state.sapChieu

            state.danhSachMovie = state.arrDefault.filter(movie => movie.sapChieu === state.sapChieu)
            return { ...state }
        }
        case LAY_THONG_TIN_PHIM:{
            state.thongTinPhim = action.payload
            return {...state}
        }
        default:
            return {...state}
    }
}

export default QuanLyPhimReducer