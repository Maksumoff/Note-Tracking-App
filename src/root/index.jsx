import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import navbar from "../utils/navbar";

export const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          {navbar.map(({ id, path, element }) => {
            return <Route key={id} path={path} element={element} />;
          })}
        </Route>
        <Route path="/" element={<Navigate to={"/main"} />} />
        <Route path="*" element={<h1>404 Not Found </h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
