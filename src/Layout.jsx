import { Outlet } from "react-router-dom"
import TopNav from "./components/Header"
import Home from "./pages/Home";

const Layout=()=>{
    return(
        <>
        <TopNav/>


        <Outlet/>


        </>
    )
}
export default Layout;