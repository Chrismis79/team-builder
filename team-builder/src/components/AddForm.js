import React, {useState} from "react";

const AddForm = props => {
    console.log(props);

    const [member, setMember] = useState({
        name: "",
        email: "",
        role: ""
    });

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
        <form onSubmit={submitForm}>
            <label htmlFor="name">Member Name</label>
            <input type="text"
                    name="name"
                    value={member.name}
                onChange={changeHandler}/>
            <label htmlFor="email">Member Email</label>
            <input type="text"
                    email="email"
                    value={member.email}
                onChange={changeHandler}/>
            <label htmlFor="role">Member Role</label>
            <input type="text"
                    role="role"
                    value={member.role}
                onChange={changeHandler}/>

            <button type="submit">Add Member</button>

        </form>
    )
}

export default AddForm;