import React, { FC, useState } from 'react';
import './index.scss';
import { useDimensions } from '../../hooks/useDimensions';

const Target: FC = () => {
	const { dimensions } = useDimensions();

	const [coordinates, setCoordinates] = useState({
		top: 100,
		left: 100,
	});

	const minHeight = 100;
	const maxHeight = dimensions.height - 100;
	const minWidth = 0;
	const maxWidth = dimensions.width - 100;

	const randomCoordinates = () => {
		setCoordinates({
			top:
				Math.floor(Math.random() * (maxHeight - minHeight + 1)) +
				minHeight,
			left:
				Math.floor(Math.random() * (maxWidth - minWidth + 1)) +
				minWidth,
		});
	};

	return (
		<div
			className='target'
			style={{ top: coordinates.top, left: coordinates.left }}
			onClick={randomCoordinates}
		>
			<span>
				{coordinates.top}|{coordinates.left}
			</span>
		</div>
	);
};

export default Target;
