import { makeStyles } from "@material-ui/core";


const useStyle = makeStyles((theme) => {
    return {
        styleButton:{
            color:"gray",
            marginBottom:15,
            marginRight:10,
            "&:hover":{
                backgroundColor: "orange !important",
                color:"white",
            }
        },
        
    }
})

export default useStyle