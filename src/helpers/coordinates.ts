export const handleRandomCoordinates = (minVal: number, maxVal: number) => {
	const result = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
	return result;
};
