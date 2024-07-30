import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { recoveryPassword, useUserStore } from '@/modules/user';

interface IFormFileds {
  email: string;
}

export const RecoveryPassword: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormFileds>();
  const [isLoading, setIsloading] = useState(false);

  const setResetEmail = useUserStore((state) => state.setResetEmail);

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IFormFileds> = (data) => {
    setIsloading(true);

    recoveryPassword(data.email)
      .then(() => {
        toast.success('Код отправлен на вашу почту!');
        setResetEmail(data.email);
        navigate('/reset-code');
      })
      .catch((e) => {
        toast.error(e.response.data.detail?.msg || 'Ошибка при вводе E-mail');
      })
      .finally(() => {
        setIsloading(false);
      });
  };

  return (
    <>
      <h5>
        Recovery password
      </h5>
      <form
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          required
          id="email"
          autoComplete="email"
          autoFocus
          type="E-mail"
          {...register('email', {
            required: 'Обязательное поле',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Entered value does not match email format',
            },
          })}
        />
        {errors.email && <span role="alert">{errors.email.message}</span>}
        <button
          disabled={isLoading}
          type="submit"
        >
          Get code
        </button>
            <Link to="/">
              Do have an account? Sign In
            </Link>
    </form>
    </>
  );
};
