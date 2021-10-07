import { makeStyles } from "@material-ui/core";
import zIndex from "@material-ui/core/styles/zIndex";


const useStyle = makeStyles((theme) => {
    return {
        title: {
            textTransform: "uppercase",
            fontWeight: 600,
            marginBottom: 15
        },
        content_overview: {
            display: "flex",
            marginBottom: 10,
            alignItems: "center",
            justifyContent: "space-between"
        },
        content_overview_title: {
            fontSize: 18,
            width: 120
        },
        content_overview_info: {
            fontSize: 18,
            color: "black",
            padding: 10,
            fontWeight: 600,
        },
        content_booking_movie: {
            padding: "20px 20px",
            backgroundColor: "#FF8C00!important",
            height: "auto",
            width: "100%"
        },
        content_overview_button: {
            display: "table-cell",
        },
        contentBotton: {
            margin: "40px 0",
            fontWeight: 700,
            backgroundColor: "gray"
        },
        content_booking: {
            width: "100%",
            backgroundColor: "#EE7600",
            transition: "all 1s",
            "&:hover": {
                backgroundColor: "#CD6600",
                color: "white"
            }
        },

        screen_top: {
            backgroundColor: "#DDDDDD",
            width: "100%",
            height: 20,
            zIndex: 5,
        },
        ghe: {
            minWidth: "40px !important",
            height: "35px",
            boder: "none",
            borderRadius: "5px",
            cursor: "pointer",
            margin: "10px 5px",
            backgroundColor: "rgb(123,122,122)",
            color: "#fff",
        },
        gheVip: {
            backgroundColor: "rgb(228,74,8)",
        },
        gheDaDat: {
            backgroundColor: "white",
            color: "orange",
            border: "1px solid #b1154a",
            cursor: "no-drop",
            fontWeight: "bold",
        },
        gheDangDat: {
            backgroundColor: "rgb(18,176,18) !important",
        },
    }
})

export default useStyle