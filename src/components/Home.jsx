import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
    const navigate = useNavigate();
  return (
    <Container>
      <div className="content">
        <h1>Welcome to Contact Pages</h1>
        <Button onClick={() => navigate("add")}>Next</Button>
      </div>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  
  .content {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 1rem;
      box-shadow: 0px 0px 0px 0.6px inset #ffffff;
      padding: 2rem;
      border-radius: 5px;
  }

  h1 {
    font-size: 1.4rem;
    color: #d1cdcd;
  }

  button {
    cursor: pointer;
    padding: 0.6rem 1.5rem;
    background-color: blue;
    color: #fff;
    border: none;
    border-radius: 5px;

    &:hover {
      opacity: 0.6;
    }
  }
`;
const Button = styled.button``;
