import React from 'react'
import { Tabs } from "antd";
import { Container, Grid, CardActionArea, CardMedia, Card, CardContent, Typography, Button, CardActions } from '@material-ui/core';
import { useSelector } from 'react-redux'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import './style.css'


const { TabPane } = Tabs;
export default function News() {

    const { arrNews, danhSachMovie, arrSell } = useSelector(state => state.QuanLyPhimReducer)

    const renderMovie = () => {
        return arrNews.map((movie, index) => {
            return <Grid item xs={12} md={6} key={index}>
                <a className="dienanh">
                    <div>
                        <h6>{movie.tenPhim}</h6>
                        <p>{movie.moTa.length > 100 ? <span>{movie.moTa.slice(0, 100)}...</span> : <span>{movie.moTa}</span>}</p>
                    </div>
                    <div><img style={{ width: 150, height: 150 }} src={movie.hinhAnh} /></div>
                </a>
            </Grid>
        })
    }
    const renderReview = () => {
        return danhSachMovie?.slice(0, 6).map((review, index) => {
            return <Grid item xs={12} md={6} key={index}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="250"
                            image={review.hinhAnh}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                               Review: {review.tenPhim}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {review.moTa.length > 100 ? <span>{review.moTa.slice(0,100)}...</span> : <span>{review.moTa}</span> }
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small">
                            <ThumbUpIcon/> <span style={{fontSize:20, marginLeft:5}}>1</span>
                        </Button>
                        <Button size="small" >
                            < ChatBubbleOutlineIcon /> <span style={{ fontSize: 20, marginLeft: 5 }}>1</span>
                        </Button>
                       
                    </CardActions>
                </Card>
            </Grid>
        })
    }
    const renderSell = () =>{
        return arrSell.map((sell, index)=>{
            return <Grid item xs={12} md={6} key={index}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="250"
                            image={sell.hinhAnh}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Review: {sell.tenPhim}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {sell.moTa.length > 100 ? <span>{sell.moTa.slice(0, 100)}...</span> : <span>{sell.moTa}</span>}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small">
                            <ThumbUpIcon /> <span style={{ fontSize: 20, marginLeft: 5 }}>1</span>
                        </Button>
                        <Button size="small" >
                            < ChatBubbleOutlineIcon /> <span style={{ fontSize: 20, marginLeft: 5 }}>1</span>
                        </Button>

                    </CardActions>
                </Card>
            </Grid>
        })
    }
    return (
        <Container style={{ margin: "70px 0px" }}>
            <Tabs centered defaultActiveKey="1" onChange={(key) => { }}>
                <TabPane tab={<h4>Tin tức</h4>} key="1"
                >
                    <Grid container spacing={1}>
                        {renderMovie()}
                    </Grid>

                </TabPane>
                <TabPane tab={<h4>Review</h4>} key="2">
                    <Grid container spacing={1}>
                        {renderReview()}
                    </Grid>
                </TabPane>
                <TabPane tab={<h4>Khuyến mãi</h4>} key="3">
                    <Grid container spacing={1}>
                        {renderSell()}
                    </Grid>
                </TabPane>
            </Tabs>
        </Container>
    )
}
