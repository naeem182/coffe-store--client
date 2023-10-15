import { NavLink } from "react-router-dom"
import "./Header.css"

const Header = () => {
    return (
        <div className=" flex gap-4 justify-center" >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/user">Users</NavLink>
            <NavLink to="/signup">Sign up</NavLink>
            <NavLink to="/signin">Sign In</NavLink>
            <NavLink to="/addcoffee">Add coffee</NavLink>
        </div>
    )
}

export default Header
