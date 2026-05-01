import { describe, expect, it } from 'vitest';

import viteConfig from '../../vite.config';

describe('rebuild vite config', () => {
  it('splits large frontend bundles into manual chunks', () => {
    const output = viteConfig.build?.rollupOptions?.output;
    const manualChunks =
      output && !Array.isArray(output)
        ? output.manualChunks
        : undefined;

    expect(manualChunks).toBeTypeOf('function');
  });
});
