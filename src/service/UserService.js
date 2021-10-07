import { baseService } from "./BaseService";


export class QuanLyUser extends baseService{
    constructor() {
        super();
    }
    dangNhap = (thongTinDangNhap) =>{
        return this.post(`api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap)
    }
    thongTinTaiKhoan = () =>{
        return this.post(`api/QuanLyNguoiDung/ThongTinTaiKhoan`)
    }
} 

export const quanLyUser = new QuanLyUser()