import axios from 'axios';

const API = process.env.API_URL;

export const getCourses = async () => {
  const res = await axios({
    url: `${API}/api/courses`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': '*',
    },
  });

  return res;
};
