import React from 'react';
import HeaderAlert from './HeaderAlert';
import Stack from 'react-bootstrap/Stack';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { logoutUser } from '../../store/actions/userAction';

const HeaderAccount = ({ user, color }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isLoggedout, message } = useSelector(
        (state) => state.user
    );

    const dashboard = () => {
        if (user.role === "admin") {
            navigate("/admin/dashboard")
        }
    };

    // Check login status
    const checkLoginStatus = (link) => {
        if (user && link !== "logout") {
            navigate(`/${link}`);
        } else if (user && link === "logout") {
            dispatch(logoutUser());
            navigate("/login");
        } else {
            navigate("/login");
        }
    };

    return (
        <>
            {/* Header alert */}
            {
                (isLoggedout) &&
                <HeaderAlert message={message} />
            }

            {
                user ?
                    <NavDropdown
                        id="account-dropdown"
                        title={<span className="font-16" style={{
                            color: color ? color : '#ffffff'
                        }}>Your account</span>}
                        menuVariant="light"
                        className="account-dropdown text-light font-16 z-3 px-3 px-md-0"
                    >
                        {
                            user && user.role === "admin" ?
                                <NavDropdown.Item onClick={dashboard} >Your dashboard</NavDropdown.Item> : ""
                        }
                        <NavDropdown.Item onClick={() => {
                            checkLoginStatus("account");
                        }}>
                            Your account
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={() => {
                            checkLoginStatus("orders")
                        }}>Your orders</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => {
                            checkLoginStatus("logout")
                        }}>
                            {user && "Logout"}
                        </NavDropdown.Item>
                    </NavDropdown>
                    :
                    <Stack direction="horizontal" gap={1} className="text-decoration-none font-16 px-3 px-md-0 py-2 py-md-0" as={Link} to={'/login'} style={{
                        color: color ? color : '#ffffff'
                    }}>
                        <span>Login</span>
                        <img src={process.env.PUBLIC_URL + "/assets/style/user.svg"} alt="user" style={{
                            color: color ? color : '#ffffff'
                        }} />
                    </Stack>
            }
        </>
    )
}

export default HeaderAccount;
