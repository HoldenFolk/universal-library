import React, { forwardRef } from 'react';
import Image, { ImageProps } from 'react-bootstrap/Image';

const MyImage = (
	props: React.PropsWithChildren<ImageProps>,
	ref: React.Ref<HTMLImageElement>,
) => {
	return <Image {...props} ref={ref} />;
};

export default forwardRef(MyImage);
