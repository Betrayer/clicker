import { useState } from 'react';

export interface IUseTargetRefresh {
	refresh: (fn: () => void, delay: number) => void;
	remainingTime: number | null;
}

export const useTargetRefresh = (): IUseTargetRefresh => {
	const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
	const [remainingTime, setRemainingTime] = useState<number | null>(null);

	const refresh = (fn: () => void, delay: number) => {
		if (intervalId) {
			clearInterval(intervalId as NodeJS.Timeout);
		}

		const startTime = Date.now();
		const timeoutId = setInterval(() => {
			const elapsedTime = Date.now() - startTime;
			const remaining = Math.max(0, delay - elapsedTime);
			setRemainingTime(remaining / 1000);

			if (remaining === 0) {
				clearInterval(timeoutId);
				setRemainingTime(null);
				fn();
			}
		}, 100);

		setIntervalId(timeoutId);
		setRemainingTime(delay / 1000);
	};

	return {
		refresh,
		remainingTime,
	};
};
