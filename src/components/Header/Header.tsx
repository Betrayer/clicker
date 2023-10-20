import './index.scss';

import React, { FC } from 'react';

import { useAppSelector } from '../../hooks/useAppSelector';

interface IHeader {
	remainingTime: number | null;
}

const Header: FC<IHeader> = ({ remainingTime }) => {
	const score = useAppSelector((state) => state.scoreSlice.score);

	return (
		<header className='header'>
			<div className='header__wrapper'>
				<span>{score}</span>
				<span>
					{remainingTime ? remainingTime.toFixed(1) : '--|--'}
				</span>
			</div>
		</header>
	);
};

export default Header;
