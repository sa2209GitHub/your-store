import autoprefixer from 'autoprefixer';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
	resolve: {
		alias: {
			'~': path.resolve(__dirname, './node_modules'),
			'~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
			'~fontawesome': path.resolve(
				__dirname,
				'node_modules/@fortawesome/fontawesome-free'
			),
			'@': path.resolve(__dirname, './src'),
			'@styles': path.resolve(__dirname, 'src/assets/styles'),
			'@images': path.resolve(__dirname, 'src/assets/images'),
			'@scripts': path.resolve(__dirname, 'src/scripts'),
		},
	},

	css: {
		postcss: {
			plugins: [autoprefixer],
		},
	},
	build: {
		rollupOptions: {
			output: {
				manualChunks: undefined,
			},
		},
	},
});
