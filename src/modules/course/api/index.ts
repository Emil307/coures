import axios from "axios";

const API = "https://aso-course.big-nose.ru";

export const getCourses = async () => {
  const res = await axios({
    url: `${API}/api/courses`,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers": "*",
    },
  });

  return res;
};
