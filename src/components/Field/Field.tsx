import './index.scss';

import React, { FC, useEffect, useState } from 'react';

import { ICoordinates } from '../../types/Target';
import Target from '../Target/Target';
import { handleRandomCoordinates } from '../../helpers/coordinates';
import { incrementScore } from '../../redux/reducers/score';
import { useDimensions } from '../../hooks/useDimensions';
import { useDispatch } from 'react-redux';

interface IField {
	refresh: (fn: () => void, delay: number) => void;
}

const Field: FC<IField> = ({ refresh }) => {
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

	const handle = () => {
		console.log('Функция выполнена');
	};

	const handleButton = () => {
		refresh(handle, 2000);
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
			<Target coordinates={coordinates} handleClick={handleClick} />
		</section>
	);
};

export default Field;
