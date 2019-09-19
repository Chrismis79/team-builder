import React from "react";

const NewMember = props => {
    console.log("NewMember props", props);
    return (
        <div>
            {props.memberList.map(member => {
                return (
                    <div key={member.id}>
                        <h2>{member.name}</h2>
                        <p>{member.email}</p>
                        <p>{member.role}</p>

                    </div>
                );
            })}
        </div>
    );
};

export default NewMember;