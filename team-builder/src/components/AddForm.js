import React, {useState} from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    border: 2px solid black;
    background: grey;
`;
const Button = styled.button`
    color: white;
    background: red;
    &:hover{
        cursor: pointer;
        border: 1px solid black;
        color: black;
    }
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
                    placeholder="name"
                    value={member.name}
                onChange={changeHandler}/>
            <label htmlFor="email">Member Email</label>
            <input type="text"
                    name="email"
                    placeholder="email"
                    value={member.email}
                onChange={changeHandler}/>
            <label htmlFor="role">Member Role</label>
            <input type="text"
                    name="role"
                    placeholder="job title"
                    value={member.role}
                onChange={changeHandler}/>

            <Button type="submit">Add Member</Button>

        </Form>
    )
}

export default AddForm;