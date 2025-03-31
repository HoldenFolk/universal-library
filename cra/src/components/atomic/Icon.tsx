import React from 'react';
import {
	FaTools,
	FaRegSquare,
	FaBluetooth,
	FaLayerGroup,
	FaInfoCircle,
	FaArrowUp,
	FaArrowDown,
	FaUserPlus,
	FaGlobe,
	FaArrowAltCircleRight,
	FaUpload,
	FaAngleRight,
	FaAngleLeft,
	FaPlay,
	FaPause,
} from 'react-icons/fa';

type IconName =
	| 'tools'
	| 'FaRegSquare'
	| 'bluetooth'
	| 'floor'
	| 'FaInfoCircle'
	| 'FaArrowUp'
	| 'FaArrowDown'
	| 'FaUserPlus'
	| 'FaGlobe'
	| 'FaArrowAltCircleRight'
	| 'FaAngleLeft'
	| 'FaAngleRight'
	| 'FaUpload'
	| 'FaPlay'
	| 'FaPause';

interface IconProps extends React.SVGProps<SVGSVGElement> {
	name: IconName;
}

export const Icon = ({ name, ...rest }: IconProps) => {
	if (name === 'tools') {
		return <FaTools {...rest} />;
	} else if (name === 'FaRegSquare') {
		return <FaRegSquare {...rest} />;
	} else if (name === 'bluetooth') {
		return <FaBluetooth {...rest} />;
	} else if (name === 'floor') {
		return <FaLayerGroup {...rest} />;
	} else if (name === 'FaInfoCircle') {
		return <FaInfoCircle {...rest} />;
	} else if (name === 'FaArrowUp') {
		return <FaArrowUp {...rest} />;
	} else if (name === 'FaArrowDown') {
		return <FaArrowDown {...rest} />;
	} else if (name === 'FaUserPlus') {
		return <FaUserPlus {...rest} />;
	} else if (name === 'FaGlobe') {
		return <FaGlobe {...rest} />;
	} else if (name === 'FaArrowAltCircleRight') {
		return <FaArrowAltCircleRight {...rest} />;
	} else if (name === 'FaUpload') {
		return <FaUpload {...rest} />;
	} else if (name === 'FaAngleLeft') {
		return <FaAngleLeft {...rest} />;
	} else if (name === 'FaAngleRight') {
		return <FaAngleRight {...rest} />;
	} else if (name === 'FaPlay') {
		return <FaPlay {...rest} />;
	} else if (name === 'FaPause') {
		return <FaPause {...rest} />;
	} else {
		return null;
	}
};

export default Icon;
