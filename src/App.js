import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddContact from "./components/AddContact";
import DisplayContacts from "./components/DisplayContacts";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddContact />} />
        <Route path="/add/contacts" element={<DisplayContacts />} />
      </Routes>
    </>
  );
};

export default App;
