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
    <div className="w-full h-16 flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold">BrainUp</h1>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
};
