// 
// Router
// _________________________
//
//	Defines available routes and views
//
//		Routes
// 			#BASIC 
//					/									- Home page
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

// Everything else
import Error404 from './views/other/error404.vue';

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
