import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-storybook',
  globalStyle: 'src/global/build/tailwind.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
