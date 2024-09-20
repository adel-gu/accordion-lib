import type { StorybookConfig } from '@storybook/react-vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import path, { join, dirname } from 'path';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}
const config: StorybookConfig = {
  stories: ['../../../packages/accordion/**/*.stories.@(ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-interactions'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  // To resolve imports with "@/.."
  viteFinal: async (config) => {
    config.root = path.resolve(__dirname, '../../../packages/accordion');

    config.plugins?.push(
      tsconfigPaths({
        projects: [
          path.resolve(__dirname, '../../../packages/accordion/tsconfig.json'),
        ],
      }),
    );

    return config;
  },
};
export default config;
