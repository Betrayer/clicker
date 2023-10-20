/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from 'react';

import { useAppSelector } from './useAppSelector';

export interface IUseTargetRefresh {
	refresh: (fn: () => void, delay: number) => void;
	remainingTime: number | null;
}

export const useTargetRefresh = (): IUseTargetRefresh => {
	const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
	const [remainingTime, setRemainingTime] = useState<number | null>(null);

	const { isGameInProgress } = useAppSelector((state) => state.statusSlice);

	const refresh = (fn: () => void, delay: number) => {
		if (timeoutId) {
			clearTimeout(timeoutId);
		}

		const startTime = Date.now();
		// const timeoutId = setInterval(() => {
		// 	const elapsedTime = Date.now() - startTime;
		// 	const remaining = Math.max(0, delay - elapsedTime);
		// 	setRemainingTime(remaining / 1000);

		// 	if (remaining === 0) {
		// 		clearInterval(timeoutId);
		// 		setRemainingTime(null);
		// 		fn();
		// 	}
		// }, 100);

		// setIntervalId(timeoutId);
		// setRemainingTime(delay / 1000);
		const checkRemaining = () => {
			const elapsedTime = Date.now() - startTime;
			const remaining = Math.max(0, delay - elapsedTime);
			setRemainingTime(remaining / 1000);

			if (remaining === 0) {
				setRemainingTime(null);
				fn();
			} else {
				setTimeoutId(setTimeout(checkRemaining, 100));
			}
		};

		checkRemaining();
	};

	useEffect(() => {
		if (!isGameInProgress) {
			if (timeoutId) {
				clearTimeout(timeoutId);
			}
			setRemainingTime(0);
		}
		return () => {
			if (timeoutId) {
				clearTimeout(timeoutId);
			}
		};
	}, [isGameInProgress]);

	return {
		refresh,
		remainingTime,
	};
};
