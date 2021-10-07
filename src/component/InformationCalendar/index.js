import React, { Fragment, useState } from 'react'
import { Tabs, Radio, Space } from 'antd';
import { Button, Container, Grid, useMediaQuery, useTheme } from '@material-ui/core';
import useStyles from './style';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

const { TabPane } = Tabs;
export default function InformationCalendar(props) {
    const classes = useStyles()
    const theme = useTheme()
    const [state, setState] = useState({
        tabPosition: "left",
    })
    const [stateTop, setStateTop] = useState({
        tabPosition: "top",
    });
    const changeTabPosition = (e) => {
        setState({ tabPosition: e.target.value });
    };
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"))

    const { heThongRapChieu } = props
    const { tabPosition } = state;
    const {tabPositionTop} = stateTop
    const renderHeThongRap = () => {
        return heThongRapChieu?.map((heThongRap, index) => {
            return (
                <TabPane
                    tab={<img src={heThongRap.logo} className={classes.radius} />}
                    key={index}
                >
                   {isMobile ? (<>
                        <Tabs tabPosition={tabPositionTop}>
                            {heThongRap.lstCumRap?.map((cumRap, index) => {
                                return (
                                    <TabPane forceRender={true} animated={true}
                                        tab={
                                            <div style={{ width: 250, display: "flex" }}>
                                                <img
                                                    src="https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png"
                                                    width="50"
                                                />
                                                <div className="ml-2" >
                                                    {cumRap.tenCumRap}
                                                    <p className="text-danger">Chi tiết</p>
                                                </div>
                                            </div>
                                        }
                                        key={index}
                                    >
                                        {cumRap.danhSachPhim.map((movie, index) => {
                                            return (
                                                <Fragment key={index}>
                                                    <div className="mb-5">
                                                        <div >
                                                            <Grid container >
                                                                <Grid item md={12} style={{ display: "flex" }}>
                                                                    <img
                                                                        src={movie.hinhAnh}
                                                                        alt={movie.tenPhim}
                                                                        width="100"
                                                                        height="100"
                                                                        onError={(e) => { e.target.onerror = null; e.target.src = "https://picsum.photos/200" }}
                                                                    />
                                                                    <div style={{ padding: 15 }}><h5 style={{ fontWeight: 700 }} className="text-gray">{movie.tenPhim}</h5>
                                                                        <p style={{ fontSize: 15, fontWeight: 500 }}>{cumRap.diaChi}</p></div>
                                                                </Grid>
                                                                <Grid item md={12} >
                                                                    {movie.lstLichChieuTheoPhim?.slice(0, 12).map((lichChieu, index) => {
                                                                        return <NavLink component={Button} className={classes.timeMovie} to={`/checkout/${lichChieu.maLichChieu}`} key={index}>
                                                                            {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                                        </NavLink>
                                                                    })}
                                                                </Grid>

                                                            </Grid>
                                                        </div>
                                                    </div>
                                                </Fragment>
                                            );
                                        })}
                                    </TabPane>
                                );
                            })}
                        </Tabs></>) : <> <Tabs tabPosition={tabPosition}>
                            {heThongRap.lstCumRap?.map((cumRap, index) => {
                                return (
                                    <TabPane forceRender={true} animated={true}
                                        tab={
                                            <div style={{ width: 250, display: "flex" }}>
                                                <img
                                                    src="https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png"
                                                    width="50"
                                                />
                                                <div className="ml-2">
                                                    {cumRap.tenCumRap}
                                                    <p className="text-danger">Chi tiết</p>
                                                </div>
                                            </div>
                                        }
                                        key={index}
                                    >
                                        {cumRap.danhSachPhim.map((movie, index) => {
                                            return (
                                                <Fragment key={index}>
                                                    <div className="mb-5">
                                                        <div >
                                                            <Grid >
                                                                <Grid item md={12} style={{ display: "flex" }}>
                                                                    <img
                                                                        src={movie.hinhAnh}
                                                                        alt={movie.tenPhim}
                                                                        width="100"
                                                                        height="100"
                                                                        onError={(e) => { e.target.onerror = null; e.target.src = "https://picsum.photos/200" }}
                                                                    />
                                                                    <div style={{ padding: 15 }}><h4 style={{ fontWeight: 700 }} className="text-gray">{movie.tenPhim}</h4>
                                                                        <p style={{ fontSize: 18, fontWeight: 500 }}>{cumRap.diaChi}</p></div>
                                                                </Grid>
                                                                <Grid item md={12} >
                                                                    {movie.lstLichChieuTheoPhim?.slice(0, 12).map((lichChieu, index) => {
                                                                        return <NavLink component={Button} className={classes.timeMovie} to={`/checkout/${lichChieu.maLichChieu}`} key={index}>
                                                                            {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                                        </NavLink>
                                                                    })}
                                                                </Grid>

                                                            </Grid>
                                                        </div>
                                                    </div>
                                                </Fragment>
                                            );
                                        })}
                                    </TabPane>
                                );
                            })}
                        </Tabs></>}
                </TabPane>
            )
        })
    }

    return (
        <Container className={classes.cardContainer}>
            {isMobile ? (<Fragment><Tabs tabPosition={tabPositionTop} style={{ overflow: "auto", height: 600, border: "1px soild red" }}>{renderHeThongRap()}</Tabs></Fragment>) : <><Tabs tabPosition={tabPosition} style={{ overflow: "auto", height: 600, border: "1px soild red" }}>{renderHeThongRap()}</Tabs></>}
        </Container >
    )
}
