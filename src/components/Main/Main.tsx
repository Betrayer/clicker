import React, { FC } from 'react';

import Field from '../Field/Field';
import Header from '../Header/Header';
import Modal from '../Modal/Modal';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useTargetRefresh } from '../../hooks/useTargetRefresh';

const Main: FC = () => {
	const { isGameInProgress } = useAppSelector((state) => state.statusSlice);

	const { refresh, remainingTime } = useTargetRefresh();
	
	return (
		<>
			{!isGameInProgress ? <Modal /> : null}
			<Header remainingTime={remainingTime} />
			<Field refresh={refresh} isGameInProgress={isGameInProgress} />
		</>
	);
};

export default Main;
