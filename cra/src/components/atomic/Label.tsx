import React, { ReactNode, HTMLAttributes } from 'react';
import styled, { DefaultTheme } from 'styled-components';
import InputLabel, { InputLabelProps } from '@mui/material/InputLabel';

interface LabelProps extends HTMLAttributes<HTMLLabelElement> {
	children?: ReactNode;
	required?: boolean;
	htmlFor?: string;
}

export const Label = ({ ...optionals }: LabelProps) => {
	const { required = false, ...rest } = optionals;

	if (required) {
		return <RequiredLabel {...rest} />;
	}

	return <BaseLabel {...rest} />;
};

export default Label;

export const MuiLabel = (props: InputLabelProps) => {
	return <InputLabel {...props} />;
};

interface LabelForSelectProps {
	theme: DefaultTheme;
}

export const LabelForSelect = styled.p<LabelForSelectProps>`
	color: ${props => props.theme.colors.darkGrey};
`;

interface BaseLabelProps {
	theme: DefaultTheme;
}

const BaseLabel = styled.label<BaseLabelProps>`
	&::after {
		content: ':';
	}
	text-transform: capitalize;
	font-weight: 550;
	color: ${props => props.theme.palette.grayscale[2]};
	/* min-width: 8rem; */
`;

const RequiredLabel = styled(BaseLabel)<BaseLabelProps>`
	${({ theme }) => `
    &::before {
      content: "*";
      color: ${theme.palette.danger};
    }
  `}
`;
