import { quanLyPhongVe } from "../../service/QuanLyPhongVeService"
import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe"
import { CHI_TIET_PHONG_VE, DAT_VE_HOAN_TAT } from "../type/QuanLyDatVeType"


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
            const result = await quanLyPhongVe.datve(thongTinDatVe)
            
            await dispatch(layChiTietPhongVeAction(thongTinDatVe.maLichChieu))
            await dispatch({type:DAT_VE_HOAN_TAT})
            
        }catch(error){
            console.log(error)
        }
    }
}