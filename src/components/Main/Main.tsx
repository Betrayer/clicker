import React, { FC } from 'react';

import Field from '../Field/Field';
import Header from '../Header/Header';
import { useTargetRefresh } from '../../hooks/useTargetRefresh';

const Main: FC = () => {
	const { refresh, remainingTime } = useTargetRefresh();

	return (
		<>
			<Header remainingTime={remainingTime} />
			<Field refresh={refresh} />
		</>
	);
};

export default Main;
