import './index.scss';

import React, { FC } from 'react';

import { handleGameStatus } from '../../redux/reducers/status';
import { useAppDispatch } from '../../hooks/useAppDispatch';

const Modal: FC = () => {
	const dispatch = useAppDispatch();

	const handleGameStart = () => {
		dispatch(handleGameStatus(true));
	};

	return (
		<div className='modal'>
			<div className='modal__content'>
				<ul>
					<li>
						<button onClick={handleGameStart}>start</button>
					</li>
					<li>
						<button>options</button>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Modal;
