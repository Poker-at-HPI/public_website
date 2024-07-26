import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [vitePreprocess({})],

  kit: {
    adapter: adapter({
      // default options are shown
      pages: 'build',
      assets: 'build',
      fallback: null,
      precompress: false,
      strict: true
    }),
    paths: {
      base: process.env.NODE_ENV === 'development' ? '' : '/public_website'
    },
    alias: {
      "@/*": "./path/to/lib/*",
      "$assets": "./static",
    },
  },
};

export default config;