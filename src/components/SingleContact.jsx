import React from "react";
import styled from "styled-components";

const SingleContact = (props) => {
  const { firstName, lastName, photo, email } = props.item;
  return (
    <Content>
      <Image src={photo} />
      <div className="name">
        <h1>{`${firstName} ${lastName}`}</h1>
        <h1>{email}</h1>
      </div>
      <Buttons>
        <button>Update</button>
        <button>Delete</button>
      </Buttons>
    </Content>
  );
};

export default SingleContact;

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 14rem;
  box-shadow: 0px 0px 0px 0.6px inset #ffffff;
  padding: 1rem 0;

  .name {
    h1 {
      font-size: 1rem;
    }
  }
`;
const Image = styled.img`
  width: 8rem;
  padding-bottom: 1rem;
`;

const Buttons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  button {
    cursor: pointer;
    padding: 0.4rem 1rem;
    background-color: #1010a7;
    color: #fff;
    border: none;
    border-radius: 5px;

    &:hover {
      opacity: 0.6;
    }
  }
`;
