import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme)=>{
    return {
        radius:{
            borderRadius:"50%",
            width:50,
            height:50,
        },
        timeMovie:{
            backgroundColor: "gray",
            margin: "12px 0 10px 0",
            marginRight: 8,
            padding:"8px 15px",
            color:"white",
            borderRadius:8,
            "&:hover": {
                backgroundColor: "orange !important",
                color: "black",
            }
        },
        cardContainer: {
            border: "1px soild red !important",
            margin:"100px 0",
          
        },
    }
})

export default useStyles