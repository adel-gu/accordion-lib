import path from 'path';
import { defineConfig } from 'vitest/config';

import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './vitest-setup.ts',
		coverage: {
			include: ['src'],
		},
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
});
