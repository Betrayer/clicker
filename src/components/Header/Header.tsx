import './index.scss';

import React, { FC } from 'react';

import { useAppSelector } from '../../hooks/useAppSelector';

const Header: FC = () => {
	const score = useAppSelector((state) => state.scoreSlice.score);

	return (
		<header className='header'>
			<div className='header__wrapper'>
				<span>{score}</span>
			</div>
		</header>
	);
};

export default Header;
