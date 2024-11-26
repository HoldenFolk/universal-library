import React from 'react';
import { Form, FormSelectProps } from 'react-bootstrap';
import styled from 'styled-components';

export const SimpleSelect = React.forwardRef<
	HTMLSelectElement,
	FormSelectProps
>(({ ...props }, ref) => {
	return <StyledSimple ref={ref} {...props} />;
});

const StyledSimple = styled(Form.Select)`
	max-width: 300px;
`;

SimpleSelect.displayName = 'SimpleSelect';
