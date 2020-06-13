// 
// Router
// _________________________
//
//	Defines available routes and views
//
//		Routes
// 			#BASIC 
//					/									- Home page
//					/whats-cookin/						- Projects page
//					/menu/								- Services & Pricing page
//					/changelog/							- Changelog
// 			TESTING
//					/commands/							- Test and see different UI elements and functions - not linked to anywhere
//			#ERRORS  
//					/404/
//
//		Meta options	
//			help: if true, the help nav button will be shown on that route.
// 

// Imports
import Vue from 'vue';
import Router from 'vue-router';
// Basic pages
import Home from './views/Home.vue';
import Projects from './views/Projects.vue';
import Services from './views/Services.vue';

// Everything else
import Error404 from './views/other/error404.vue';
import Changelog from './views/other/Changelog.vue';
import Commands from './views/other/Commands.vue';

Vue.use(Router);

const router = new Router({
	mode: 'history',
	linkExactActiveClass: 'is-active',
	base: process.env.VUE_APP_BASE_PATH,
	// Return to top after route change
	scrollBehavior() {
		return { x: 0, y: 0 };
	},
	routes: [
		///////////
		// Home //
		/////////
		{
			path: '/',
			name: 'Home',
			component: Home,
		},
		///////////////
		// Projects //
		/////////////
		{
			path: '/whats-cookin/',
			name: 'Projects',
			component: Projects,
		},
		///////////////
		// Services //
		/////////////
		{
			path: '/menu/',
			name: 'Services',
			component: Services,
		},
		////////////////
		// Changelog //
		//////////////
		{
			path: '/changelog/',
			name: 'Changelog',
			component: Changelog,
		},
		///////////////
		// Commands //
		/////////////
		{
			path: '/commands/',
			name: 'Commands',
			component: Commands,
		},

	
		//////////////////////
		// Everything Else //
		////////////////////
		// 404
		{
			path: '/404',
			name: 'Error404',
			component: Error404
		},
		// If no match, redirect to 404
		{
			path: '*',
			redirect: '/404'
		}
	]
});


export default router;
