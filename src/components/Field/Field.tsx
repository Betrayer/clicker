import './index.scss';

import React, { FC, useEffect, useState } from 'react';
import { incrementScore, resetScore } from '../../redux/reducers/score';

import { ICoordinates } from '../../types/Target';
import Target from '../Target/Target';
import { handleGameStatus } from '../../redux/reducers/status';
import { handleRandomCoordinates } from '../../helpers/coordinates';
import { useDimensions } from '../../hooks/useDimensions';
import { useDispatch } from 'react-redux';

interface IField {
	refresh: (fn: () => void, delay: number) => void;
	isGameInProgress: boolean;
}

const Field: FC<IField> = ({ refresh, isGameInProgress }) => {
	const { dimensions } = useDimensions();

	const dispatch = useDispatch();

	const minHeight = 100;
	const maxHeight = dimensions.height - 100;
	const minWidth = 0;
	const maxWidth = dimensions.width - 100;

	const [coordinates, setCoordinates] = useState<ICoordinates>({
		top: 0,
		left: 0,
	});

	const callback = () => {
		dispatch(handleGameStatus(false));
		dispatch(resetScore());
	};

	const handleButton = () => {
		refresh(callback, 2000);
	};

	useEffect(() => {
		randomCoordinates();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const randomCoordinates = () => {
		setCoordinates({
			top: handleRandomCoordinates(minHeight, maxHeight),
			left: handleRandomCoordinates(minWidth, maxWidth),
		});
	};

	const handleClick = () => {
		randomCoordinates();
		dispatch(incrementScore());

		handleButton();
	};

	return (
		<section className='field'>
			{isGameInProgress ? (
				<Target coordinates={coordinates} handleClick={handleClick} callback={callback} />
			) : null}
		</section>
	);
};

export default Field;
