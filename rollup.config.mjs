import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import terser from '@rollup/plugin-terser'

export default {
	input: './lib/index.ts',
	output: [
		{
			file: 'dist/react-ui-suite.cjs.js',
			format: 'cjs',
			sourcemap: true,
		},
		{
			file: 'dist/react-ui-suite.esm.js',
			format: 'esm',
			sourcemap: true,
		},
	],
	external: ['react', 'react-dom'],
	plugins: [
		resolve({ extensions: ['.js', '.ts', '.tsx'] }),
		commonjs(),
		typescript({ tsconfig: './tsconfig.json' }),
		terser(),
	],
}
