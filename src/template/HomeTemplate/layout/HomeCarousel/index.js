import React, { useEffect } from "react";
import { Carousel } from "antd";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./style";
import './style.css'
import { layDanhSachBanner } from "../../../../redux/action/CarouselAction";

export default function HomeCarousel() {
    const dispatch = useDispatch()
    const { carouselImg } = useSelector(state => state.CarouselReducer)
    const classes = useStyles()

    useEffect(()=>{
        dispatch(layDanhSachBanner())
    },[])

    const renderCrousel = () => {
        return carouselImg.map((img, index) => {
            return <div key={index}>
                <div key={index} className={classes.contentStyle} style={{ backgroundImage: `url(${img.hinhAnh})` }}>
                    {/* <img src={img.hinhAnh} style={contentStyle} width="100%"/> */}
                </div>
            </div>
        })
    }
    return (
        <Carousel effect="fade">
            {renderCrousel()}
        </Carousel>
    );
}
