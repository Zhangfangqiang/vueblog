/**
 * 路由配置的地方
 * @type {*[]}
 */
export default [
  /*注册路由配置*/
  {
    path      : '/auth/register',
    name      : 'Register',
    component : () => import('@/views/auth/Register')
  },
  {
    path      : '/auth/login',
    name      : 'Login',
    component : () => import('@/views/auth/Login')
  },
  {
    path      : '/',
    name      : 'Index',
    component : () => import('@/views/page/Index')
  },
  {
    path: '*',
    redirect: '/'
  }
]
