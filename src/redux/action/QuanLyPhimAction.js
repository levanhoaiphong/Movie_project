import { quanLyPhim } from "../../service/QuanLyPhimService"
import { LAY_DANH_SACH_PHIM, LAY_THONG_TIN_PHIM } from "../type/LayDanhSachPhimType"

export const layDanhSachPhim = () =>{
    return async dispatch =>{
        try{
            const result = await quanLyPhim.layDanhSachPhim()
            dispatch({
                type: LAY_DANH_SACH_PHIM,
                payload: result.data.content
            })
        }catch(error){
            console.log(error)
        }
    }
}

export const layThongTinPhimAction = (maPhim) =>{
    return async dispatch =>{
        try{
            const result = await quanLyPhim.layThongTinPhim(maPhim)
            console.log(result.data.content)
            dispatch({
                type:LAY_THONG_TIN_PHIM,
                payload: result.data.content
            })
        }catch(error){
            console.log(error)
        }
    }
}