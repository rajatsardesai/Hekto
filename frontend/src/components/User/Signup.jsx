import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import MetaData from '../MetaData';

const Signup = (props) => {
    const { registerName, registerEmail, registerPassword, registerSubmit, registerDataChange } = props;

    return (
        <>
            {/* Title tag */}
            <MetaData title={"eBuy Registration"} />

            {/* Signup */}
            <div className="login-signup-page bg-white">
                <Container >
                    <div className="text-center">
                        <Image src={process.env.PUBLIC_URL + "/assets/images/logo.png"} alt="logo" className="my-3" />
                    </div>
                    <Card style={{ width: '22rem' }} className="m-auto p-3">
                        <Card.Body>
                            <Card.Title className="fs-3 fw-normal mb-3">Create Account</Card.Title>
                            <Card.Text>
                                <Form encType="multipart/form-data" onSubmit={registerSubmit}>
                                    <Form.Group className="mb-3" controlId="registerName">
                                        <Form.Label className="fs-6 fw-bold mb-1">Your name</Form.Label>
                                        <Form.Control type="text" name="registerName" required value={registerName} onChange={registerDataChange} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="registerEmail">
                                        <Form.Label className="fs-6 fw-bold mb-1">Email address</Form.Label>
                                        <Form.Control type="email" name="registerEmail" required value={registerEmail} onChange={registerDataChange} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="registerPassword">
                                        <Form.Label className="fs-6 fw-bold mb-1">Password</Form.Label>
                                        <Form.Control type="password" name="registerPassword" required value={registerPassword} onChange={registerDataChange} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="registerAvatar">
                                        <Form.Label className="fs-6 fw-bold mb-1">Upload your Avatar</Form.Label>
                                        <Form.Control type="file" name="registerAvatar" required accept="image/*" onChange={registerDataChange} />
                                    </Form.Group>
                                    <Button variant="warning" type="submit" className="w-100 my-2">
                                        Create Account
                                    </Button>
                                    <p>By continuing, you agree to eBuy's Conditions of Use and Privacy Notice.</p>
                                </Form>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <hr className="my-4" />
                    <p className="text-center">&copy; 2023, eBuy, Inc. or its affiliates</p>
                </Container>
            </div>
        </>
    )
}

export default Signup
