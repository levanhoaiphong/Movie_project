import { quanLyCarousel } from "../../service/CarouselService"
import { GET_BANNER } from "../type/CarouselType"


export const layDanhSachBanner = () => {
    return async dispatch => {
        try {
            const result = await quanLyCarousel.layDanhSachBanner()
            dispatch({
                type:GET_BANNER,
                payload: result.data.content
            })
        } catch (error) {
            console.log(error)
        }
    }
}