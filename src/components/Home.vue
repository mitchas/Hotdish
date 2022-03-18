<template>



<div class="padded margin-auto max-width">
	<div class="ptop-xl"></div>
	<img src="@/assets/logo.png" title="Logo" alt="Logo" id="topLogo"/>
	<h1 class="align-left">
		Making the internet a little nicer.
		<small>Practical websites & apps, without all the clutter you find everywhere else.</small>
	</h1>

	<button @click="changeTheme" id="themeButton">
		<i class="far fa-moon"></i>
		<i class="far fa-sun"></i>
	</button>

	<p class="big">
		That means no ads, no popups telling you to stop blocking ads, no invasive tracking, no collecting & selling your data, no social media plugins, no subscriptions, no emails you never asked for - 
	</p>

	<div class="align-center">
		<i class="far fa-campfire text-largest margin-auto mtop-md mbottom-md"></i>
	</div>

	<p>
		My name is Mitch. I'm a Minneapolis-based website designer/developer building websites that do what you need them to do, and nothing else.
	</p>

	<div class="align-center">
		<i class="far fa-code text-largest margin-auto mtop-md mbottom-md"></i>
	</div>

	<h1 class="align-center">Projects</h1>

	<!-- Thigns -->
	<h2 class="mtop-md">
		<!-- <img src="@/assets/things-light.png" title="Things.mn logo" alt="Things.mn Logo" class="project-logo" v-if="!darkMode"/>
		<img src="@/assets/things-dark.png" title="Things.mn logo" alt="Things.mn Logo" class="project-logo" v-else/> -->
		Things.mn - Coming soon
		<small>A Minnesota-focused app to find... things... - but also events, news, jobs, maps, and tons other information.</small>
	</h2>

	<p class="no-padding">
		It's hard to find truly local *things* on the internet. Instead, you're shown whatever is already popular, companies that can afford the best website & SEO, or brands running massive marketing campaigns. Most often that means a national or multinational company.
	</p>
	<p class="no-padding">
		So I'm trying to fix that problem with things.mn. It's a giant user-submitted database of things, events, news, and more. Search fields and tags to find exactly what you're looking for - even something super specific like a <b>cafe</b> in <b>Minneapolis</b> that is <b>open late</b> and has <b>Free Wifi</b> and is <b>dog friendly</b>.
	</p>
	<p class="small">
		This is my largest project and there's a lot going on, so just go check it out!
	</p>

	<p class="small code">
		<b>Stack:</b> Firebase authentication, database, and storage, with Vue & custom UI frontend.
	</p>

	<a class="button" href="https://things.mn" target="_blank">
		<i class="far fa-link"></i>
		<span>Visit Things.mn</span>
	</a>

	<!-- Keyframes -->
	<h2 class="mtop-lg">
		<!-- <img src="@/assets/keyframes-logo.png" title="Keyframes.app logo" alt="Keyframes.app Logo" class="project-logo"/> -->
		Keyframes.app
		<small>A collection of developer tools to make annoying CSS properties a little less annoying - mainly animations.</small>
	</h2>

	<p class="no-padding">
		Creating @keyframes animations in CSS is pretty annoying. It was taking me a lot of time, so I had this idea to create a video-editor style timeline for generating @keyframes CSS.
	</p>
	<p class="no-padding">
		I've now also added a few additional tools - a color picker/palette and a special character search - and have a few more planned.
	</p>

	<p class="small code">
		<b>Stack:</b> No backend, local storage only. Vue frontend with custom UI.
	</p>

	<a class="button" href="https://keyframes.app" target="_blank">
		<i class="far fa-link"></i>
		<span>Visit Keyframes.app</span>
	</a>

	<!-- Ceev -->
	<h2 class="mtop-lg">
		<!-- <img src="@/assets/ceev-light.png" title="Ceev.io logo" alt="Ceev.io Logo" class="project-logo" v-if="!darkMode"//>
		<img src="@/assets/ceev-dark.png" title="Ceev.io logo" alt="Ceev.io Logo" class="project-logo" v-else//> -->
		Ceev.io
		<small>A simple & modern resume builder and LinkedIn importer.</small>
	</h2>

	<p class="no-padding">
		Ceev.io is one of my longest running projects. It now has a lot of competition (and is in need of an update), but when it launched in <a href="https://www.producthunt.com/posts/ceev" target="_blank">February 2018</a>, there wasn't anything like it. It's a simple to use visual interface to design resumes that you can download as fully-formatted scannable PDF documents.
	</p>
	<p class="no-padding">
		Since 2018, 40,000 users have created an account on Ceev.io, and hundreds of thousands of others have created a resume without an account.
	</p>
	<p class="no-padding small">
		I also had a really cool Chrome extension that crawled your LinkedIn profile and automatically imported it into Ceev. After years of fighting LinkedIn changes that kept breaking the extension every few weeks, it was finally killed once and for all with Chrome's extension rule changes.
	</p>

	<p class="small code">
		<b>Stack:</b> Firebase authentication and realtime database backend, Angular(JS!) and custom UI frontend.
	</p>

	<a class="button" href="https://ceev.io" target="_blank">
		<i class="far fa-link"></i>
		<span>Visit Ceev.io</span>
	</a>

	<p class="big mtop-lg">
		You can see what else I'm up to on <a href="https://github.com/mitchas" target="_blank">github.com/mitchas</a>, or follow me on <a href="https://twitter.com/sleumasm" target="_blank">Twitter</a>.
	</p>


	<div class="align-center">
		<i class="far fa-hand-peace text-largest margin-auto mtop-md mbottom-md"></i>
	</div>



	<h1 class="mtop-lg">
		Get a one-of-a-kind website designed and deployed in days, not months
		<small>
			Affordable, fixed price websites with turnaround in as little as 5 days if you know what you need (if you don't, that's cool too).
		</small>
	</h1>


	<p class="no-padding mtop-lg">
		If you:
	</p>
	<ul class="text-large margin-none">
		<li>Need a simple, well-designed website really, really fast;</li>
		<li>Don't want to try to figure out how to do it yourself;</li>
		<li>Have the content - text, images, links - that you need on the site;</li>
		<li>Have a general idea about the overall style or design, or are fine leaving it up to me;</li>
	</ul>
	<p class="no-padding">
		Then in about 5 days and for $900 (ish*), you can have a well-designed maintenance-free website.
	</p>
	<p class="small text-fade no-padding">
		* On top of the flat fee, you'll pay the price to register your chosen domain ($5-$60/year, usually) and hosting (~$40/year).
	</p>

	<p class="big mtop-md">
		<b>Need something more than that?</b>
	</p>

	<ul class="text-large margin-none">
		<li>Time working together on content, design, and functionality choices (+ ~$400)</li>
		<li>Advanced CMS for simple editing or blogging (+ ~$500)</li>
		<li>An interactive single-page application or tool (+ ~$800)</li>
		<li>A formal visual identity - colors, fonts, branding, etc (~$240)</li>
		<li>Browser extension to extend functionality of website (+ ~$800)</li>
		<li>Full-stack web application with user authentication, data reading/writing, etc ($3000+)</li>
	</ul>

	<p class="big">
		Interested? Send me an email at <b>hello@hotdi.sh</b>
	</p>




	<div class="mbottom-xl ptop-xl"></div>


