import { makeStyles } from "@material-ui/core";



const useStyles = makeStyles((theme)=>{
    return{
        bgColor:{
            backgroundImage: "linear-gradient(90deg, rgba(25, 136, 247, 1) 0%, rgba(247, 25, 136, 1) 100%)",
            margin:"12px 0",
        },
        center:{
            textAlign: "center",
            [theme.breakpoints.down("xs")]: {
                textAlign:"left"
            }
        },
        textUppercase:{
            textTransform:"uppercase",
        }
    }
})

export default useStyles