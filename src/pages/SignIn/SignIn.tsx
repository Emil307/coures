import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { login, useUserStore } from '@/modules/user';
import { setCookie } from '@/shared';

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
        toast.success('Вход выполнен успешно!');
        setUser(res.data.user);
        setCookie('access', res.data.access_token, {
          secure: 'secure',
        });
        setCookie('refresh', res.data.refresh_token, {
          secure: 'secure',
        });
        navigate('/home');
      })
      .catch((e) => {
        toast.error(e.response.data.detail?.msg || 'Ошибка в логине или пароле');
      })
      .finally(() => {
        setIsloading(false);
      });
  };

  return (
    <>
      <h5>
        Sign in
      </h5>
      <form
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          required
          id="email"
          {...register('email', {
            required: 'Обязательное поле',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Entered value does not match email format',
            },
          })}
          autoComplete="email"
          autoFocus
        />
        {errors.email && <span role="alert">{errors.email.message}</span>}
        <input
          required
          type="password"
          id="password"
          autoComplete="current-password"
          {...register('password', {
            required: 'Обязательное поле',
          })}
        />
        {errors.password && <span role="alert">{errors.password.message}</span>}
        <button
          disabled={isLoading}
          type="submit"
        >
          Sign In
        </button>
            <Link to="/recovery-password">
              Forgot password?
            </Link>
            <Link to="/sign-up">
              Don't have an account? Sign Up
            </Link>
      </form>
    </>
  );
};
