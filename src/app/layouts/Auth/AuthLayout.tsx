import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { getCookie } from '@/shared';

export const AuthLayout: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (getCookie('access') && getCookie('refresh')) {
      navigate('/home');
    }
  }, []);

  return (
    <div><Outlet /></div>
  );
};
