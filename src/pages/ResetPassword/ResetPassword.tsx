import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { resetPassword, useUserStore } from "@/modules/user";
import { Input, Button } from "@chakra-ui/react";

interface IFormFileds {
  password1: string;
  password2: string;
}

export const ResetPassword: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormFileds>();
  const [isLoading, setIsloading] = useState(false);

  const email = useUserStore((state) => state.resetEmail);
  const passphrase = useUserStore((state) => state.passphrase);

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IFormFileds> = (data) => {
    setIsloading(true);

    resetPassword(email, passphrase, data.password1, data.password2)
      .then(() => {
        toast.success("Пароль успешно изменен!");
        navigate("/");
      })
      .catch((e) => {
        toast.error(e.response.data.detail?.msg || "Произошла ошибка");
      })
      .finally(() => {
        setIsloading(false);
      });
  };

  return (
    <>
      <h5 className="text-4xl">Введите новый пароль</h5>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Input
          required
          id="password1"
          autoFocus
          type="text"
          placeholder="********"
          {...register("password1", {
            required: "Обязательное поле",
            minLength: {
              value: 8,
              message: "Минимальная длина пароля 8 символов",
            },
          })}
        />
        {errors.password1 && (
          <span role="alert">{errors.password1.message}</span>
        )}
        <Input
          required
          id="password2"
          autoFocus
          type="text"
          placeholder="********"
          {...register("password2", {
            required: "Обязательное поле",
            minLength: {
              value: 8,
              message: "Минимальная длина пароля 8 символов",
            },
          })}
        />
        {errors.password2 && (
          <span role="alert">{errors.password2.message}</span>
        )}
        <Button
          isLoading={isLoading}
          colorScheme="blue"
          type="submit"
          size={"lg"}
          className="w-full"
        >
          Установить пароль
        </Button>
        <Link to="/">Do have an account? Sign In</Link>
      </form>
    </>
  );
};
