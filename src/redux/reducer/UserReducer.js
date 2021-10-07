import { TOKEN, USER_LOGIN } from "../../util/config";
import { DANG_NHAP_TYPE, LAY_THONG_TIN_TAI_KHOAN, REMOVE_USER } from "../type/QuanLyNguoiDungType"

let user ={};
if(localStorage.getItem(USER_LOGIN)){
    user = JSON.parse(localStorage.getItem(USER_LOGIN))
}
const stateDefault = {
    userLogin: user,
    thongTinNguoiDung:{},
}

const QuanLyNguoiDungReducer = (state = stateDefault, action)=>{
    switch(action.type){
        case DANG_NHAP_TYPE:{
            localStorage.setItem(USER_LOGIN, JSON.stringify(action.payload))
            localStorage.setItem(TOKEN, action.payload.accessToken)
            return {...state}
        }
        case LAY_THONG_TIN_TAI_KHOAN:{
            state.thongTinNguoiDung = action.payload
            return { ...state }
        }
        case REMOVE_USER:{
            state.userLogin = []
        }
        default:
            return {...state}
    }
}

export default QuanLyNguoiDungReducer