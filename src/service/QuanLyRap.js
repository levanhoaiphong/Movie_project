import { GROUPID } from "../util/config";
import { baseService } from "./BaseService";


export class QuanLyRap extends baseService{
    constructor() {
        super();
    }
    layThongTinLichChieuHeThongRap = () =>{
        return this.get(`api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`)
    }
    layThongTinLichChieuPhim = (maPhim) =>{
        return this.get(`api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`);
    }
}

export const quanLyCumRap = new QuanLyRap()