import { defineConfig } from 'astro/config';

// https://astro.build/config
// import image from '@astrojs/image';

import { astroImageTools } from 'astro-imagetools';

// https://astro.build/config
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
	integrations: [astroImageTools],
	output: 'server',
	adapter: vercel(),
});
