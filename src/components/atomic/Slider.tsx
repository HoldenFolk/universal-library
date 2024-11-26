import * as React from 'react';
import Slider, { SliderProps } from '@mui/material/Slider';
import styled from 'styled-components';

const SimpleSlider = React.forwardRef<HTMLSelectElement, SliderProps>(
	({ ...props }, ref) => {
		return <StyledSimple ref={ref} {...props} />;
	},
);

const StyledSimple = styled(Slider)`
	max-width: 200px;
`;

SimpleSlider.displayName = 'SimpleSlider';

export { SimpleSlider };
