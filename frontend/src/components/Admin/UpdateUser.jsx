import React, { useEffect, useState } from 'react';
import MetaData from '../MetaData';
import HeaderLoading from '../Header/HeaderLoading';
import HeaderAlert from '../Header/HeaderAlert';
import Sidebar from './Sidebar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/esm/Stack';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_USER_RESET } from '../../store/constants/userConstants';
import { getUserDetails, updateUser } from '../../store/actions/userAction';

const UpdateUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    const { headerLoading: userDetailsHeaderLoading, error: userDetailsError, message: userDetailsMessage, user } = useSelector(state => state.userDetails);
    const { headerLoading: updateHeaderLoading, error: updateError, message: updateMessage, isUpdated } = useSelector(state => state.profile);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");

    const updateUserSubmitHandler = (e) => {
        e.preventDefault();

        const newUserForm = new FormData();

        newUserForm.set("name", name);
        newUserForm.set("email", email);
        newUserForm.set("role", role);

        dispatch(updateUser(id, newUserForm));
    };

    useEffect(() => {
        if (user && user._id !== id) {
            dispatch(getUserDetails(id));
        } else {
            setName(user.name);
            setEmail(user.email);
            setRole(user.role);
        };

        if (isUpdated) {
            setTimeout(() => {
                navigate("/admin/users");
                dispatch({ type: UPDATE_USER_RESET });
            }, 5000);
        }
    }, [navigate, dispatch, isUpdated, updateError, id, user]);

    return (
        <>
            {/* Title tag */}
            <MetaData title={"Update User - Admin"} />

            {/* React top loading bar */}
            <HeaderLoading progressLoading={userDetailsHeaderLoading || updateHeaderLoading} />

            {/* Header alert */}
            {
                (userDetailsError || updateError || isUpdated) &&
                <HeaderAlert error={userDetailsError || updateError} message={userDetailsMessage || updateMessage} />
            }

            {/* All products list */}
            <Container className="my-5 h-60vh">
                <Row>
                    <h5 className="fw-bold font-22 text-blue-500-color mb-4">Admin Dashboard</h5>
                    <Col lg={4} className="mb-5 pe-md-5">
                        <Sidebar />
                    </Col>

                    {/* Dashboard */}
                    <Col lg={8}>
                        <Form className="bg-gray-300-color px-4 py-5" onSubmit={updateUserSubmitHandler}>
                            <h5 className="fw-bold font-18 text-blue-500-color mb-4">Update User</h5>
                            <Stack className="flex-column flex-md-row mt-4" gap={3}>
                                <Form.Group className="mb-3 w-100" controlId="name">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3 w-100" controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </Form.Group>
                            </Stack>
                            <Form.Select value={role} onChange={(e) => setRole(e.target.value)} aria-label="Choose role">
                                <option>Choose role</option>
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                            </Form.Select>
                            <Stack className="flex-column flex-md-row mt-4" gap={2}>
                                <Button type="submit" className="bg-secondary-color border-0 py-2 px-3 rounded-0" disabled={role === "" ? true : false}>Update</Button>
                            </Stack>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default UpdateUser;
