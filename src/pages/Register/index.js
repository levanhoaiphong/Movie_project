import React from 'react'
import { TextField, Button, Grid } from '@material-ui/core'
import { useFormik } from 'formik'
import useStyle from './style'
import { GROUPID } from '../../util/config'
import axios from 'axios'
import { useHistory } from 'react-router'

export default function Register() {
    const classes = useStyle()
    const history = useHistory()
    const formik = useFormik({
        initialValues:{
            taiKhoan: "",
            matKhau: "",
            email: "",
            soDt: "",
            hoTen: "",
            maNhom: GROUPID,
        }
    })
    const registerUser = () =>{
        axios({
            url:"https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
            method: "POST",
            data: formik.values,
            headers: {
                TokenCybersoft:
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAwOSIsIkhldEhhblN0cmluZyI6IjI3LzAxLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY0MzI0MTYwMDAwMCIsIm5iZiI6MTYxNjM0NjAwMCwiZXhwIjoxNjQzMzg5MjAwfQ.NEQRF8SKORq7R7kYbYCCO9ZZXYxTWlbaTc2wxXWMfiw",
            },
        })
        .then((res)=>{
            alert("Đăng ký thành công")
            goToSignin(res.data.message)
        })
        .catch((errors)=>{
            alert(errors.respose.data)
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        registerUser()
    }
    const goToSignin  = (message) =>{
        alert(message)
        history.push("/signin")
    }
    return (
        <Grid container spacing={2}>
            <Grid item md={9} sm={12}>
                <div className={classes.img} style={{ backgroundImage: 'url(https://tix.vn/app/assets/img/icons/bg2.jpg)', height: "100vh", width: "100vw", backgroundSize: "cover", backgroundPosition: "center" }}></div>
            </Grid>
            <Grid item md={3} sm={12}>
                <div className={classes.formSignin}>
                    <form onSubmit={handleSubmit}>
                        <div className={classes.textField}>
                            <TextField name="taiKhoan" value={formik.values.taiKhoan} onChange={formik.handleChange} label="Tài Khoản" variant="outlined" margin="normal" fullWidth />
                        </div>
                        <div className={classes.textField}>
                            <TextField name="matKhau" value={formik.values.matKhau} onChange={formik.handleChange} label="Mật Khẩu" variant="outlined" margin="normal" fullWidth />
                        </div>
                        <div className={classes.textField}>
                            <TextField name="email" value={formik.values.email} onChange={formik.handleChange} label="Email" variant="outlined" margin="normal" fullWidth />
                        </div>
                        <div className={classes.textField}>
                            <TextField name="soDt" value={formik.values.soDt} onChange={formik.handleChange} label="Số điện thoại" variant="outlined" margin="normal" fullWidth />
                        </div>
                        <div className={classes.textField}>
                            <TextField name="hoTen" value={formik.values.hoTen} onChange={formik.handleChange} label="Họ tên" variant="outlined" margin="normal" fullWidth />
                        </div>
                        <div className={classes.textField}>
                            <Button type="submit" variant="contained" color="primary">Đăng ký</Button>
                        </div>
                    </form>
                </div>
            </Grid>
        </Grid>
    )
}
