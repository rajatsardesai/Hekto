import React, { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updatePassword, updateProfile } from '../../store/actions/userAction';
import EditProfile from './EditProfile';

const Profile = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const { user, isAuthenticated } = useSelector((state) => state.user);

    // States to update name and email
    const [updateName, setUpdateName] = useState("");
    const [updateEmail, setUpdateEmail] = useState("");
    const [isEditingName, setIsEditingName] = useState(false);
    const [isEditingEmail, setIsEditingEmail] = useState(false);

    //  States to update password
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isEditingPasswords, setIsEditingPasswords] = useState(false);

    //handle click to edit or save the name and email in form
    const handleEditClick = (value, updateValue) => {
        updateValue === updateName ?
            setIsEditingName(value) :
            setIsEditingEmail(value)
    }

    //handle click to edit or save the passwords form
    const handlePasswordClick = (value) => {
        setTimeout(() => {
            setIsEditingPasswords(value);
        });
    }

    // Handle update submit form
    const updatedSubmit = (e) => {
        e.preventDefault();
        const updatedForm = new FormData();

        updatedForm.set(`${e.target.name}`, e.target.value);

        dispatch(updateProfile(updatedForm));
    };

    // Handle update password submit form
    const updatedPasswordsSubmit = (e) => {
        e.preventDefault();
        const updatedPasswordsForm = new FormData();

        updatedPasswordsForm.set("oldPassword", oldPassword);
        updatedPasswordsForm.set("newPassword", newPassword);
        updatedPasswordsForm.set("confirmPassword", confirmPassword);

        dispatch(updatePassword(updatedPasswordsForm));
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
                        {
                            !isEditingPasswords ?
                                <>
                                    <div className="ms-md-2 me-md-auto mx-2">
                                        <div className="fw-bold">Password:</div>
                                        ********
                                    </div>
                                    <Button variant="secondary" onClick={() => handlePasswordClick(true)}>Change Password</Button>
                                </> :
                                <>
                                    <Form onSubmit={updatedPasswordsSubmit} className="w-100">
                                        <Form.Group className="mb-3">
                                            <div className="ms-md-2 me-md-auto mx-2">
                                                <Form.Control
                                                    type="password"
                                                    value={oldPassword}
                                                    name="oldPassword"
                                                    placeholder="Enter your old Password"
                                                    onChange={(e) => setOldPassword(e.target.value)}
                                                    aria-label="oldPassword"
                                                    aria-describedby="oldPassword"
                                                />
                                                <Form.Control
                                                    type="password"
                                                    value={newPassword}
                                                    name="newPassword"
                                                    placeholder="Enter your new Password"
                                                    onChange={(e) => setNewPassword(e.target.value)}
                                                    className="my-3"
                                                    aria-label="newPassword"
                                                    aria-describedby="newPassword"
                                                />
                                                <Form.Control
                                                    type="password"
                                                    value={confirmPassword}
                                                    name="confirmPassword"
                                                    placeholder="Enter your confirm Password"
                                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                                    aria-label="confirmPassword"
                                                    aria-describedby="confirmPassword"
                                                />
                                            </div>
                                            <Button variant="secondary" type="submit" onClick={() => handlePasswordClick(false)}>
                                                Save
                                            </Button>
                                        </Form.Group>
                                    </Form>
                                </>
                        }
                    </ListGroup.Item>

                </ListGroup>
            </Container >
        </>
    )
}

export default Profile;
