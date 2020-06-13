<!--
// 
// Home.vue
// _________________________
//
//	Home page view
//	Landing page with links to and examples of each app
//
//		Layout
// 			Banners at top, hero text, example of each app below. Some apps are interactive, most are animated
//
//		Scripts
//			Methods
//				getLocalStorage() Called on mount, gets local storage, sets preferences in UI
//				cycleColors(val)
//					Cycles demo colors - updates value every x seconds. 
// 					Called on mount, stops if slider adjusts. After timeout, calls itself with random val
//
// -->

<template>
	<div class="page no-scrollbars">
		<div class="text-page-content">

			<!-- Regular Banner -->
			<!-- <Callout
				v-if="$route.path == '/'"
				icon="far fa-shapes"
				class="mbottom-md"
				color="blue"
				size="">
				<span><b>App template.</b> This is a barebones template for PWAs. </span>
			</Callout> -->

			<div class="home-hero">
				<h1>Making the internet a little nicer.</h1>
				<h2>Practical websites & apps, without all the nonsense you find everywhere else.</h2>
				<h3>(That means no ads, no popups telling you to stop blocking ads, no invasive tracking, no collecting & selling your data, no social media plugins, no subscriptions, no emails you never asked for, etc, etc)</h3>

				<!-- About -->
				<p>
					My name is Mitch. I'm a Minneapolis-based website designer/developer building websites that do what you need them to do, and nothing more.
				</p>
				<p>
					Every project is built from scratch without using any templates or themes - full control over the design and functionality means a lot more is possible.
				</p>

				<p>
					I also make websites & apps for other people. If you need one for your business (or something else 🤷‍♂️), <a @click="navigate('/menu/')">read this page</a> to see how that works - or keep scrolling to see what's I'm working on.
				</p>

				<i class="far fa-long-arrow-down"></i>
			</div>


			<!-- ProjectsList -->
			<ProjectsList :shortList="true"></ProjectsList>



		</div>
	</div>
</template>

<script>
// Components
import Callout from "@/components/ui/Callout";
import ProjectsList from "@/components/ProjectsList";
// Mixins
import metaMixin from "@/components/mixins/metaMixin.js";

export default {
	name: "home",

	components: {
		Callout,
		ProjectsList,
	},

	mixins: [
		metaMixin,
	],

	data() {
		return {
		};
	},

	mounted() {
		let _this = this;

		// Update title
		_this.updateMeta("Hotdi.sh", "Building cool things on the internet.")
	},

	computed: {
	},
	
	methods: {
		////////////////////////
		// Get Local Storage //
		//////////////////////
		// Gets all saved projects - animations, color palettes, etc
		// getLocalStorage: function(){
		// 	// Loop through all local storage, save sttorage names of animations
		// 	// Animations begin with "animation_", Palettes are "palette_"
		// 	var animations = [];
		// 	var palettes = [];
		// 	var keys = Object.keys(localStorage);
		// 	console.log("KEYS")
		// 	console.log(keys)
		// 	var i = keys.length;
		// 	while( i-- ){
		// 		if(keys[i].startsWith("animation_")){
		// 			animations.push(keys[i]);
		// 		}
		// 		if(keys[i].startsWith("palette_")){
		// 			palettes.push(keys[i]);
		// 		}

		// 	}

		// 	// Save to data
		// 	this.savedWork.animations = animations;
		// 	this.savedWork.palettes = palettes;
		// },

		
	}
};

</script>


<style lang="less">

	@import '~@/styles/variables.less';


	// Large hero text
	.home-hero{
		box-sizing: border-box;
		padding-top: 15vh;

		h1{
			font-size: 100px;
			line-height: 90px;
			color: var(--red);
		}

		h2{
			font-size: 48px;
			line-height: 56px;
			margin-top: 25px;
			color: var(--text);
		}

		h3{
			margin: 25px 0 35px 0;
			font-size: 20px;
			letter-spacing: -0.2px;
			font-weight: 400;
			font-family: var(--display);
			font-style: italic;
		}

		p{
			font-size: 28px;
			font-weight: 500;
			margin: 25px 0;
			line-height: 44px;

		}

		.fa-long-arrow-down{
			font-size: 100px;
			margin: 50px 0;
			color: var(--text);
		}
	}


</style>