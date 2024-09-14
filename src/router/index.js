import { createRouter, createWebHistory } from 'vue-router';
import TheHome from '../layout/Home.vue';
import FileUpload from '../components/FileUpload.vue';
import PathInput from '../components/PathInput.vue';
import CsvViewer from '../components/CsvViewer.vue';

const routes = [
  {
    path: '/',
    name: 'TheHome',
    component: TheHome,
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
