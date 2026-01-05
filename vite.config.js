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
        'career-path': resolve(__dirname, 'career-path.html'),
        'career-test': resolve(__dirname, 'career-test.html'),
        'career-test-step2': resolve(__dirname, 'career-test-step2.html'),
        'career-test-step3': resolve(__dirname, 'career-test-step3.html'),
        'career-test-step4': resolve(__dirname, 'career-test-step4.html'),
        'career-test-complete': resolve(__dirname, 'career-test-complete.html'),
        contacts: resolve(__dirname, 'contacts.html'),
        'immigration-visa': resolve(__dirname, 'immigration-visa.html'),
        'our-services': resolve(__dirname, 'our-services.html'),
        'student-visa': resolve(__dirname, 'student-visa.html'),
        'visa-services': resolve(__dirname, 'visa-services.html'),
        'visit-visa': resolve(__dirname, 'visit-visa.html'),
        'work-permit': resolve(__dirname, 'work-permit.html'),
        blog: resolve(__dirname, 'blog.html'),
        'blog-great-value-visa': resolve(__dirname, 'blog-great-value-visa.html'),
        'blog-independent-visa': resolve(__dirname, 'blog-independent-visa.html'),
        'blog-job-seeker-visa': resolve(__dirname, 'blog-job-seeker-visa.html'),
        'blog-student-visa-years': resolve(__dirname, 'blog-student-visa-years.html'),
        'blog-top-9-jobs-canada': resolve(__dirname, 'blog-top-9-jobs-canada.html'),
        'blog-visa-consulting-services': resolve(__dirname, 'blog-visa-consulting-services.html'),
        'blog-ways-immigrate-saskatchewan': resolve(__dirname, 'blog-ways-immigrate-saskatchewan.html'),
        'blog-words-dont-believable': resolve(__dirname, 'blog-words-dont-believable.html'),
        'blog-world-family-country': resolve(__dirname, 'blog-world-family-country.html'),
      },
    },
  },
});
