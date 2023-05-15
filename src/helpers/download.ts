import type { FormatIcon } from '@/types/common'

const getBlobByUrl = async (url: string) => {
	const response = await fetch(url)
	return response.blob()
}

export const downloadDocument = async (location: string, name: string) => {
	const blob = await getBlobByUrl(location)
	const fileType = { type: blob.type || '' }
	const file = new File([blob], name, fileType)
	const newBlob = new Blob([file], { ...(fileType || '') })

	const url = URL.createObjectURL(newBlob)

	createLinkAndDownload(url, name)
}

export const createLinkAndDownload = (url: string, fileName: string) => {
	const fileLink = document.createElement('a')

	fileLink.href = url
	fileLink.download = fileName.replace('.', '')
	document.body.appendChild(fileLink)
	fileLink.click()
	setTimeout(() => fileLink.remove(), 10)
}

export const getFileType = (fileName: string) => {
	return fileName.split('.').pop() as FormatIcon
}
