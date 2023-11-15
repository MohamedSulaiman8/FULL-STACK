import "../style.css";
import Logo from "../image/main-logo.jpg"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/authContext.js";
const Header=()=>{
    const {currentUser,logout}=useContext(AuthContext);
    return(
        <div className='navbar'>
            <div className="nav-container">
                <div className="logo">
                    <Link to="/home">
                        <img src={Logo} alt="" />
                    </Link>
                    <span id="brand">Films & Stuff</span>
                </div>
                <div className="h-links">
                    <Link className="h-link" to="/home/?cat=action">
                        <h6>ACTION</h6>
                    </Link>
                    <Link className="h-link" to="/home/?cat=drama">
                        <h6>DRAMA</h6>
                    </Link>
                    <Link className="h-link" to="/home/?cat=romance">
                        <h6>ROMANCE</h6>
                    </Link>
                    <Link className="h-link" to="/home/?cat=thriller">
                        <h6>THRILLER</h6>
                    </Link>
                    {currentUser.username!='empty' ? <span className="write">{currentUser.username}</span> : <span className="write"></span>}
                    {currentUser.username!='empty' ? <Link className="link" to="/login" ><span onClick={logout}>Logout</span></Link> : <Link className="link" to="/login" ><span>Login</span></Link>}
                    <span className="write">
                        <Link className="write-link" to="/write">Write</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}
export default Header;