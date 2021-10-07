import { Fragment } from "react"
import { Route } from "react-router-dom"


export const UserTemPlate = (props) =>{
    const {Component, ...propsRoute} = props
    return(
        <Route {...propsRoute} render={(propsRoute)=>{
            return <Fragment>
                <Component className="mb-5" {...propsRoute}/>
            </Fragment>
        }}/>
    )
}