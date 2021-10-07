import { ThongTinDatVe } from "../_core/models/ThongTinDatVe";
import { baseService } from "./BaseService";


export class QuanLyPhongVe extends baseService{
    constructor(){
        super();
    }
    layChiTietPhongVe = (maLichChieu) =>{
        return this.get(`api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`);
    };
    datve = (thongTinDatVe = new ThongTinDatVe())=>{
        return this.post(`api/QuanLyDatVe/DatVe`, thongTinDatVe)
    }
}

export const quanLyPhongVe = new QuanLyPhongVe()