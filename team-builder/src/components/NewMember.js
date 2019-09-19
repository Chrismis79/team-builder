import React from "react";

import styled from "styled-components";

const ListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
`;

const MemberDiv = styled.div`
    border: 2px solid black;
    background: orange;
    width: 30%;
    margin: 2% 0;
`;
const NewMember = props => {
    console.log("NewMember props", props);
    return (
        <ListContainer>
            {props.memberList.map(member => {
                return (
                   
                    <MemberDiv key={member.id}>
                        <h2>{member.name}</h2>
                        <p>{member.email}</p>
                        <p>{member.role}</p>

                    </MemberDiv>
                                   
                );
            })}
        </ListContainer>
    );
};

export default NewMember;