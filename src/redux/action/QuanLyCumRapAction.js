import { quanLyCumRap} from "../../service/QuanLyRap"
import { LAY_THONG_TIN_LICH_CHIEU, LAY_THONG_TIN_LICH_CHIEU_HE_THONG_RAP } from "../type/CumRapType"


export const layThongTinLichChieuPhim = (id) => {
    return async dispatch => {
        try {
            const result = await quanLyCumRap.layThongTinLichChieuPhim(id)
            
            dispatch({
                type: LAY_THONG_TIN_LICH_CHIEU,
                payload: result.data.content
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const layThongTinHeThongRapAction = () => {
    return async dispatch => {
        try {   
            const result = await quanLyCumRap.layThongTinLichChieuHeThongRap()
            console.log(result)
            dispatch({
                type: LAY_THONG_TIN_LICH_CHIEU_HE_THONG_RAP,
                payload: result.data.content
            })
        } catch (errors) {
            console.log(errors)
        }
    }
}