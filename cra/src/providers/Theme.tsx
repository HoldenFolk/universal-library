import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/constants';
import { ReactNode } from 'react';

interface ThemeProps {
	children: ReactNode;
}

// Global theme provider for the application
const Theme = ({ children }: ThemeProps) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
