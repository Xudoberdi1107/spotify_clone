import { ReactNode } from "react";
import Header from "../Header";
import Footer from "../Footer";

type TypeLayoutChild ={
    children:ReactNode
}

function Layout(props:TypeLayoutChild) {
    const {children} = props
    return(
        <div>
            <Header/>
                {children}
            <Footer/>

        </div>
    )
}

export default Layout;