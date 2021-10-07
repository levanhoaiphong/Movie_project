import React from 'react'
import { TextField, Button, Grid, Typography } from '@material-ui/core'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { NavLink } from 'react-router-dom'
import { dangNhapAction } from '../../redux/action/QuanLyNguoiDung'
import useStyle from './style'

export default function Signin(props) {
    const classes = useStyle()
    const dispatch = useDispatch()
    const history = useHistory()
    const formik = useFormik({
        initialValues:{
            taiKhoan:"",
            matKhau:"",
        }
    })
    const { values } = formik
    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(dangNhapAction(values, goHome))
    }
    const goHome =()=>{
        history.push('/')
    }
    return (
        <Grid container spacing={2}>
            <Grid item md={9}>
                <div className={classes.img} style={{ backgroundImage: 'url(https://tix.vn/app/assets/img/icons/bg2.jpg)', height: "100vh", width: "100vw", backgroundSize: "cover", backgroundPosition: "center" }}></div>
            </Grid>
            <Grid item md={3}>
                <div className={classes.formSignin}>
                    <form onSubmit={handleSubmit}>
                        <div className={classes.textField}>
                            <TextField name="taiKhoan" value={formik.values.taiKhoan} onChange={formik.handleChange} label="Tài Khoản" variant="outlined" margin="normal" fullWidth />
                        </div>
                        <div className={classes.textField}>
                            <TextField name="matKhau" value={formik.values.matKhau} onChange={formik.handleChange} label="Mật khâu" variant="outlined" margin="normal" fullWidth />
                        </div>
                        <div className={classes.textField}>
                            <Button type="submit" variant="contained" color="primary">Đăng nhập</Button>
                        </div>
                    </form>
                    <div className={classes.createAccount}>
                        <Typography variant="h5">Don't have an account?</Typography>
                        <NavLink to="/register" component={Button} variant="contained">Create new</NavLink>
                    </div>
                </div>
            </Grid>
        </Grid>

    )
}
