import { Container, Grid, Typography, useMediaQuery, useTheme, Button } from '@material-ui/core'
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useStyle from './style';
import '../../assets/style.css'
import { Tabs } from "antd";
import './style.css'
import { layThongTinLichChieuPhim } from '../../redux/action/QuanLyCumRapAction';
import { NavLink } from 'react-router-dom';


const { TabPane } = Tabs;
export default function Detail(props) {
    const [state] = useState({
        tabPosition: "left",
    });
    const [stateTop] = useState({
        tabPosition: "top",
    });
    const theme = useTheme()
    const dispatch = useDispatch()
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"))
    const classes = useStyle()
    const { filmDetail } = useSelector(state => state.QuanLyRapReducer)
    console.log(filmDetail)
    useEffect(() => {
        let { id } = props.match.params
        dispatch(layThongTinLichChieuPhim(id))
    }, [])
    const { tabPosition } = state;
    const { tabPositionTop } = stateTop;
    return (
        <div style={{
            backgroundImage: `url(${filmDetail.hinhAnh})`,
            backgroundPosition: "center",
            backgroundSize: "100% 100%",
            minHeight: "100vh",
            backgroundRepeat: "no-repeat",
        }}>
            <CustomCard
                style={{ paddingTop: 150, minHeight: "100vh" }}
                effectColor="#fff" // required
                color="#fff" // default color is white
                blur={7} // default blur value is 10px
                borderRadius={0} // default border radius value is 10px
            >
                <div className="container">
                    <div className="row container-row">
                        <div className="col-md-4 col-xs-12">
                            <div className="image">
                                <img className="image_film" src={filmDetail.hinhAnh} />
                            </div>
                        </div>
                        <div className="col-md-8 col-xs-12 ">
                            <div className="content">
                                <h2 className="content-tenphim">{filmDetail.tenPhim}</h2>
                                <div className="content-overview">
                                    <span className="content-overview_title">Ng??y chi???u: </span>
                                    <span className="content-overview_decs">{moment(filmDetail.ngayKhoiChieu).format('DD/MM/YYYY')}</span>
                                </div>
                                <div className="content-overview">
                                    <span className="content-overview_title">M?? t???: </span>
                                    <span className="content-overview_decs content-overview-mota">{filmDetail.moTa}</span>
                                </div>
                                <div >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {isMobile ? (<div className="container boxSadow" >
                    <h1 className="text-center">L???ch chi???u</h1>
                    <Tabs centered defaultActiveKey="1">
                        <TabPane tab="L???ch chi???u" key="1">
                            <Tabs centered tabPosition={tabPositionTop}>
                                {filmDetail.heThongRapChieu?.map((htr, index) => {
                                    return <TabPane tab={<div style={{ textTransform: "uppercase" }}><img src={htr.logo} className="mr-3" width="35" height="35" />{htr.tenHeThongRap}</div>} key={index}>
                                        {htr.cumRapChieu?.map((cumRap, index) => {
                                            return <div key={index}>

                                                <Grid container className="mb-5 pl-2" >
                                                    <Grid md={12} sm={12}>
                                                        <div style={{ display: "flex", marginBottom: 10 }}>
                                                            <img src={cumRap.hinhAnh} width="50" height="50px" />
                                                            <div style={{ color: "gray", marginBottom: 15 }} className="ml-3">
                                                                <Typography style={{ fontWeight: 700, textTransform: "uppercase" }} variant="body">{cumRap.tenCumRap}</Typography>
                                                                <br />
                                                                <Typography variant="body-1">{cumRap.diaChi}</Typography>
                                                            </div>
                                                        </div>
                                                    </Grid>
                                                    <Grid item md={12} sm={12}>
                                                        {cumRap.lichChieuPhim?.slice(0, 12).map((lichChieu, index) => {
                                                            return <NavLink variant="contained" component={Button} className={classes.styleButton} to={`/checkout/${lichChieu.maLichChieu}`} key={index}>
                                                                {moment(lichChieu.ngayChieuGioChieu).format('hh.mm.A')}
                                                            </NavLink>
                                                        })}
                                                    </Grid>
                                                </Grid>
                                            </div>
                                        })}
                                    </TabPane>
                                })}
                            </Tabs>
                        </TabPane>
                        <TabPane tab="Th??ng tin" key="2">
                            <Container maxWidth="lg">
                                <Grid id="gird" container spacing={10}>
                                    <Grid item md={5}>
                                        <div className="content-detail">
                                            <Typography className="content-detail_title">Ng??y kh???i chi??u: </Typography>
                                            <Typography className="content-detail_info">09.04.2021</Typography>
                                        </div>
                                        <div className="content-detail">
                                            <Typography className="content-detail_title">?????o di???n: </Typography>
                                            <Typography className="content-detail_info">Kim Joo-Hwan</Typography>
                                        </div>
                                        <div className="content-detail">
                                            <Typography className="content-detail_title">Di???n vi??n: </Typography>
                                            <Typography className="content-detail_info">Choi Woo Sik, Ahn Sung Ki, Park Seo Joon, Woo Do Hwan</Typography>
                                        </div>
                                        <div className="content-detail">
                                            <Typography className="content-detail_title">Th??? lo???i:</Typography>
                                            <Typography className="content-detail_info">H??nh ?????ng, Horor</Typography>
                                        </div>

                                    </Grid>
                                    <Grid item md={7}>
                                        <div className="content_info">
                                            <Typography className="content_info_title">N???i dung: </Typography>
                                            <Typography className="content_info_info">Sau khi b???n th??n b???ng nhi??n s??? h???u ???B??n tay di???t qu??????, v?? s?? MMA Yong Hu (Park Seo Joon th??? vai) ???? d???n th??n v??o h??nh tr??nh tr??? t??, tr???c qu??? ?????i ?????u v???i Gi??m M???c B??ng T???i (Woo Do Hwan) ??? t??n qu??? Satan ?????t l???t ng?????i. T??? ???? s??? th???t v??? c??i ch???t c???a cha Yong Hu c??ng d???n ???????c h?? l??? c??ng nh?? nguy??n nh??n anh tr??? th??nh ???ng?????i ???????c ch???n???.</Typography>
                                        </div>
                                    </Grid>
                                    <Grid>

                                    </Grid>
                                </Grid>
                            </Container>
                        </TabPane>
                        <TabPane tab="????nh gi??" key="3">
                            Content of Tab Pane 3
                        </TabPane>
                    </Tabs>
                </div>) : <div className="container mt-5 boxSadow">
                    <h1 className="text-center">L???ch chi???u</h1>
                    <Tabs centered defaultActiveKey="1">

                        <TabPane tab="L???ch chi???u" key="1">
                            <Tabs centered tabPosition={tabPosition}>
                                {filmDetail.heThongRapChieu?.map((htr, index) => {
                                    return <TabPane tab={<div style={{ textTransform: "uppercase" }}><img src={htr.logo} className="mr-3" width="35" height="35" />{htr.tenHeThongRap}</div>} key={index}>
                                        {htr.cumRapChieu?.map((cumRap, index) => {
                                            return <div key={index}>

                                                <Grid container className="mb-5 pl-2" >
                                                    <Grid md={12} sm={12}>
                                                        <div style={{ display: "flex", marginBottom: 10 }}>
                                                            <img src={cumRap.hinhAnh} width="50" height="50px" />
                                                            <div style={{ color: "gray", marginBottom: 15 }} className="ml-3">
                                                                <Typography style={{ fontWeight: 700, textTransform: "uppercase" }} variant="body">{cumRap.tenCumRap}</Typography>
                                                                <br />
                                                                <Typography variant="body-1">{cumRap.diaChi}</Typography>
                                                            </div>
                                                        </div>
                                                    </Grid>
                                                    <Grid item md={12} sm={12}>
                                                        {cumRap.lichChieuPhim?.slice(0, 12).map((lichChieu, index) => {
                                                            return <NavLink variant="contained" component={Button} className={classes.styleButton} to={`/checkout/${lichChieu.maLichChieu}`} key={index}>
                                                                {moment(lichChieu.ngayChieuGioChieu).format('hh.mm.A')}
                                                            </NavLink>
                                                        })}
                                                    </Grid>
                                                </Grid>
                                            </div>
                                        })}
                                    </TabPane>
                                })}
                            </Tabs>
                        </TabPane>
                        <TabPane tab="Th??ng tin" key="2">
                           <Container maxWidth="lg">
                                <Grid container spacing={10}>
                                    <Grid item md={5}>
                                        <div className="content-detail">
                                            <Typography  className="content-detail_title">Ng??y kh???i chi??u: </Typography>
                                            <Typography  className="content-detail_info">09.04.2021</Typography>
                                        </div>
                                         <div className="content-detail">
                                          <Typography  className="content-detail_title">?????o di???n: </Typography>
                                            <Typography className="content-detail_info">Kim Joo-Hwan</Typography>
                                        </div>
                                         <div className="content-detail">
                                          <Typography  className="content-detail_title">Di???n vi??n: </Typography>
                                            <Typography  className="content-detail_info">Choi Woo Sik, Ahn Sung Ki, Park Seo Joon, Woo Do Hwan</Typography>
                                        </div>
                                         <div className="content-detail">
                                          <Typography className="content-detail_title">Th??? lo???i:</Typography>
                                        <Typography className="content-detail_info">H??nh ?????ng, Horor</Typography>
                                        </div>

                                    </Grid>
                                    <Grid item md={7}>
                                        <div className="content_info">
                                            <Typography  className="content_info_title">N???i dung: </Typography>
                                            <Typography  className="content_info_info">Sau khi b???n th??n b???ng nhi??n s??? h???u ???B??n tay di???t qu??????, v?? s?? MMA Yong Hu (Park Seo Joon th??? vai) ???? d???n th??n v??o h??nh tr??nh tr??? t??, tr???c qu??? ?????i ?????u v???i Gi??m M???c B??ng T???i (Woo Do Hwan) ??? t??n qu??? Satan ?????t l???t ng?????i. T??? ???? s??? th???t v??? c??i ch???t c???a cha Yong Hu c??ng d???n ???????c h?? l??? c??ng nh?? nguy??n nh??n anh tr??? th??nh ???ng?????i ???????c ch???n???.</Typography>
                                        </div>
                                    </Grid>
                                     <Grid>
                                        
                                    </Grid>
                                </Grid>
                            </Container>
                        </TabPane>
                        <TabPane tab="????nh gi??" key="3">
                            Content of Tab Pane 3
                        </TabPane>
                    </Tabs>
                </div>}
            </CustomCard>
        </div>
    )
}
