import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const EditProfile = (props) => {
    const { label, name, isEditing, updateValue, setUpdateValue, handleEditClick, updatedSubmit }
        = props;
    return (
        <>
            {!isEditing ?
                <>
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">{label}:</div>
                        {updateValue}
                    </div>
                    <Button variant="secondary" onClick={() => handleEditClick(true, updateValue)}>Edit</Button>
                </>
                :
                <>
                    <div className="ms-2 me-auto">
                        <Form.Control
                            type="text"
                            value={updateValue}
                            name={name}
                            onChange={(e) => {
                                setUpdateValue(e.target.value)
                                updatedSubmit(e)
                            }}
                            aria-label="Name"
                            aria-describedby="name"
                        />
                    </div>
                    <Button variant="secondary" type="submit" onClick={() => handleEditClick(false, updateValue)}>
                        Save
                    </Button>
                </>
            }
        </>
    )
}

export default EditProfile;
