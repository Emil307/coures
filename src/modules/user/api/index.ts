import axios from "axios";

const API = "https://aso-course.big-nose.ru";

export const reg = async (email: string, password: string) => {
  const res = await axios({
    url: `${API}/api/users/register`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers": "*",
    },
    data: {
      email,
      password,
    },
  });

  return res;
};

export const login = async (email: string, password: string) => {
  const res = await axios({
    url: `${API}/api/users/login`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers": "*",
    },
    data: {
      email,
      password,
    },
  });

  return res;
};

export const recoveryPassword = async (email: string) => {
  const res = await axios({
    url: `${API}/api/password/recovery`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers": "*",
    },
    data: {
      email,
    },
  });

  return res;
};

export const sendCode = async (email: string, code: string) => {
  const res = await axios({
    url: `${API}/api/password/recovery-code`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers": "*",
    },
    data: {
      email,
      code: Number(code),
    },
  });

  return res;
};

export const resetPassword = async (
  email: string,
  passphrase: string,
  password1: string,
  password2: string
) => {
  const res = await axios({
    url: `${API}/api/password/reset`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers": "*",
    },
    data: {
      email,
      passphrase,
      password1,
      password2,
    },
  });

  return res;
};
