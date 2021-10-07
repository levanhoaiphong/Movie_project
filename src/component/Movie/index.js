import React, { Fragment } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from './style';
import './style.css'
import { NavLink } from 'react-router-dom';

export default function Movie(props) {
    const { movie } = props
    const classes = useStyles()
    return (
        <Fragment>
            <Card classname={classes.root} style={{ margin: "0 10px", borderRadius: 15, }} elevation={1}>
                <CardActionArea className="card">
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="400"
                        image={movie.hinhAnh}
                        title="Contemplative Reptile"
                    />
                    <CardContent className="descriptions" style={{ height: "100%" }}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {movie.tenPhim.length > 30 ? <span >{movie.tenPhim.slice(0, 30)}...</span> : <span style={{ paddingBottom: "50px !important" }}>{movie.tenPhim}</span>}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {movie.moTa.length > 400 ? <span>{movie.moTa.slice(0, 400)}...</span> : <span>{movie.moTa}</span>}
                        </Typography>
                        <CardActions className={classes.button}>
                             <NavLink component={Button} to={`/detail/${movie.maPhim}`} variant="contained" color="secondary">Detail</NavLink>
                            <Button variant="contained" color="primary" >Xem trailer </Button>
                           
                        </CardActions>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Fragment>
    )
}
