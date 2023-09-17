import clsx from "clsx"

// -------------------------------------------------------------------------------

import style from "@/components/Layout/Footer/components/linkDirection/linkDirectin.module.scss"
import { Link } from "react-router-dom"

// -------------------------------------------------------------------------------


type LinkDirectinType = {
    id:number,
    url:string,
    name:string,
    target?:string,
}

// -------------------------------------------------------------------------------


function LinkDirectin(props:LinkDirectinType) {
    const {id,name,url,target } = props
    return(
        <Link className={clsx(style.link_direction)} key={id} to={url} target={target}>{name}</Link>
    )
    
}

export default LinkDirectin;