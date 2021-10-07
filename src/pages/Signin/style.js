import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(() => {
    return {

        formSignin: {
            backgroundColor: "white",
            height:"100vh",
            padding:30
        },
        textField:{
            textAlign:"center",
            
        },
        createAccount:{
           display: "flex !important",
           justifyContent: "space-evenly",
           alignItems:"center",
           marginTop:50
        }
    }
})

export default useStyle