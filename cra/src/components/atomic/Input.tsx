import React from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { Form } from 'react-bootstrap';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	theme?: DefaultTheme;
}

interface BootstrapInputProps
	extends Omit<React.ComponentProps<typeof Form.Control>, 'as'> {
	as?: 'input';
}

const Input = (props: InputProps) => {
	return <StyledInput {...props} />;
};

export const BottomBorderInput = (props: InputProps) => {
	return <StyledBottomBorder {...props} />;
};

export const BootstrapInput = (props: BootstrapInputProps) => {
	return <Form.Control {...props} />;
};

const StyledInput = styled.input<InputProps>`
	/* width: 50%; */
	border: 1px solid ${props => props.theme.palette.grayscale[4]};
	border-radius: 0.25rem;
	padding: 0.2rem;
	&:focus {
		color: #212529;
		background-color: #fff;
		border-color: #86b7fe;
		outline: 0;
		box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
	}
`;

const StyledBottomBorder = styled(StyledInput)`
	border-width: 0px;
	border-bottom: 1px solid ${props => props.theme.palette.grayscale[4]};
	border-radius: 0px;
	padding: 4px 0;
	min-width: 14rem;
	color: ${props => props.theme.palette.fourth};
`;

export default Input;
