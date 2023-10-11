import './index.scss';

import React, { FC, useEffect, useState } from 'react';

import { ICoordinates } from '../../types/Target';
import Target from '../Target/Target';
import { handleRandomCoordinates } from '../../helpers/coordinates';
import { incrementScore } from '../../redux/reducers/score';
import { useDimensions } from '../../hooks/useDimensions';
import { useDispatch } from 'react-redux';

const Field: FC = () => {
	const { dimensions } = useDimensions();

	const dispatch = useDispatch();

	const [coordinates, setCoordinates] = useState<ICoordinates>({
		top: 0,
		left: 0,
	});

	const [debouncedFunction, setDebouncedFunction] = useState<NodeJS.Timeout | null>(null);

	const debounce = (fn: () => void, delay: number) => {
		if (debouncedFunction) {
			clearTimeout(debouncedFunction);
		}
		const timeoutId = setTimeout(() => {
			fn();
		}, delay);
		setDebouncedFunction(timeoutId);
	};

	const handle = () => {
		console.log('Функция выполнена');
	};

	const handleButton = () => {
		debounce(handle, 2000);
	};

	const minHeight = 100;
	const maxHeight = dimensions.height - 100;
	const minWidth = 0;
	const maxWidth = dimensions.width - 100;

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
