import { useEffect, useState } from 'react';

interface IUseDetect {
	isMissed: boolean;
}

export const useDetect = (ref: React.RefObject<HTMLElement>): IUseDetect => {
	const [isMissed, setIsMissed] = useState(false);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				setIsMissed(true);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [ref]);

	return {
		isMissed,
	};
};
