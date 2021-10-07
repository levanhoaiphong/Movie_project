import { makeStyles } from "@material-ui/core";
import { wrap } from "lodash-es";


const useStyles = makeStyles((theme) => {
    return {
        root: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            height: "450px",
            [theme.breakpoints.down("sm")]: {
                maxWidth: 400,

            },
            [theme.breakpoints.up("sm")]: {
                maxWidth: 230,
            },
            [theme.breakpoints.up("lg")]: {
                maxWidth: 290,
            },
        },
        button: {
            position: "absolute",
            bottom:"10%",
            width:"100%",
            left:"0",
            display:"flex",
            justifyContent:"space-around",
            zIndex:5
        }

    }
})

export default useStyles