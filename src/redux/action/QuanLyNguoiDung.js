import { QuanLyUser, quanLyUser } from "../../service/UserService"
import { TOKEN, USER_LOGIN } from "../../util/config"
import { DANG_NHAP_TYPE, LAY_THONG_TIN_TAI_KHOAN, REMOVE_USER } from "../type/QuanLyNguoiDungType"


export const dangNhapAction = (thongTinDangNhap, callBack) => {
    return async dispatch => {
        try {
            const result = await quanLyUser.dangNhap(thongTinDangNhap)
            if (result.data.statusCode === 200) {
                dispatch({
                    type: DANG_NHAP_TYPE,
                    payload: result.data.content
                })
                callBack()
            }
            console.log('result', result.data)
        } catch (error) {
            console.log(error.respose.data)
        }
    }
}

export const layThongTinTaiKhoanAction = () =>{
    return async dispatch =>{
        try{
            const result = await quanLyUser.thongTinTaiKhoan()
            console.log("result", result.data.content)
            if(result.data.statusCode === 200){
                dispatch({
                    type: LAY_THONG_TIN_TAI_KHOAN,
                    payload: result.data.content
                })
            }
        }catch(error){
            console.log(error.respose.data)
        }
    }
}

export const signOut = () => {
    return dispatch => {
        dispatch({
            type: REMOVE_USER
        })
        localStorage.removeItem(USER_LOGIN)
    }
}