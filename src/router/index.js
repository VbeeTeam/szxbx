import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/classroom',
		name: 'classroom',
		component: () => import('../views/ClassRoom.vue')
	},
	{
		path: '/selected',
		name: 'selected',
		component: () => import('../views/Selected.vue')
	},
	{
		path: '/my',
		name: 'my',
		component: () => import('../views/My.vue')
	},
	{
		path: '/content',
		name: 'content',
		component: () => import('../views/Content.vue')
	},
	{
		path: '/programme',
		name: 'programme',
		component: () => import('../views/Programme.vue')
	},
	{
		path: '/programmeList',
		name: 'programmeList',
		component: () => import('../views/ProgrammeList.vue')
	}
]

const router = new VueRouter({
	// mode: 'history',
	base: process.env.BASE_URL,
	routes,
	scrollBehavior() {
		return {
			x: 0,
			y: 0
		}
	}
})

export default router
