import React from 'react';
import { Control, Controller } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import InputGroup, { InputGroupProps } from 'react-bootstrap/InputGroup';
import styled from 'styled-components';

interface SearchBarProps extends InputGroupProps {
	control: Control<{ search: string }>;
	placeHolder: string;
	inputRef?: React.RefObject<HTMLInputElement>;
}

const SearchBar: React.FC<SearchBarProps> = ({
	control,
	placeHolder,
	inputRef,
	...props
}) => (
	<StyledInputGroup {...props}>
		<Controller
			name="search"
			control={control}
			render={({ field }) => (
				<Form.Control
					{...field}
					ref={inputRef}
					autoComplete="off"
					type="text"
					aria-label="Search"
					placeholder={placeHolder}
				/>
			)}
		/>
	</StyledInputGroup>
);

const StyledInputGroup = styled(InputGroup)`
	max-width: 500px;
`;

export default SearchBar;
