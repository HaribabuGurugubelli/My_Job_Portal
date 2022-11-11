import React, { useEffect } from "react";

const Logout = () => {
  useEffect(() => {
    localStorage.removeItem("hrLogin");
    window.location.href = "/";
  }, []);
  return <div>Logout</div>;
};

export default Logout;
