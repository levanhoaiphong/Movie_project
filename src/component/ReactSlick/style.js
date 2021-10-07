import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => {
    return {
        root: {
            maxWidth: 280,
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
        active: {
            backgroundColor:"gray",
            color:"white"
        },
        noneActive: {
            backgroundColor: "white",
            color: "gray"
        }
    }
})

export default useStyles