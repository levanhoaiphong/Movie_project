import { quanLyPhongVe } from "../../service/QuanLyPhongVeService"
import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe"
import { CHI_TIET_PHONG_VE, CHUYEN_TAB, DAT_VE_HOAN_TAT } from "../type/QuanLyDatVeType"
import { displayLoadingAction, hideLoadingAction } from "./LoadingAction"


export const layChiTietPhongVeAction = (maLichChieu) =>{
    return async dispatch =>{
        try{
            const result = await quanLyPhongVe.layChiTietPhongVe(maLichChieu)
            if(result.status === 200){
                dispatch({
                    type: CHI_TIET_PHONG_VE,
                    payload: result.data.content,
                })
            }
        }catch(error){
            console.log(error)
        }
    }
}

export const datVeAction = (thongTinDatVe = new ThongTinDatVe) =>{
    return async dispatch =>{
        try{

            dispatch(displayLoadingAction)
            const result = await quanLyPhongVe.datve(thongTinDatVe)
            
            await dispatch(layChiTietPhongVeAction(thongTinDatVe.maLichChieu))
            await dispatch({type:DAT_VE_HOAN_TAT})

            await dispatch(hideLoadingAction)
            dispatch({type:CHUYEN_TAB})
            
        }catch(error){
            console.log(error)
        }
    }
}