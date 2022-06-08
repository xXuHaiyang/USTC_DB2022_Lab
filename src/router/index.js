import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/Login'
import student from '@/components/Student/Student'

Vue.use(Router)

export default new Router({
  routes: [
	{
		path: '/',
		name: 'login',
		redirect: '/login',
	},
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
	  path: '/student',
	  name: 'student',
	  component: student,
	  children: [
		{
			path: 'personalinfo',
			name: 'personalinfo',
			component: () => import('@/components/Student/PersonalInfo'),
		},
		{
			path: 'dailycheck',
			name: 'dailycheck',
			component: () => import('@/components/Student/DailyCheck'),
		},
		{
			path: 'markacid',
			name: 'markacid',
			component: () => import('@/components/Student/MarkAcid'),
		},
		{
			path: 'entry',
			name: 'entry',
			component: () => import('@/components/Student/Entry'),
		},
	]	


	}
  ]
})