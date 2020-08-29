const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('pages/Home.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error/404.vue'),
  },
];

export default routes;
