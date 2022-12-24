import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

const SingleContact = (props) => {
  const { firstName, lastName, photo, email, _id } = props.item;
  const [showUpdate, setShowUpdate] = useState(false);
  const [updatedContact, setUpdatedContact] = useState({});

  let folder = "https://contactapp-api-production.up.railway.app/upload/";

  const updateOnchange = (e) => {
    let { value, name } = e.target;
    setUpdatedContact((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        "https://contactapp-api-production.up.railway.app/api/contact/delete/" +
          id
      );
    } catch (error) {
      console.log(error);
    }
    setTimeout(() => {
      window.location.reload();
    }, 300);
  };

  // update contact
  const updateContact = (contact) => {
    setUpdatedContact(contact);
    setShowUpdate(true);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setShowUpdate(false);
    try {
      await axios.put(
        `https://contactapp-api-production.up.railway.app/api/contact/update/${updatedContact._id}`,
        updatedContact
      );
    } catch (error) {
      console.log(error);
    }
    setTimeout(() => {
      window.location.reload();
    }, 300);
  };

  return (
    <>
      <Content>
        <Image src={folder + photo} />
        <div className="name">
          <h1>{`${firstName} ${lastName}`}</h1>
          <h1>{email}</h1>
        </div>
        <Buttons>
          <Button onClick={() => updateContact(props.item)}>Update</Button>
          <Button onClick={() => handleDelete(_id)}>Delete</Button>
        </Buttons>
      </Content>

      <Form showUpdate={showUpdate} onSubmit={handleUpdate}>
        <h1>Update Contacts</h1>
        <form>
          <input
            type="text"
            placeholder="firstName..."
            name="firstName"
            value={updatedContact.firstName ? updatedContact.firstName : ""}
            onChange={updateOnchange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="lastName..."
            value={updatedContact.lastName ? updatedContact.lastName : ""}
            onChange={updateOnchange}
          />
          <input
            type="text"
            name="email"
            placeholder="email..."
            value={updatedContact.email ? updatedContact.email : ""}
            onChange={updateOnchange}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </>
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
`;

const Button = styled.button`
  padding: 0.6rem;
  margin-top: 1rem;
  background-color: blue;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;

const Form = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: ${(props) => (props.showUpdate ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    margin: 1.5rem 0;
    background-color: #c2c2c2b1;
    padding: 1rem;
    border-radius: 5px;
    z-index: 100000;

    input {
      padding: 0.6rem;
      outline: none;
      width: 20rem;
    }
  }
`;
