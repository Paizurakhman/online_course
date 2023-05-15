type IVal = string

export const dateSetter = (value: IVal): string => {
	if (value) {
		const months: string[] = [
			'января',
			'февраля',
			'марта',
			'апреля',
			'мая',
			'июня',
			'июля',
			'августа',
			'сентября',
			'октября',
			'ноября',
			'декабря',
		]

		const formatDate = value.split('-').reverse().join('-')
		const newDate = new Date(formatDate)
		const [day, month, year] = [
			newDate.getDay(),
			newDate.getMonth(),
			newDate.getFullYear(),
		]
		const formatMonth = months[month]
		return `${day} ${formatMonth} ${year}`
	}
	return 'Нет данных'
}

export const DD_MM_YYYY = (value: Date): string => {
	if (value) {
		const dayOfMonth =
			value.getDate() < 10 ? `0${value.getDate()}` : value.getDate()
		const month =
			value.getMonth() + 1 < 10
				? `0${value.getMonth() + 1}`
				: value.getMonth() + 1
		const year = value.getFullYear()
		return `${dayOfMonth}-${month}-${year}`
	}
	return ''
}
