import { useMemo } from 'react'

const useColorsAttributesValidator = () => {
	const colors = useMemo(
		() => [
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
		],
		[]
	)

	const scales = useMemo(
		() => ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
		[]
	)

	const validAttributes: string[] = []
	colors.forEach(color => {
		validAttributes.push(`${color}`)
		scales.forEach(scale => {
			validAttributes.push(`${color}-${scale}`)
		})
		validAttributes.push(`border-${color}`)
		scales.forEach(scale => {
			validAttributes.push(`border-${color}-${scale}`)
		})
	})

	const isValidAttribute = (attr: string) => validAttributes.includes(attr)

	return { isValidAttribute }
}

export default useColorsAttributesValidator
