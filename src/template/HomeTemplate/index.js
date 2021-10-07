import { Fragment } from "react"
import { Route } from "react-router-dom"
import Footer from "./layout/Footer"
import Header from "./layout/Header"


export const HomeTemPlate = (props) =>{
    const {Component, ...propsRoute} = props
    return(
        <Route {...propsRoute} render={(propsRoute)=>{
            return <Fragment>
                <Header {...propsRoute}/>
                <Component className="mb-5" {...propsRoute}/>
                <Footer />
            </Fragment>
        }}/>
    )
}