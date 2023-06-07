import React, { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { updateProfile } from '../../store/actions/userAction';
import EditProfile from './EditProfile';

const Profile = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const { user, isAuthenticated } = useSelector((state) => state.user);
    const { updateError, isUpdated } = useSelector((state) => state.user);

    const [updateName, setUpdateName] = useState("");
    const [updateEmail, setUpdateEmail] = useState("");
    const [isEditingName, setIsEditingName] = useState(false);
    const [isEditingEmail, setIsEditingEmail] = useState(false);

    //handle click to edit or save the form
    const handleEditClick = (value, updateValue) => {
        updateValue === updateName ?
            setIsEditingName(value) :
            setIsEditingEmail(value)
    }

    // Handle update submit form
    const updatedSubmit = (e) => {
        e.preventDefault();
        const registerForm = new FormData();

        registerForm.set(`${e.target.name}`, e.target.value);

        dispatch(updateProfile(registerForm));
    };

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/login");
        }
        if (user) {
            setUpdateName(user.name);
            setUpdateEmail(user.email);
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
                        <EditProfile label="Name" name="name" isEditing={isEditingName} updateValue={updateName} setUpdateValue={setUpdateName} handleEditClick={handleEditClick} updatedSubmit={updatedSubmit} />
                    </ListGroup.Item>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <EditProfile label="Email" name="email" isEditing={isEditingEmail} updateValue={updateEmail} setUpdateValue={setUpdateEmail} handleEditClick={handleEditClick} updatedSubmit={updatedSubmit} />
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
            </Container >
        </>
    )
}

export default Profile;
