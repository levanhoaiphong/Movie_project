import { Button, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";

export default function Footer() {
    const classes = useStyles();
  return (
    <div className={classes.bgColor}>
      <Container>
        <Grid className={classes.center} container spacing={3}>
          <Grid item md={3} xs={12}>
            <Typography className={classes.textUppercase} gutterBottom={true} variant="h6">Thông tin</Typography>
            <div>
              <Button variant="text">Giới thiệu</Button>
              <br />
              <Button variant="text">Tin tức</Button>
              <br />
              <Button variant="text">Hỏi đáp</Button>
              <br />
              <Button variant="text">Liên hệ</Button>
            </div>
          </Grid>
          <Grid item md={3} xs={12}>
            <Typography className={classes.textUppercase} gutterBottom={true} variant="h6">Chính sách và quy định</Typography>
            <Button  variant="text">Quy định chung</Button>
              <br />
            <Button variant="text">Điều khoản giao dịch</Button>
              <br />
            <Button variant="text">Chính sách bảo mật</Button>
              <br />
            <Button variant="text">Thông tin công ty</Button>
          </Grid>
          <Grid item md={3} xs={12}>
            <Typography className={classes.textUppercase} gutterBottom={true} variant="h6">Hệ thống rạp</Typography>
            <Button variant="text">CineStart Quốc Khánh</Button>
              <br />
            <Button variant="text">CineStart Đà Lạt</Button>
              <br />
            <Button variant="text">CineStart Hai Bà Trưng</Button>
              <br />
            <Button variant="text">CineStart Bình Dương</Button>
              <br />
            <Button variant="text">CineStart Huế</Button>
              <br />
            <Button variant="text">CineStart Mỹ Tho</Button>
          </Grid>
          <Grid item md={3} xs={12}>
            <Typography className={classes.textUppercase} gutterBottom={true} variant="h6">Cinestar</Typography>
            <Button variant="text">Phim đang chiếu</Button>
            <br />
            <Button variant="text">Phim sắp chiếu</Button>
            <br />
            <Button variant="text">Xuất chiếu đặt biệt</Button>
            <br />
            <Button variant="text">Lịch chiếu</Button>
            <br />
            <Button variant="text">Khuyến mãi</Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
