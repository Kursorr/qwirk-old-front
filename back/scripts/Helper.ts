const isEmpty = (field) => {
  return (field === undefined || field === null || field === '' || field === [] || field === false)
}

const randomTag = (min: number = 1000, max: number = 9999) => {
    return (Math.random() * (max - min + 1) | 0) + min
}

const decodeBase64Image = (data: string) => {
	if (!data) return ''

	const matches = data.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/)
	let response: any = {}

	response.type = matches[1]
	response.data = new Buffer(matches[2], 'base64')

	return response
}

const imgPath = (result: any) => {
	if (!result) return 'anonym.png'

	const imgTypeRegularExpression = /\/(.*?)$/
	const imgType = result.type.match(imgTypeRegularExpression)
	const imgName = randomText(14)
	const uploadedImgPath = imgName + '.' + imgType[1]

	return uploadedImgPath
}

function randomText(value) {
	let text = '';
	const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567'

	for (let i = 0; i < value; i++)
		text += possible.charAt(Math.floor(Math.random() * possible.length))

	return text
}

export { isEmpty, randomTag, decodeBase64Image, imgPath, randomText }
