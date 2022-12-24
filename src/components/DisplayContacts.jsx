import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SingleContact from "./SingleContact";
import { useNavigate } from "react-router-dom";

const DisplayContacts = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const displayContacts = async () => {
      try {
        const fetchData = await axios.get(
          "https://contactapp-api-production.up.railway.app/api/contact/add"
        );
        setData(fetchData.data);
      } catch (error) {
        console.log(error);
      }
    };
    displayContacts();
  }, []);

  const removeAll = async() => {
    try {
      await axios.delete(
        "https://contactapp-api-production.up.railway.app/api/contact/remove"
      );
    } catch (error) {
      console.log(error)
    }
    setTimeout(() => {
      window.location.reload();
    }, 300);
  }

  return (
    <>
      <Container>
        <h1>All Contacts</h1>
        <div className="cards">
          {data.map((item, i) => (
            <SingleContact key={i} item={item} />
          ))}
        </div>
      </Container>
      <Back>
        <button onClick={() => navigate("add")}>Add Contacts</button>
        {data.length > 1 && (
          <button onClick={removeAll}>Remove All</button>
        )}
        <button onClick={() => navigate("/")}>Main Page</button>
      </Back>
    </>
  );
};

export default DisplayContacts;

const Container = styled.div`
  width: 80%;
  margin: 4rem auto 1rem auto;
  box-shadow: 0px 0px 0px 0.6px inset #ffffff;
  padding: 1.5rem;
  border-radius: 5px;
  color: #d1cdcd;

  h1 {
    text-align: center;
    font-size: 1.4rem;
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 2rem;
  }
`;

const Back = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;

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
