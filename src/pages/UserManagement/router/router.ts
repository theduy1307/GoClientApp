import type { RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
  {
    path: '/user-management',
    component: () => import('../UserManagementView.vue')
  }
]

export default routes
