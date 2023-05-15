import type { Ref } from 'vue'

export const onlyAlphabeticAndSlash = (value: string) => {
	if (value) {
		return /^[\p{L}\s-]+$/u.test(value)
	}
	return true
}

export const test = <T>(param: Ref<T>) => {
	return (value: string) => {
		if (value) {
			return param
		}
		return true
	}
}
