import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { sendCode, useUserStore } from "@/modules/user";
import { Input, Button } from "@chakra-ui/react";

interface IFormFileds {
  code: string;
}

export const ResetCode: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormFileds>();
  const [isLoading, setIsloading] = useState(false);

  const email = useUserStore((state) => state.resetEmail);
  const setPassphrase = useUserStore((state) => state.setPassphrase);

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IFormFileds> = (data) => {
    setIsloading(true);

    sendCode(email, data.code)
      .then((res) => {
        setPassphrase(res.data.passphrase);
        navigate("/reset-password");
      })
      .catch((e) => {
        toast.error(e.response.data.detail?.msg || "Код не действителен");
      })
      .finally(() => {
        setIsloading(false);
      });
  };

  return (
    <>
      <h5 className="text-4xl">Подтвердите почту</h5>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Input
          required
          id="code"
          autoFocus
          type="text"
          placeholder="******"
          {...register("code", {
            required: "Обязательное поле",
            minLength: {
              value: 6,
              message: "Код должен состоять из 6 символов",
            },
            maxLength: {
              value: 6,
              message: "Код должен состоять из 6 символов",
            },
          })}
        />
        {errors.code && <span role="alert">{errors.code.message}</span>}
        <Button
          isLoading={isLoading}
          colorScheme="blue"
          type="submit"
          size={"lg"}
          className="w-full"
        >
          Send code
        </Button>
        <Link to="/">Do have an account? Sign In</Link>
      </form>
    </>
  );
};
