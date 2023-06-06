import React, { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { updateProfile } from '../../store/actions/userAction';

const Profile = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const { user, isAuthenticated } = useSelector((state) => state.user);
    const { updateError, isUpdated } = useSelector((state) => state.user);

    const [updateName, setUpdateName] = useState("");
    const [updateEmail, setUpdateEmail] = useState("");
    const [updateAvatar, setUpdateAvatar] = useState();
    const [updateAvatarPreview, setUpdateAvatarPreview] = useState();

    const updateNameSubmit = () => {
        const registerForm = new FormData();

        registerForm.set("name", updateName);

        dispatch(updateProfile(registerForm));
    };

    // Handle register data change
    const updateDataChange = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setUpdateAvatarPreview(reader.result);
                setUpdateAvatar(reader.result);
            }
        }
        reader.readAsDataURL(e.target.files[0]);
    };

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/login");
        }
        if (user) {
            setUpdateName(user.name);
            setUpdateEmail(user.email);
            setUpdateAvatar(user.avatar.url);
        }
    }, [isAuthenticated, navigate, user]);

    return (
        <>
            <Container className="profile-container">
                <h3 className="my-4">Login & Security</h3>
                <ListGroup as="ol">
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Name:</div>
                            {user.name}
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Email:</div>
                            {user.email}
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Joined on:</div>
                            {String(user.createdAt).substr(0, 10)}
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Password:</div>
                            ********
                        </div>
                        <Button variant="secondary"><Link to={"/password/update"} className="text-decoration-none text-white">Change Password</Link></Button>
                    </ListGroup.Item>
                </ListGroup>
            </Container>
        </>
    )
}

export default Profile;
