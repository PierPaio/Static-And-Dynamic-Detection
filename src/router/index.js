import { createRouter, createWebHistory } from 'vue-router';
import AppHome from '../layout/AppHome.vue';
import FileUpload from '../components/FileUpload.vue';
import PathInput from '../components/PathInput.vue';
import CsvViewer from '../components/CsvViewer.vue';

const routes = [
  {
    path: '/',
    name: 'AppHome',
    component: AppHome,
  },
  {
    path: '/upload',
    name: 'FileUpload',
    component: FileUpload,
  },
  {
    path: '/path',
    name: 'PathInput',
    component: PathInput,
  },
  {
    path: '/csv-viewer',
    name: 'CsvViewer',
    component: CsvViewer,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
