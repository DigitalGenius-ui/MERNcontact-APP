import React from "react";
import styled from "styled-components";
import SingleContact from "./SingleContact";

const DisplayContacts = () => {
  const data = [
    {
      firstName: "Milad",
      lastName: "Amiri",
      email: "milad@gmail.com",
      photo:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
    },
    {
      firstName: "Milad",
      lastName: "Amiri",
      email: "milad@gmail.com",
      photo:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
    },
  ];
  return (
    <Container>
      <h1>All Contacts</h1>
      <div className="cards">
        {data.map((item, i) => (
          <SingleContact key={i} item={item} />
        ))}
      </div>
    </Container>
  );
};

export default DisplayContacts;

const Container = styled.div`
  width: 80%;
  margin: 4rem auto;
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
