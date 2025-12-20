import { defineConfig } from 'vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'about-us': resolve(__dirname, 'about-us.html'),
        'book-consultation': resolve(__dirname, 'book-consultation.html'),
        contacts: resolve(__dirname, 'contacts.html'),
        'immigration-visa': resolve(__dirname, 'immigration-visa.html'),
        'our-services': resolve(__dirname, 'our-services.html'),
        'student-visa': resolve(__dirname, 'student-visa.html'),
        'visa-services': resolve(__dirname, 'visa-services.html'),
        'visit-visa': resolve(__dirname, 'visit-visa.html'),
        'work-permit': resolve(__dirname, 'work-permit.html'),
      },
    },
  },
});
