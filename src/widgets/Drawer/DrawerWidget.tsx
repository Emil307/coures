import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';

interface IDrawerProps extends React.PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  placement: 'top' | 'right' | 'left' | 'bottom';
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export const DrawerWidget: React.FC<IDrawerProps> = ({
  children,
  isOpen,
  onClose,
  title,
  placement,
  size,
}) => {
  return (
    <Drawer onClose={onClose} isOpen={isOpen} size={size} placement={placement}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>{title}</DrawerHeader>
        <DrawerBody>{children}</DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
