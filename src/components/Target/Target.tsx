import './index.scss';

import React, { FC, useEffect, useState } from 'react';

import { handleRandomCoordinates } from '../../helpers/coordinates';
import targetSize from '../../variables/_target.module.scss';
import { useDimensions } from '../../hooks/useDimensions';

const Target: FC = () => {
	const { dimensions } = useDimensions();

	const minHeight = 100;
	const maxHeight = dimensions.height - 100;
	const minWidth = 0;
	const maxWidth = dimensions.width - 100;

	useEffect(() => {
		randomCoordinates();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const [coordinates, setCoordinates] = useState({
		top: 0,
		left: 0,
	});

	const randomCoordinates = () => {
		setCoordinates({
			top: handleRandomCoordinates(minHeight, maxHeight),
			left: handleRandomCoordinates(minWidth, maxWidth),
		});
	};

	return (
		<div
			className='target'
			style={{
				top: coordinates.top,
				left: coordinates.left,
				height: targetSize.targetSize,
				width: targetSize.targetSize,
			}}
			onClick={randomCoordinates}
		>
			<span>
				{coordinates.top}|{coordinates.left}
			</span>
		</div>
	);
};

export default Target;
