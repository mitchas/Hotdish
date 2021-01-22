<!--
// 
// Home.vue
// _________________________
//
//	Home page view
//		Short about, link to services, some projects
//
// -->

<template>
	<div class="home-page no-scrollbars">
		<div class="home-page-content">

			<!-- Regular Banner -->
			<!-- <Callout
				v-if="$route.path == '/'"
				icon="far fa-shapes"
				class="mbottom-md"
				color="blue"
				size="">
				<span><b>App template.</b> This is a barebones template for PWAs. </span>
			</Callout> -->

			<!-- Logo -->
			<div class="home-logo">
				<img src="@/assets/branding/pot-300.png" v-if="!$store.getters.userPreferences.darkMode"/>
				<img src="@/assets/branding/pot-300-dark.png" class="dark" v-else/>
			</div>

			<!-- Content -->
			<div class="tagline">
				<div class="text">
					<span>
						<b>Hotdi.sh</b>
						is making the internet a little nicer.
					</span>
				</div>
			</div>
			<h1>Practical websites & apps, without all the clutter you find everywhere else.</h1>
			<p class="big">That means no ads, no popups telling you to stop blocking ads, no invasive tracking, no collecting & selling your data, no social media plugins, no subscriptions, no emails you never asked for, etc.</p>

			<!-- Spacer -->
			<i class="spacer-icon fas fa-campfire"></i>

			<!-- About -->
			<p class="ptop-sm">
				My name is Mitch. I'm a <b>Minneapolis-based website designer/developer</b> building websites that do what you need them to do, and nothing else.
			</p>
			<p class="mtop-sm">
				Every project is built from scratch without using any templates or themes - full control over the design and functionality means a lot more is possible.
			</p>

			<!-- About Split -->
			<div class="about-split">
				<div class="left">
					<h3>Side Projects</h3>
					<p class="small">
						I build small, single-purpose websites to make everyday tasks a little easier. Most projects are original ideas, others are existing tools & ideas I thought I could make a little nicer.
					</p>
					<!-- <a href="#projects">See the projects</a> -->
				</div>
				<div class="right">
					<h3>& Work</h3>
					<p class="small">
						I also make websites & apps for other people. Anything from simple informative websites (like this one), to more complex and interactive websites & tools.
					</p>
					<a href="#work">Interested?</a>
				</div>
			</div>



			<div class="project-block ptop-xl">
				<!--
					======================== 
					Ceev .io
					======================== 
				-->
				<h2>Ceev.io</h2>
				<div class="project-content">
					<div class="third">
						<p class="small">
							A super simple, (mostly) free resume designer for everyone. Fast, well-designed, easy to use, and works on any device.
						</p>
					</div>
					<div class="third">
						<p class="small">
							There's also a Chrome Extension to import your LinkedIn profile so you can spend even less time on it.
						</p>
					</div>
					<div class="third">
						<p class="small">
							It's built on Angular and Firebase.
						</p>
					</div>
				</div>
				<!-- Ceev footer -->
				<div class="project-footer">
					<div class="project-footer-block">
						<button class="button small" @click="tab('https://ceev.io')">
							<i class="far fa-link"></i>
							<span>Go to Ceev.io</span>
						</button>
					</div>
					<!-- Spacer -->
					<div class="project-footer-spacer"></div>
				</div>
				
				<!--
					======================== 
					Keyframes.app
					======================== 
				-->
				<h2 class="mtop-xl">Keyframes.app</h2>
				<div class="project-content">
					<div class="third">
						<p class="small">
							Dead-simple visual tools to help developers generate different CSS properties for web projects.
						</p>
					</div>
					<div class="third">
						<p class="small">
							Tools for generating @keyframe animations, box-shadows, colors, characters, &nbsp; & more in the works.
						</p>
					</div>
					<div class="third">
						<p class="small">
							Free, <a href="https://github.com/mitchas/keyframes" target="_blank">open source</a>, PWA & offline support.
						</p>
					</div>
				</div>
				<!-- Keyframes footer -->
				<div class="project-footer">
					<div class="project-footer-block">
						<button class="button small" @click="tab('https://keyframes.app')">
							<i class="far fa-link"></i>
							<span>Go to Keyframes.app</span>
						</button>
					</div>
					<!-- Spacer -->
					<div class="project-footer-spacer"></div>
				</div>
				<!--
					======================== 
					Coming Soon
					======================== 
					======================== 
					tidy.camp
					======================== 
				-->

				<p class="mtop-xl">
					You can see what else I'm up to on <a href="https://github.com/mitchas" target="_blank">github.com/mitchas</a>, or follow me on <a href="https://twitter.com/sleumasm" target="_blank">Twitter</a>.
				</p>
			
			</div>


			<!-- Full page spacer -->
			<div class="full-page-spacer mtop-xl mbottom-xl" id="work">
				<div class="full-page-spacer-body icons">
					<i class="fal fa-compass"></i>
					<i class="fal fa-trees"></i>
					<i class="fal fa-laptop-code"></i>
					<i class="fal fa-campfire"></i>
					<i class="fal fa-mobile"></i>
					<i class="fal fa-bicycle"></i>
					<i class="fal fa-snowflake"></i>
					<i class="fal fa-globe"></i>
				</div>
			</div>


			<!-- Client work description -->
			<h2>Get a one-of-a-kind website designed and deployed in days (not weeks)</h2>
			<p class="mtop-md">
				Affordable, fixed price websites with turnaround in as little as 4 days if you know what you need (if you don't, that's cool too). 
			</p>

			<p class="mtop-md">
				<b>If you</b>
				<ul>
					<li>Need a simple, well-designed website really, really fast;</li>
					<li>Don't want to try to figure out how to do it yourself;</li>
					<li>Have the content - text, images, links - that you need on the site;</li>
					<li>Have a very general idea (or don't care) about the overall style or design;</li>
				</ul>
				Then in <b>about 4 days and for $499 (ish*)</b>, you can have a well-designed, easy to edit, maintenance-free website.
			</p>

			<small class="block mtop-md fade">
				* On top of the flat fee, you'll pay the price to register your chosen domain ($5-$60/year, usually) and hosting (~$40/year).
			</small>

			<p class="mtop-lg">
				<b>Need a little more than that?</b>
				<ul>
					<li>More time working together on content, design, and functionality choices  (+ ~$200)</li>
					<li>Advanced CMS for editing or blogging  (+ ~$200)</li>
					<li>An interactive single-page application or tool, similar to my side projects (+ ~$400)</li>
					<li>A fomal visual identity - colors, fonts, branding, etc  (~$120)</li>
					<li>Browser extension to extend functionality of website (+ ~$400)</li>
					<li>Full-stack web application with user authentication, data reading/writing, etc ($1000+)</li>
				</ul>
			</p>

	


			<p class="mtop-md mbottom-md">
				<b>Interested? Send me an email at <a href="mailto:hello@hotdi.sh" target="_blank">hello@hotdi.sh</a></b>
			</p>


		</div>
	</div>
</template>

<script>
// Components
import Callout from "@/components/ui/Callout";
// Mixins
import metaMixin from "@/components/mixins/metaMixin.js";

export default {
	name: "home",

	components: {
		Callout,
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

	// Page properties
	.home-page{
		box-sizing: border-box;
		padding: 0 25px;
		overflow: auto;
		height: 100%;
		color: var(--text);

		@media (max-width: @screenMD) {
			padding: 0 15px 0 15px;
		}

		.home-page-content{
			max-width: var(--maxWidth);
			margin: 0 auto;		
			box-sizing: border-box;
			padding: 60px 0;

			h1,h2,h3,h4,h5,h6,p{
				max-width: none;
				color: var(--text);
			}

			a{
				color: var(--text);
				text-decoration: underline;

				&:hover{
					text-decoration-color: var(--orange);
				}
			}

			// Spacer icons 
			.spacer-icon{
				text-align: center;
				font-size: 22px;
				margin: 5vh auto;
				width: 100%;
			}

			// Logo
			.home-logo{
				padding-top: 10vh;
				margin-bottom: 8vh;

				img{
					display: block;
					height: 80px;
					width: auto;
					filter: grayscale(100%) brightness(0%);

					&.dark{
						filter: grayscale(100%) brightness(200%);
					}
				}

				@media (max-width: @screenLG) {
					padding-top: 8vh;
					margin-bottom: 6vh;
				}
				@media (max-width: @screenMD) {
					padding-top: 6vh;
					margin-bottom: 6vh;
				}
			}

			.tagline{
				margin-bottom: 35px;
				font-size: 42px;
				letter-spacing: -0.4px;
				font-weight: 500;
				font-family: var(--space);

				b{
					font-weight: 800;
				}
				
			}

			h1{
				font-size: 28px;
				line-height: 44px;
				font-weight: 400;
				font-family: var(--space);
				margin-bottom: 8vh;

				@media (max-width: @screenMD) {
					line-height: 40px;
					margin-bottom: 6vh;
				}
			}


			.about-split{
				display: flex;
				justify-content: space-between;
				// border-top: 1px solid var(--text);
				// border-bottom: 1px solid var(--text);
				box-sizing: border-box;
				padding: 0 0;
				margin: 8vh 0;

				.left,
				.right{
					width: 50%;
					min-width: 50%;
					max-width: 50%;
					box-sizing: border-box;
					box-sizing: border-box;

					h3{
						font-weight: 600;
					}

					a{
						display: block;
						margin-top: 8px;
					}

					p{
						margin-top: 10px;
					}
				}

				.right{
					padding: 40px 0 40px 40px;
					border-left: 1px solid var(--text);
					border-bottom: 1px solid var(--text);
					border-top: 1px solid transparent;
				}
				.left{
					padding: 40px 40px 40px 0;
					border-top: 1px solid var(--text);
					border-bottom: 1px solid transparent;
					position: relative;

					&:before{
						content: '\f175';
						font-family: var(--fontAwesome);
						font-size: 34px;
						position: absolute;
						font-weight: 300;
						bottom: -40px;
					}
				}
			}

			// Projects
			.project-block{
				display: block;

				.project-content{
					display: flex;
					justify-content: space-between;
					box-sizing: border-box;
					padding: 15px 0;

					.third{
						width: 30%;
						max-width: 30%;
						min-width: 30%;
					}
				}

				// Footer - links, spacer bar, etc
				.project-footer{
					margin-top: 10px;
					display: flex;
					justify-content: space-between;

					.project-footer-block{
						display: flex;
						flex-direction: column;
						justify-content: center;
					}

					// Line after to fill space, act as spacer
					.project-footer-spacer{
						display: flex;
						flex-direction: column;
						justify-content: center;
						flex-grow: 3;
						margin-left: 15px;

						&:after{
							content: 'x';
							font-size: 0px;
							height: 1px;
							background-color: var(--text);
							width: 100%;
						}
					}
				}
			}


			// Full page spacer
			.full-page-spacer{
				display: flex;
				flex-direction: column;
				justify-content: center;
				width: 100%;
				height: 10px;
				position: relative;

				&:before{
					content: 'x';
					font-size: 0px;
					height: 160px;
					width: 200vw;
					position: absolute;
					left: -50vw;
					z-index: 50;
					background-color: var(--primary);
					border-top: 1px solid var(--black);
					border-bottom: 1px solid var(--black);
					display: none;
				}

				&:after{
					content: 'x';
					font-size: 0px;
					height: 1px;
					width: 200vw;
					position: absolute;
					left: -50vw;
					z-index: 50;
					background-color: var(--text);
				}

				.full-page-spacer-body{
					display: flex;
					flex-direction: column;
					justify-content: center;
					position: absolute;
					height: 160px;
					width: 100%;
					top: 0;
					z-index: 100;
					color: var(--text);
					text-align: center;
					display: none;

					h1,h2,h3,h4,h5,h6,p,a{
						color: var(--text);
						margin: 0;
						padding: 0;
					}

					&.icons{
						flex-direction: row;
						justify-content: space-around;

						i{
							display: flex;
							flex-direction: column;
							justify-content: center;
							color: var(--black);
							font-size: 22px;
						}
					}
				}
			}


			.home-footer{
				display: block;
				padding: 25px 0;
				text-align: center;
			}

		}
	}


</style>