</div>	
	
</template>

<script>
import { ref, onMounted, computed, watch } from 'vue';

export default {
 	 name: 'Home',
  	props: {
 	},
	setup(props, context) {
		let darkMode = ref(false);

		const changeTheme = () => {
			darkMode = !darkMode;

			var dark = function(){
				document.documentElement.setAttribute("data-theme", "dark");
				document.querySelector("meta[name=\"theme-color\"]").setAttribute("content",  "#07070f");
			};
			var light = function(){
				document.documentElement.setAttribute("data-theme", "light");
				document.querySelector("meta[name=\"theme-color\"]").setAttribute("content",  "#00172E");
			};

			if(darkMode){
				light();
			}else{
				dark();
			}

		};

		  
		 
		 onMounted(() => {
			 // Determine dark mode based on device settings
			if(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
				changeTheme()
			}
   		 })



		return {
			darkMode,
			changeTheme,
		};
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

#topLogo{
	height: 70px;
	margin: 0;
	width: auto;
}

.project-logo{
	height: 30px;
	width: auto;
	vertical-align: baseline;
	position: relative;
	top: 4px;
}

#themeButton{
	position: fixed;
	top: 15px;
	right: 15px;
	font-size: 22px;
	transition: var(--transition);
	transform: scale(1);
	opacity: 0.8;

	.fa-sun{
		color: var(--white);
	}
	.fa-moon{
		color: var(--black);
	}

	&:hover{
		cursor: pointer;
		transform: scale(1.1);
		opacity: 1;
	}
}
</style>
