export const abrNumber = (value: number): string => {
	const suffixes: string[] = ['', ' тыс', ' млн', ' млрд']
	const suffixNum = Math.floor((('' + value).length - 1) / 3)
	let shortValue = parseFloat(
		(suffixNum != 0 ? value / Math.pow(1000, suffixNum) : value).toPrecision(2)
	)
	if (shortValue % 1 != 0) {
		shortValue = +shortValue.toFixed(1)
	}
	return shortValue + suffixes[suffixNum]
}
