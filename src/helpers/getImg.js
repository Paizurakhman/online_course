export const getImg = (name) => {
	return new URL(`/src/assets/images/${name}`, import.meta.url)
}
export const getIcon = (name) => {
	return new URL(`/src/assets/icons/${name}.svg`, import.meta.url)
}
