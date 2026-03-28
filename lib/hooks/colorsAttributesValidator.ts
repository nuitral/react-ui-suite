const colorsAttributesValidator = () => {
	const colors = [
		'primary',
		'secondary',
		'accent',
		'error',
		'success',
		'warning',
		'info',
		'neutral',
		'background',
		'surface',
	]
	const scales = ['100', '200', '300', '400', '500', '600', '700', '800', '900']

	const validAttributes: string[] = []

	colors.forEach(color => {
		validAttributes.push(`${color}`)
		validAttributes.push(`${color}-gloss`)
		validAttributes.push(`${color}-outline`)

		scales.forEach(scale => {
			const base = `${color}-${scale}`
			validAttributes.push(base)
			validAttributes.push(`${base}-gloss`)
			validAttributes.push(`${base}-outline`)
		})
	})

	colors.forEach(color => {
		validAttributes.push(`border-${color}`)
		scales.forEach(scale => {
			const base = `border-${color}-${scale}`
			validAttributes.push(base)
		})
	})

	const isValidAttribute = (attr: string) => validAttributes.includes(attr)

	return { isValidAttribute }
}

export default colorsAttributesValidator
