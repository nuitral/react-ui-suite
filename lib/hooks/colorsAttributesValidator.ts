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
		],
		[]
	)

	const scales = useMemo(
		() => ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
		[]
	)

	const validAttributes = useMemo(() => {
		const attributes: string[] = []
		colors.forEach(color => {
			attributes.push(`${color}`)
			scales.forEach(scale => {
				attributes.push(`${color}-${scale}`)
			})
		})
		return attributes
	}, [colors, scales])

	const isValidAttribute = (attr: string) => validAttributes.includes(attr)

	return { isValidAttribute }
}

export default useColorsAttributesValidator
