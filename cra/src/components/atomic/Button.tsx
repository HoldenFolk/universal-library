import React from 'react';
import { Button as BootstrapBtn, ButtonProps } from 'react-bootstrap';

export const Button: React.FC<ButtonProps> = ({ className = '', ...rest }) => {
	return <BootstrapBtn className={`w-max ${className}`} {...rest} />;
};

export default Button;
