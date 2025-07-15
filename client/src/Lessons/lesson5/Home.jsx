import { Outlet } from "react-router"
import { HomeNav } from "./HomeNav"

export const Home = () => {
    return <>
        <h1>Home</h1>
        <HomeNav></HomeNav>
        <Outlet></Outlet>
    </>
}