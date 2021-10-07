import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        position: "fixed",
        zIndex: 5,
        width: "100%",
        top: 0,
        right: 0,
        clear: "both",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    display: {
        display: "flex",
        justifyContent: "space-between",
         backgroundColor: "white",
         boxShadow:0
    },
    bgTransparent: {
        background: "transparent",
        boxShadow: "none"
    },
    menuIcon: {
        fontSize: 30,
        color: "gray"
    },
    buttonText: {
        fontWeight: 400,
        color:"black",
        "&:hover": {
            fontWeight: 600,
            background: "transparent",
            color:"orange"
        }
    },
}));

export default useStyles