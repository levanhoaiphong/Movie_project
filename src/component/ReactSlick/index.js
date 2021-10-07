import React from 'react';
import Slider from "react-slick";
import styleClick from './slick.module.css'
import Movie from '../Movie';
import { LAY_DANH_SACH_PHIM_DANG_CHIEU, LAY_DANH_SACH_PHIM_SAP_CHIEU } from '../../redux/type/LayDanhSachPhimType';
import { useDispatch, useSelector } from 'react-redux';


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} ${styleClick["slick-prev"]}`}
            style={{ ...style,display: "block" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} ${styleClick["slick-next"]}`}
            style={{ ...style, left:"-70px", display: "block" }}
            onClick={onClick}
        />
    );
}


export default function ReactSlick(props) {
    const dispatch = useDispatch()
    const { dangChieu, sapChieu } = useSelector(state => state.QuanLyPhimReducer)
    let activeClassDC = dangChieu === true ? "active" : "none-active"
    let activeClassSC = sapChieu === true ? "active" : "none-active"
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    dots: false,
                    nextArrow: false,
                    prevArrow: false,
                    arrows: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    nextArrow: false,
                    prevArrow: false,
                     arrows: false
                }
            },
            {
                breakpoint: 414,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    nextArrow: false,
                    prevArrow: false,
                     arrows: false
                }
            }
        ],
    }


    const renderMovie = () =>{
        return props.danhSachMovie.map((item,index)=>{
            return <div key={index}>
                <Movie movie={item}/>
            </div>
        })
    }

    return (
        <div>
           <div  style={{textAlign:"center", marginTop:80, marginBottom:35}}>
                <button className={`${styleClick[activeClassDC]} mr-2`} onClick={() =>{
                    const action = { type: LAY_DANH_SACH_PHIM_DANG_CHIEU}
                   dispatch(action)
                }} style={{ padding: "8px 30px", fontSize: 16, fontWeight: 600, borderRadius: 15}}>ĐANG CHIẾU</button>
                <button className={`${styleClick[activeClassSC]}`} onClick={() =>{
                    const action = { type: LAY_DANH_SACH_PHIM_SAP_CHIEU}
                    dispatch(action)
                }}  style={{ padding: "8px 30px", fontSize: 16, fontWeight: 600, color:"black", backgroundColor:"white", borderRadius:15}}>SẮP CHIẾU</button>
           </div>
            <Slider {...settings}>
            {renderMovie()}
            </Slider>
        </div>
    )
}
