import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Toaster } from 'react-hot-toast';
import { router } from './providers/index';
import './styles/index.scss';

export const App: React.FC = () => (
  <>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    <Toaster position="top-right" reverseOrder />
  </>
);
