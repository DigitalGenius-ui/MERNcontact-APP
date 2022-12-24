import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";


const App = () => {
  const Home = lazy(() => import("./components/Home"));
  const AddContact = lazy(() => import("./components/AddContact"));
  const DisplayContacts = lazy(() => import("./components/DisplayContacts"));
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/contacts"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <DisplayContacts />
            </Suspense>
          }
        />
        <Route
          path="/contacts/add"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <AddContact />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
};

export default App;
