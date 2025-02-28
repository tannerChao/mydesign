import React from 'react';
import { Box, styled } from '@mui/material';

import Logo, { IIndexProps as LogoProps } from '@components/Header/Logo';
import Menu, { IIndexProps as MenuProps } from '@components/Header/Navigation/menu';
import { MRouter } from '@components/Header/Navigation/options';

export { type LogoProps, type MenuProps, type MRouter };

interface HeaderProps {
  islogo?: boolean;
  logoprops?: LogoProps;
  ismenu?: boolean;
  menuprops?: MenuProps;
}

export const Container = styled(Box)(() => {
  return {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    boxSizing: 'border-box',
  };
});

const Header: React.FC<HeaderProps> = ({ islogo = true, logoprops, ismenu, menuprops }) => {
  return (
    <Container className="header">
      {islogo && <Logo {...logoprops} />}
      {ismenu && menuprops && <Menu {...menuprops} />}
    </Container>
  );
};

export default Header;
