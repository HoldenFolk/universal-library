import React from 'react';
import DatePicker, { ReactDatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';

const DateSelector = (props: ReactDatePickerProps) => {
	return (
		<DateSelectorWrapper>
			<DatePicker {...props} />
		</DateSelectorWrapper>
	);
};

const DateSelectorWrapper = styled.div`
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

export default DateSelector;
