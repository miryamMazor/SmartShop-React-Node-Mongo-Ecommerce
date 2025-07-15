import { Route, Routes } from "react-router"
import { Home } from "./Home"
import { Hitchabrot } from "./Hitchabrot"
import { Harshama } from "./Harshama"
import { AllTrips } from "./AllTrips"
import { MoreDitels } from "./MoreDitels"

export const Routing =()=>{
    return<>
    <Routes>
        <Route path='' element={<Home></Home>}></Route>
        <Route path='Home' element={<Home></Home>}></Route>
        <Route path='Login' element={<Hitchabrot></Hitchabrot>}>
            <Route path='Register' element={<Harshama></Harshama>}></Route>
        </Route>
        <Route path='AllTrips' element={<AllTrips></AllTrips>}>
             <Route path='MoreDitels' element={<MoreDitels></MoreDitels>}></Route>
        </Route>
    </Routes>
    </>
}