import React, { useEffect } from 'react';
import MetaData from '../MetaData';
import HeaderLoading from '../Header/HeaderLoading';
import HeaderAlert from '../Header/HeaderAlert';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/esm/Stack';
import { deleteUser, getAllUsers } from '../../store/actions/userAction';
import { DELETE_USER_RESET } from '../../store/constants/userConstants';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const UsersList = () => {
    const dispatch = useDispatch();

    const { headerLoading: allUsersHeaderLoading, error: allUsersError, message: allUsersMessage, users } = useSelector((state => state.allUsers));
    const { headerLoading: deleteHeaderLoading, error: deleteError, message: deleteMessage, isDeleted } = useSelector((state => state.profile));

    const deleteUserHandler = (id) => {
        dispatch(deleteUser(id));
    };

    useEffect(() => {
        if (isDeleted) {
            setTimeout(() => {
                dispatch({ type: DELETE_USER_RESET });
            }, 5000);
        };

        dispatch(getAllUsers());
    }, [dispatch, isDeleted, deleteError]);

    return (
        <>
            {/* Title tag */}
            <MetaData title={"All Users - Admin"} />

            {/* React top loading bar */}
            <HeaderLoading progressLoading={allUsersHeaderLoading || deleteHeaderLoading} />

            {/* Header alert */}
            {
                (allUsersError || deleteError || isDeleted) &&
                <HeaderAlert error={allUsersError || deleteError} message={allUsersMessage || deleteMessage} />
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
                        {
                            users.length > 0 ?
                                <Table bordered hover responsive>
                                    <thead className="bg-gray-400-color">
                                        <tr>
                                            <th>User Id</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Role</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            users &&
                                            users.map(user => {
                                                return (
                                                    <tr key={user._id}>
                                                        <td>{user._id}</td>
                                                        <td className="text-overflow line-clamp-1 pb-0">{user.name}</td>
                                                        <td>{user.email}</td>
                                                        <td>{user.role}</td>
                                                        <td className="d-flex">
                                                            <Button as={Link} to={`/admin/user/${user._id}`} className="bg-secondary-color border-0 py-2 px-3 rounded-0 text-nowrap me-2 w-auto d-flex justify-content-center align-items-center">Edit</Button>
                                                            <Button onClick={() => deleteUserHandler(user._id)} className="bg-secondary-color border-0 py-2 px-3 rounded-0 text-nowrap">Delete</Button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </Table>
                                :
                                <Stack >
                                    <span className="text-center text-dark font-20">No users to show</span>
                                </Stack>
                        }
                    </Col>
                </Row>
            </Container >
        </>
    )
}

export default UsersList;
