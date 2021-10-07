import React, { Fragment } from 'react'
import { AppBar, Toolbar, IconButton, MenuItem, Menu, useMediaQuery, useTheme, Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './style';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { REMOVE_USER } from '../../../../redux/type/QuanLyNguoiDungType';
import { signOut } from '../../../../redux/action/QuanLyNguoiDung';



export default function Header(props) {
    const theme = useTheme()
    const history = useHistory()
    const classes = useStyles();
    const dispatch = useDispatch()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"))
    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (pageUrl) => {
        history.push(pageUrl)
        setAnchorEl(null);
    };
    const rederLogin = () => {
        if (_.isEmpty(userLogin)) {
            return <Fragment>
                <NavLink className={classes.buttonText} component={Button} to="/signin" variant="text"  >Login</NavLink>
                <NavLink className={classes.buttonText} component={Button} to="/register" variant="text" >Register</NavLink>
            </Fragment>
        }
        return <div className="dropdown">
            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >Hello, {userLogin.taiKhoan}</button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <button onClick={()=>{
                    dispatch(signOut())
                }} className="dropdown-item" href="#">Logout</button>
                <a className="dropdown-item" href="#">Profile</a>
            </div>
        </div>



    }
    return (
        <div className={classes.root}>
            <AppBar className={classes.bgTransparent} position="static">
                <Toolbar className={classes.display}>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <img src="https://tix.vn/app/assets/img/icons/web-logo.png" alt="" style={{ width: 50, height: 50 }} />
                    </IconButton>
                    {isMobile ? (<div>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <MenuIcon className={classes.menuIcon} />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={() => setAnchorEl(null)}

                        >   <MenuItem className={classes.buttonText} onClick={() => handleClose("/")}>Lịch chiếu</MenuItem>
                            <MenuItem className={classes.buttonText} onClick={() => handleClose}>Cụm rạp</MenuItem>
                            <MenuItem className={classes.buttonText} onClick={() => handleClose}>Tin tức</MenuItem>
                            <div>
                                {rederLogin()}
                            </div>
                        </Menu>
                    </div>) : <>
                        <div>
                            <NavLink className={classes.buttonText} component={Button} to="/" variant="text"  >Lịch chiếu</NavLink>
                            <NavLink className={classes.buttonText} component={Button} to="/" variant="text" >Cụm rạp</NavLink>
                            <NavLink className={classes.buttonText} component={Button} to="/" variant="text">Tin tức</NavLink>
                        </div>
                        <div>
                            {rederLogin()}
                        </div>
                    </>}
                </Toolbar>
            </AppBar>
        </div>
    )
}
