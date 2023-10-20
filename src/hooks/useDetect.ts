// import { handleGameStatus } from '../redux/reducers/status';
// import { useAppDispatch } from './useAppDispatch';

import { useEffect } from 'react';

export const useDetect = (
	ref: React.RefObject<HTMLElement>,
	callback: () => void,
) => {
	// const dispatch = useAppDispatch();

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				// dispatch(handleGameStatus(false));
				callback();
			}
		};

		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ref]);
};
