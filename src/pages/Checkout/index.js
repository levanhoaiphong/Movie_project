import { Container, Grid, Typography, Button, useTheme, useMediaQuery, Card, CardContent, Paper } from '@material-ui/core'
import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { datVeAction, layChiTietPhongVeAction } from '../../redux/action/QuanLyPhongVeAction'
import useStyle from './style'
import { experimentalStyled as styled } from '@material-ui/core'
import './style.css'
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import CloseIcon from '@material-ui/icons/Close';
import { CHUYEN_TAB_ACTIVE, DAT_VE } from '../../redux/type/QuanLyDatVeType'
import _ from 'lodash'
import { ThongTinDatVe } from '../../_core/models/ThongTinDatVe'
import { Tabs } from "antd";
import { layThongTinTaiKhoanAction } from '../../redux/action/QuanLyNguoiDung'
import { CHUYEN_TAB } from "../../redux/type/QuanLyDatVeType"
import moment from 'moment'

const { TabPane } = Tabs;

function Checkout(props) {
    const classes = useStyle()
    const dispatch = useDispatch()
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"))

    const { chiTietPhongVe, danhSachGheDangDat } = useSelector(state => state.QuanLyDatVeReducer)
    const { thongTinPhim, danhSachGhe } = chiTietPhongVe

    const handleBooking = () => {
        const thongTinDatVe = new ThongTinDatVe
        thongTinDatVe.maLichChieu = props.match.params.id;
        thongTinDatVe.danhSachVe = danhSachGheDangDat;
        dispatch(datVeAction(thongTinDatVe))
    }

    useEffect(() => {
        dispatch(layChiTietPhongVeAction(props.match.params.id))
    }, [])

    const renderSeats = () => {
        return danhSachGhe?.map((ghe, index) => {
            const { gheDangDat } = classes
            const classGheVip = ghe.loaiGhe === "Vip" ? `${classes.gheVip}` : "";
            const classGheDaDat = ghe.daDat === true ? `${classes.gheDaDat}` : "";

            let classGheDangDat = '';
            let indexGheDD = danhSachGheDangDat.findIndex(
                (gheDD) => gheDD.maGhe === ghe.maGhe
            );
            if (indexGheDD != -1) {
                classGheDangDat = `${gheDangDat}`;
            }

            return (
                <Fragment key={index} >
                    {isMobile ? <><button onClick={() => {
                        dispatch({
                            type: DAT_VE,
                            payload: ghe
                        })
                    }}

                        style={{ margin: "10px 3px", }} className={`${classes.ghe} ${classGheVip} ${classGheDaDat} ${classGheDangDat}`}>{ghe.stt}</button>
                        {(index + 1) % 8 === 8 ? <br /> : ""}</> : <><button onClick={() => {
                            dispatch({
                                type: DAT_VE,
                                payload: ghe
                            })
                        }}
                            disabled={ghe.daDat}
                            className={`${classes.ghe} ${classGheVip} ${classGheDaDat} ${classGheDangDat}`}>{ghe.daDat ? classGheDaDat != '' ? <PermIdentityIcon /> : <CloseIcon /> : ghe.stt}</button>
                        {(index + 1) % 16 === 16 ? <br /> : ""}</>}
                </Fragment>
            )
        })
    }
    return (

        <div maxWidth="lg" style={{ marginTop: 20 }}>
            <Grid container spacing={2}>
                <Grid item md={8} xs={12}>
                    <div className={classes.screen}>
                        <div className={classes.screen_top}></div>
                        <div className="trapezoid"><h5 className="pt-3">Screen in shows </h5></div>
                    </div>

                    <div className="seats">
                        <div className="seats-info">
                            <button className={classes.ghe} >00</button>
                            <Typography className="seats-info__name">Ghế chưa đặt</Typography>
                        </div>
                        <div className="seats-info">
                            <button className={`${classes.ghe} ${classes.gheDangDat}`} >00</button>
                            <Typography variant="body1">Ghế đang đặt</Typography>
                        </div>
                        <div className="seats-info">
                            <button className={`${classes.ghe} ${classes.gheVip}`} >00</button>
                            <Typography variant="body2">Ghế Vip</Typography>
                        </div>
                        <div className="seats-info">
                            <button className={`${classes.ghe} ${classes.gheDaDat}`}>00</button>
                            <Typography variant="body2">Ghế được đăt</Typography>
                        </div>
                        <div className="seats-info">
                            <button className={`${classes.ghe} ${classes.gheKhachDat}`}>00</button>
                            <Typography variant="body2">Ghế khách đang đặt</Typography>
                        </div>
                    </div>
                    <div style={{ textAlign: "center" }}>{renderSeats()}</div>

                </Grid>
                <Grid item md={4} xs={12} className="mb-5">
                    <div className={classes.content_booking_movie}>
                        <Typography align="center" className={classes.title} variant="h5">{thongTinPhim?.tenPhim}</Typography>
                        <div className={classes.content_overview}>
                            <Typography variant="body2" className={classes.content_overview_title}>Ngày chiếu: </Typography>
                            <Typography variant="body2" className={classes.content_overview_info}>{thongTinPhim?.ngayChieu} - {thongTinPhim?.gioChieu}</Typography>
                        </div>
                        <div className={classes.content_overview}>
                            <Typography variant="body2" className={classes.content_overview_title}>Cụm rạp: </Typography>
                            <Typography variant="body2" className={classes.content_overview_info}>{thongTinPhim?.tenCumRap}</Typography>
                        </div>
                        <div className={classes.content_overview}>
                            <Typography variant="body2" className={classes.content_overview_title}>Rạp: </Typography>
                            <Typography variant="body2" className={classes.content_overview_info}>{thongTinPhim?.tenRap}</Typography>
                        </div>
                        <div className={classes.content_overview}>
                            <Typography variant="body2" className={classes.content_overview_title}>Địa chỉ: </Typography>
                            <Typography variant="body2" className={classes.content_overview_info}>{thongTinPhim?.diaChi.length > 31 ? <span>{thongTinPhim?.diaChi.slice(0, 31)}...</span> : <span>{thongTinPhim?.diaChi}</span>}</Typography>
                        </div>
                        <div className={classes.content_overview}>
                            <Typography variant="body2" className={classes.content_overview_title}>Ghế chọn: </Typography>
                            <div>
                                {_.sortBy(danhSachGheDangDat, ["stt"]).map((gheDD, index) => {
                                    return <span key={index} style={{ color: "green", fontWeight: 700, fontSize: 20, wordBreak: "break-word", marginRight: 5 }}>{gheDD.stt}</span>

                                })}
                            </div>
                        </div>
                        <hr className={classes.contentBotton} />
                        <div className={classes.content_overview}>
                            <Typography variant="body2" className={classes.content_overview_title}>Email: </Typography>
                            <Typography variant="body2" className={classes.content_overview_info}>phonglvh995@gmail.com</Typography>
                        </div>
                        <div className={classes.content_overview}>
                            <Typography variant="body2" className={classes.content_overview_title}>Phone: </Typography>
                            <Typography variant="body2" className={classes.content_overview_info}>0123456789</Typography>
                        </div>
                        <div className={classes.content_overview}>
                            <Typography variant="body2" className={classes.content_overview_title}>Tổng tiền: {""} </Typography>
                            <Typography variant="body2" className={classes.content_overview_info}>{danhSachGheDangDat.reduce((tongTien, ghe, index) => {
                                return (tongTien += ghe.giaVe)
                            }, 0)}</Typography>
                        </div>
                        <div className={classes.contentBotton}>
                            <Button onClick={handleBooking} className={classes.content_booking} variant="contained">Đặt vé</Button>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

function callback(key) { }
export default function CheckoutTab(props) {
    const { tabActive } = useSelector(state => state.QuanLyDatVeReducer)
    const dispatch = useDispatch()
    return <Container style={{ marginTop: 70 }}>
        <Tabs defaultActiveKey="1" activeKey={tabActive} onChange={(key) => {
            dispatch({
                type: CHUYEN_TAB_ACTIVE,
                number: key
            })
        }}>
            <TabPane tab="01. Chọn ghế & Thanh toán" key="1"
            >
                <Checkout {...props} />
            </TabPane>
            <TabPane tab="02. Kết quả đặt vé" key="2">
                <KetQuaDatVe {...props} />
            </TabPane>
        </Tabs>
    </Container>

}

function KetQuaDatVe(props) {
    const dispatch = useDispatch()
    const classes = useStyle()
    const { thongTinNguoiDung } = useSelector(state => state.QuanLyNguoiDungReducer)
    console.log("🚀 ~ file: index.js ~ line 185 ~ KetQuaDatVe ~ console.log(thongTinNguoiDung)", console.log(thongTinNguoiDung))
    useEffect(() => {
        dispatch(layThongTinTaiKhoanAction())
    }, [])

    const renderTicketItem = function () {
        return thongTinNguoiDung.thongTinDatVe?.map((ticket, index) => {
            const seats = _.first(ticket.danhSachGhe)
            return (
                <Grid item xs={12} md={4} key={index}>
                    <Card style={{height: "400px" }} className="mb-2" >
                        <div style={{textAlign:"center"}}>
                            <img style={{ width: 100, height: 100, borderRadius: "50%" }} src={ticket.hinhAnh} />
                        </div>
                        <CardContent style={{height:"auto"}}>
                                <Typography className="mb-3" align="center" component="h4" variant="h6" style={{fontWeight:600}}>{ticket.tenPhim}</Typography>
                            <p style={{fontSize:15}}><span style={{ fontWeight: 600 }}>Giờ chiếu:</span> {moment(ticket.ngayDat).format('hh:mm A')} - <span style={{ fontWeight: 600 }}>Ngày chiếu: </span> {moment(ticket.ngayChieu).format('DD-MM-YYYY')} .</p>
                            <p style={{ fontSize: 15 }}><span style={{ fontWeight: 600 }}>Địa điểm: </span> {seats.tenHeThongRap}</p>
                            <p style={{ fontSize: 15 }}><span style={{ fontWeight: 600 }}>Tên rạp: </span>{seats.tenCumRap} - <span style={{ fontWeight: 600 }}>Ghế: </span> {ticket.danhSachGhe.map((ghe, index) => { return <span key={index} style={{ color: "green", fontWeight: 700, fontSize: 18, wordBreak: "break-word", marginRight: 3 }}>{`[${ghe.tenGhe}]`}</span> })}</p>
                            </CardContent>
                        
                    </Card>
                </Grid>
            )
        })
    }
    return <Container>
        <Typography className=" mt-5" align="center" variant="h4" style={{ color: "#FF8C00"}}> Lịch sử đặt vé khách hàng</Typography>
        <Typography className=" mt-2" align="center" variant="body1">Hãy xem thông tin địa chỉ và thời gian để xem phim vui vẻ bạn nhé!</Typography>    
        <Container style={{marginTop:90}}>
            <Grid container spacing={4}>
                {renderTicketItem()}
            </Grid>
        </Container>
    </Container>
}

