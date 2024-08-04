import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { login, useUserStore } from "@/modules/user";
import { setCookie } from "@/shared";
import { Input, Button } from "@chakra-ui/react";

interface IFormFileds {
  email: string;
  password: string;
}

export const SignIn: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormFileds>();
  const [isLoading, setIsloading] = useState(false);

  const navigate = useNavigate();

  const setUser = useUserStore((state) => state.setUser);

  const onSubmit: SubmitHandler<IFormFileds> = (data) => {
    setIsloading(true);

    login(data.email, data.password)
      .then((res) => {
        toast.success("Вход выполнен успешно!");
        setUser(res.data.user);
        setCookie("access", res.data.access_token, {
          secure: "secure",
        });
        setCookie("refresh", res.data.refresh_token, {
          secure: "secure",
        });
        navigate("/home");
      })
      .catch((e) => {
        toast.error(
          e.response.data.detail?.msg || "Ошибка в логине или пароле"
        );
      })
      .finally(() => {
        setIsloading(false);
      });
  };

  return (
    <>
      <h5 className="text-4xl">Sign in</h5>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Input
          isRequired
          id="email"
          {...register("email", {
            required: "Обязательное поле",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Entered value does not match email format",
            },
          })}
          autoComplete="email"
          autoFocus
          placeholder="E-mail"
        />
        {errors.email && <span role="alert">{errors.email.message}</span>}
        <Input
          isRequired
          type="password"
          autoComplete="current-password"
          {...register("password", {
            required: "Обязательное поле",
          })}
          placeholder="Password"
        />
        {errors.password && <span role="alert">{errors.password.message}</span>}
        <Button
          isLoading={isLoading}
          colorScheme="blue"
          type="submit"
          size={"lg"}
          className="w-full"
        >
          Sign In
        </Button>
        <Link to="/sign-up">Don't have an account? Sign Up</Link>
        <Link to="/recovery-password">Forgot password?</Link>
      </form>
    </>
  );
};
