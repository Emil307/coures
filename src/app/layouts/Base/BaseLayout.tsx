import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { getCookie } from "@/shared";
import { Header } from "@/widgets";

export const BaseLayout: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    toSignIn();
  }, []);

  function toSignIn() {
    if (!getCookie("access") || !getCookie("refresh")) {
      navigate("/");
    }
  }

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
