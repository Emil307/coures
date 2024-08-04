import axios from "axios";

const API = "https://aso-course.big-nose.ru";

export const getBlocks = async (courseId: number) => {
  const res = await axios({
    url: `${API}/api/course/blocks?course_id=${courseId}`,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers": "*",
    },
  });

  return res;
};
