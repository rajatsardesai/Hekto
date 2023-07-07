import React, { useState } from 'react';
import HeaderLoading from '../Header/HeaderLoading';
import HeaderAlert from '../Header/HeaderAlert';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import MetaData from '../MetaData';
import Stack from 'react-bootstrap/esm/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../store/actions/userAction';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isAuthenticated, success, error, message, headerLoading } = useSelector(
        (state) => state.user
    );

    const [user, setUser] = useState({
        registerName: "",
        registerEmail: "",
        registerPassword: "",
    });

    const { registerName, registerEmail, registerPassword } = user;

    const [registerAvatar, setRegisterAvatar] = useState(process.env.PUBLIC_URL + "/assets/style/profile.png");
    const [registerAvatarPreview, setRegisterAvatarPreview] = useState(process.env.PUBLIC_URL + "/assets/style/profile.png");

    const registerSubmit = (e) => {
        e.preventDefault();

        const registerForm = new FormData();

        registerForm.set("name", registerName);
        registerForm.set("email", registerEmail);
        registerForm.set("password", registerPassword);
        registerForm.set("avatar", registerAvatar);

        dispatch(register(registerForm));
        navigate("/");
    };

    // Handle register data change
    const registerDataChange = (e) => {
        if (e.target.name === "registerAvatar") {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setRegisterAvatarPreview(reader.result);
                    setRegisterAvatar(reader.result);
                }
            }
            reader.readAsDataURL(e.target.files[0]);
        } else {
            setUser({ ...user, [e.target.name]: e.target.value });
        }
    };

    return (
        <>
            {/* Title tag */}
            <MetaData title={"Hekto Sign Up"} />

            {/* React top loading bar */}
            <HeaderLoading progressLoading={headerLoading} />

            {/* Header alert */}
            {
                (error || success) && isAuthenticated &&
                <HeaderAlert error={error} message={message} />
            }

            {/* Signup */}
            <div className="users-page my-5 py-5">
                <Container >
                    <Card className="p-3 p-md-5 border-0 card-shadow">
                        <Card.Title className="fw-bold mb-1 text-center">Create Account</Card.Title>
                        <span className="text-center text-gray-500-color font-lato font-17">Join Hekto today for exciting offers.</span>
                        <Form encType="multipart/form-data" onSubmit={registerSubmit} className="mt-5">
                            <Form.Group className="mb-4" controlId="registerName">
                                <Form.Control type="text" required name="registerName" value={registerName} placeholder="Your name" className="font-lato font-16" onChange={registerDataChange} />
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="registerEmail">
                                <Form.Control type="email" required name="registerEmail" value={registerEmail} placeholder="Email address" className="font-lato font-16" onChange={registerDataChange} />
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="registerPassword">
                                <Form.Control type="password" required name="registerPassword" value={registerPassword} placeholder="Password" className="font-lato font-16" onChange={registerDataChange} />
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="registerAvatar">
                                <Stack direction="horizontal" className="register-image">
                                    <img src={registerAvatarPreview} alt="Avatar Preview" className="w-25 me-2 rounded-circle" />
                                    <Form.Control type="file" required name="registerAvatar" accept="image/*" placeholder="Upload your Avatar" className="font-lato font-16" onChange={registerDataChange} />
                                </Stack>
                            </Form.Group>
                            <Button type="submit" className="w-100 my-4 bg-secondary-color border-0 rounded-1">
                                Create Account
                            </Button>
                        </Form>
                    </Card>
                </Container>
            </div>
        </>
    )
}

export default Signup
