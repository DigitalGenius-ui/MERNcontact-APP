import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const AddContact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [fileName, setFileName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();

    let contacts = {
      firstName,
      lastName,
      email,
    };

    if (fileName) {
      const formData = new FormData();
      const imageName = Date.now() + fileName.name;
      formData.append("name", imageName);
      formData.append("file", fileName);
      contacts.photo = imageName;

      try {
        await axios.post("/api/upload", formData);
      } catch (error) {
        console.log(error)
      }
    }

    try {
      navigate(-1);
      setTimeout(() => {
        window.location.reload();
      }, 400);
      await axios.post("/api/contact/create", contacts);
    } catch (error) {
      console.log(error.message)
    }
  };
  
  return (
    <>
      <Container>
        <h1>Add Contact</h1>
        <Form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="firstName..."
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="lastName..."
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="text"
            placeholder="email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input type="file" onChange={(e) => setFileName(e.target.files[0])} />
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
      <Back>
        <button onClick={() => navigate(-1)}>Back</button>
      </Back>
    </>
  );
};

export default AddContact;

const Container = styled.div`
  width: 30rem;
  margin: 4rem auto 1rem auto;
  box-shadow: 0px 0px 0px 0.6px inset #ffffff;
  padding: 1.5rem;
  border-radius: 5px;
  color: #d1cdcd;

  h1 {
    text-align: center;
    font-size: 1.5rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  margin: 1.5rem 0;

  input {
    padding: 0.6rem;
    outline: none;
  }
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

const Back = styled.div`
  text-align: center;

  button {
    padding: 0.5rem 2rem;
    background-color: #1010a7;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      opacity: 0.6;
    }
  }
`;

