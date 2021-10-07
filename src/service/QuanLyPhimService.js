import { GROUPID } from "../util/config";
import { baseService } from "./BaseService";



export class QuanLyPhim extends baseService {
    constructor(){
        super();
    }
    layDanhSachPhim =()=>{
        return this.get(`api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`)
    }
    layThongTinPhim = (maPhim)=>{
        return this.get(`api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`)
    }
}

export const quanLyPhim = new QuanLyPhim()