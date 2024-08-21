import { useMemo } from 'react'

const useAttrs = (props: Record<string, any>, excludeKeys: string[] = []) => {
	return useMemo(() => {
		const attrs: Record<string, any> = {}

		for (const key in props) {
			if (!excludeKeys.includes(key)) {
				const value = props[key]
				attrs[key] = typeof value === 'boolean' ? value.toString() : value
			}
		}

		return attrs
	}, [props, excludeKeys])
}

export default useAttrs
