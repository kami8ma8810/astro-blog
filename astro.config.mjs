import { defineConfig } from 'astro/config';

// https://astro.build/config
import image from '@astrojs/image';

// https://astro.build/config
import vercel from '@astrojs/vercel/serverless';
import { astroImageTools } from 'astro-imagetools';

// https://astro.build/config
export default defineConfig({
	integrations: [image(), astroImageTools],
	output: 'server',
	adapter: vercel(),
});
