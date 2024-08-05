import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCookie } from "@/shared";
import { Header } from "@/widgets";
import { CoursesList } from "@/modules/course";

export const Home: React.FC = () => {
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
    <div id="home-page">
      <Header />
      <div className="mt-32 pb-16">
        <CoursesList />
      </div>
    </div>
  );
};
