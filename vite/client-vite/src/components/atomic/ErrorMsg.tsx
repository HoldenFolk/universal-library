import React, { ReactNode } from 'react';
import styled, { DefaultTheme } from 'styled-components';

interface ContainerProps {
  theme: DefaultTheme;
}

const Container = styled.div<ContainerProps>`
  color: ${(props) => props.theme.palette.danger};
`;

interface ErrorSpanProps {
  theme?: DefaultTheme;
  children?: ReactNode;
}

export const ErrorSpan = styled.span<ErrorSpanProps>`
  color: ${(props) => props.theme.palette.danger};
`;

interface ErrorMsgProps {
  text?: string;
  title?: string;
  children?: ReactNode;
}

export const ErrorMsg = ({
  text = 'An error has occurred',
  title = 'Error',
  ...optionals
}: ErrorMsgProps) => {
  const { children } = optionals;
  return (
    <Container>
      <strong>{title}</strong>
      <p>{text}</p>
      {children}
    </Container>
  );
};

export default ErrorMsg;

export const RequiredErrorMsg = (props: ErrorSpanProps) => {
  return <ErrorSpan {...props}>This field is required</ErrorSpan>;
};
