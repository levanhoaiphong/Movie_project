import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
    return {
        contentStyle: {
            height: "900px",
            color: "#fff",
            lineHeight: "60px",
            textAlign: "center",
            backgroundPosition: "center",
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            [theme.breakpoints.down("xs")]: {
                height: "350px !important",
            },
              [theme.breakpoints.down("md")]: {
                height: "500px",
            },
        },
    };
});

export default useStyles;
