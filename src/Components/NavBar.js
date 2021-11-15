
import { NavLink } from "react-router-dom";

export default function NavBar() {
    const linkStyles = {
        display: "inline-block",
        width: "50px",
        padding: "12px",
        margin: "0 6px 6px",
        background: "blue",
        textDecoration: "none",
        color: "white",
    };
    return (
        <div>
            <NavLink to='/' style={linkStyles}>
                HOME
            </NavLink>
            <NavLink to='/about' style={linkStyles}>
                ABOUT
            </NavLink>
            <NavLink to='/login' style={linkStyles}>
                LOGIN
            </NavLink>
        </div>
    )
}


