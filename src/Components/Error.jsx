import React from "react";
import { useRouteError } from "react-router-dom";

export const Error = () => {

  const err = useRouteError();
  console.log("error==>",err);
  
  return (
    <div className="error-container">
      <h1>Error 😵 — Something went wrong!</h1>
    </div>
  );
};
