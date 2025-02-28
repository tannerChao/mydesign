import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

export interface IIndexProps extends SvgIconProps {}

const Index: React.FunctionComponent<IIndexProps> = props => {
  return <SvgIcon {...props} className={`design-svg ${props.className}`} />;
};

export default Index;
