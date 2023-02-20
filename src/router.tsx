import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home"; 
import { Profile } from "./pages/Profile";
import { Followers } from "./pages/Followers";
import { Following } from "./pages/Following";



export const Router = () => {
    return (

        <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/profile/:user/repositories" element={<Profile />} />
            <Route path="/profile/:user/followers" element={<Followers />} />
            <Route path="/profile/:user/following" element={<Following />} />

        </Routes>
    )
}
