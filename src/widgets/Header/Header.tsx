import React from "react";
import { useNavigate } from "react-router-dom";
import { getCookie, setCookie } from "@/shared";

export const Header: React.FC = () => {
  const navigate = useNavigate();

  function toSignIn() {
    if (!getCookie("access") || !getCookie("refresh")) {
      navigate("/");
    }
  }

  function handleLogout() {
    setCookie("access", "", {
      "max-age": -1,
    });
    setCookie("refresh", "", {
      "max-age": -1,
    });
    toSignIn();
  }

  return (
    <div className="fixed top-0 left-0 z-10 w-full h-24 flex justify-between items-center p-8 bg-white">
      <h1 className="text-3xl font-bold">BrainUp</h1>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
};
