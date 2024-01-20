import { NavLink } from "react-router-dom";
import './Navbar.css';
import logo from "../../img/argentBankLogo.png";
import userIcon from "../../img/user-icon.png";
import Profil from "../Profil/Profil";
import { useDispatch, useSelector } from "react-redux";
import { storeSelector } from "../../store/storeSelectors";
import { clearStore, userProfile } from "../../store/storeActions";
import { useEffect } from "react";

/**
 * Component which displays navbar
 * in terms of user's login
 * 
 * @returns Navbar component
 */
function Navbar() {
    const store = useSelector(storeSelector);
    const dispatch = useDispatch();

    const handleDisconnection = () => {
        dispatch(clearStore());
    }

    useEffect(() => {
        if (store.authToken) {
            dispatch(userProfile(store.authToken));
        }
    }, [])

    return (
        <nav className="main-nav">
            <NavLink to="/" className="main-nav-logo">
                <img className="main-nav-logo-image" src={ logo } alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <div className="main-nav-links">
                { 
                    store.authToken ?
                        <>
                            <NavLink to="/user" className="main-nav-item">
                                <Profil name={store.userFirstName} picture={userIcon} />
                            </NavLink>
                            <NavLink to="/" className="main-nav-item" onClick={() => handleDisconnection()}>
                                <i className="fa fa-sign-out"></i>
                                Sign Out
                            </NavLink>
                        </> : 
                        <NavLink to="/signin" className="main-nav-item">
                            <i className="fa fa-user-circle"></i>
                            Sign In
                        </NavLink>
                }
            </div>
        </nav>
    )
}

export default Navbar;