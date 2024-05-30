import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Layouts = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Layouts;
