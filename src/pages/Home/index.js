import { Container } from '@material-ui/core'
import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InformationCalendar from '../../component/InformationCalendar'
import ReactSlick from '../../component/ReactSlick'
import { layThongTinHeThongRapAction } from '../../redux/action/QuanLyCumRapAction'
import { layDanhSachPhim } from '../../redux/action/QuanLyPhimAction'
import HomeCarousel from '../../template/HomeTemplate/layout/HomeCarousel'

function Home() {
    const dispatch = useDispatch()
    const {danhSachMovie} = useSelector(state => state.QuanLyPhimReducer)
    const { heThongRapChieu } = useSelector(state => state.QuanLyRapReducer)


    useEffect(()=>{
        dispatch(layDanhSachPhim())
        dispatch(layThongTinHeThongRapAction())
    },[])
    return (
        <div>
           <HomeCarousel/>
           <Container>
               <ReactSlick danhSachMovie = {danhSachMovie}/>
               <InformationCalendar heThongRapChieu = {heThongRapChieu}/>
           </Container>
        </div>
    )
}

export default memo(Home)
