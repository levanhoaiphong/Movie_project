import { ThongTinLichChieu } from "../../_core/models/ThongTinPhongVe"
import { CHI_TIET_PHONG_VE, CHUYEN_TAB, CHUYEN_TAB_ACTIVE, DAT_VE, DAT_VE_HOAN_TAT } from "../type/QuanLyDatVeType"


const stateDefault = {
    chiTietPhongVe: new ThongTinLichChieu(),
    danhSachGheDangDat: [],
    tabActive:"1",
}

const QuanLyDatVeReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case CHI_TIET_PHONG_VE: {
            state.chiTietPhongVe = action.payload
            return { ...state }
        }
        case DAT_VE: {
            // Cập nhập danh sách ghế đang đăt
            let danhSachGheCapNhap = [...state.danhSachGheDangDat];
            let index = danhSachGheCapNhap.findIndex((gheDD) => gheDD.maGhe === action.payload.maGhe)
            if (index != -1) {
                // Nếu tìm thấy ghế được chọn có trong mảng rồi xóa đi
                danhSachGheCapNhap.splice(index, 1);
            } else {
                danhSachGheCapNhap.push(action.payload)
            }
            return { ...state, danhSachGheDangDat: danhSachGheCapNhap }
        }
        case DAT_VE_HOAN_TAT: {
            state.danhSachGheDangDat = [];
            return { ...state }
        }
        case CHUYEN_TAB:{
            state.tabActive = "2"
            return {...state}
        }
        case CHUYEN_TAB_ACTIVE:{
            state.tabActive = action.number
            return { ...state }
        }
        default:
            return { ...state }
    }
}

export default QuanLyDatVeReducer