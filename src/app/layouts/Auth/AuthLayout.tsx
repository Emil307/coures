import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { getCookie } from "@/shared";

export const AuthLayout: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (getCookie("access") && getCookie("refresh")) {
      navigate("/home");
    }
  }, []);

  return (
    <div className="fixed w-screen h-screen flex justify-center items-center bg-blue-500">
      <div className="2xl:w-4/12 xl:w-5/12 lg:w-6/12 md:w-8/12 sm:w-11/12 min-w-80 flex flex-col gap-6 p-8 rounded-xl bg-white">
        <Outlet />
      </div>
    </div>
  );
};
