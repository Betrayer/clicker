import { useState, useEffect } from 'react';

interface IUseDimensions {
	dimensions: {
		width: number;
		height: number;
	};
}

const getDimensions = () => {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
};

export const useDimensions = (): IUseDimensions => {
	const [dimensions, setDimensions] = useState(getDimensions());

	const handleResize = () => setDimensions(getDimensions());

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return { dimensions };
};
