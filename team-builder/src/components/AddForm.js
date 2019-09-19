import React, {useState} from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const AddForm = props => {
    console.log("addform props:", props);

    const [member, setMember] = useState([{
        name: "",
        email: "",
        role: ""
    }]);

    const changeHandler = event => {
        setMember({...member, [event.target.name]: event.target.value});
        console.log(event.target.name);
    };

    const submitForm = event => {
        event.preventDefault();
        const newMember = {
            ...member,
            id: Date.now()
        };
        props.addNewMember(newMember);
        setMember({name: "", email: "", role: ""});
    }
    return (
        <Form onSubmit={submitForm}>
            <label htmlFor="name">Member Name</label>
            <input type="text"
                    name="name"
                    value={member.name}
                onChange={changeHandler}/>
            <label htmlFor="email">Member Email</label>
            <input type="text"
                    name="email"
                    value={member.email}
                onChange={changeHandler}/>
            <label htmlFor="role">Member Role</label>
            <input type="text"
                    name="role"
                    value={member.role}
                onChange={changeHandler}/>

            <button type="submit">Add Member</button>

        </Form>
    )
}

export default AddForm;