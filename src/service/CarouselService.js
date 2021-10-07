import { baseService } from "./BaseService";



export class QuanLyCarousel extends baseService {
    constructor(){
        super();
    }
    layDanhSachBanner = () =>{
        return this.get(`api/QuanLyPhim/LayDanhSachBanner`)
    }
}

export const quanLyCarousel = new QuanLyCarousel()