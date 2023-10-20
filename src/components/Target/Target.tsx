import './index.scss';

import React, { FC, useRef } from 'react';

import { ICoordinates } from '../../types/Target';
import targetSize from '../../variables/_target.module.scss';
import { useDetect } from '../../hooks/useDetect';

interface ITarget {
	coordinates: ICoordinates;
	handleClick: () => void;
}

const Target: FC<ITarget> = ({ coordinates, handleClick }) => {
	const targetRef = useRef(null);

	const { isMissed } = useDetect(targetRef);

	console.log(isMissed);

	return (
		<div
			ref={targetRef}
			className='target'
			style={{
				top: coordinates.top,
				left: coordinates.left,
				height: targetSize.targetSize,
				width: targetSize.targetSize,
			}}
			onClick={handleClick}
		/>
	);
};

export default Target;
