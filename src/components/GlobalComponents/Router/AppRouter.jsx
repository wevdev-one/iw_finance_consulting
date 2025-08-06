import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { routes } from "../../../router/index";

const AppRouter = () => {
  return (
    <Routes>
      {routes.map((i) => (
        <Route key={i.path} path={i.path} element={<i.element />} />
      ))}
      <Route path='/*' element={<Navigate to='/en/' replace />} />
    </Routes>
  );
};

export default AppRouter;