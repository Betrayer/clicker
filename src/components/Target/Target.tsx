import './index.scss';

import React, { FC } from 'react';

import { ICoordinates } from '../../types/Target';
import targetSize from '../../variables/_target.module.scss';

interface ITarget {
	coordinates: ICoordinates;
	handleClick: () => void;
}

const Target: FC<ITarget> = ({ coordinates, handleClick }) => {
	return (
		<div
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
