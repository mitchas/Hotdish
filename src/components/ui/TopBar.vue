<!-- 
// 	Top Navigation bar
// 	_________________________
// 
// 	 Bar at top of screen with logo and account/settings dropdown, and app switcher
// 		Visible on all screen sizes
//
//		#Template
//			Logo on left, icons with drop downs on right 
//			Includes all universal components that go with links (ie settings modal)
// 
//		#Script
//			mixins
//				defines CMD+d to toggle dark mode
//			components
//				AboutModal, SettingsModal, ShortcutsModal
//			methods
// 				openModal(name) Opens modal passed - tracks open
// 				darkModeShortcut() Button only shows based on route meta - when clicked, opens modal and tracks click
// 				share() Button only shows in standalone mode - shares current url using native share menu - fallback copy to clipboard
// 
-->

<template>
	<div id="topBarWrapper">
		<div id="topBar">
			<!-- Branding - Logo -->
			<div id="branding" @click="navigate('/')">
				<div id="logo">
					<img src="@/assets/branding/pot-300.png" v-bind:class="{'invert': $store.getters.userPreferences.darkMode}"/>
				</div>
				<h1>Hotdish</h1>
			</div>

			<!--  
				Settings Nav
				Settings Nav Floated right
				Settings Nav
			-->
			<nav id="settingsNav" aria-label="Settings Menu" @mouseleave="closeDropdowns()">


				<!-- Help - only shows on pages with help modal -->
				<div class="settings-nav" v-if="$route.meta.help">
					<div class="nav-dropdown" @click="openModal('help')">
						<button class="hover-label">
							<span>Help</span>
							<!-- Chevron down -->
							<i class="far fa-book-spells"></i>
						</button>
					</div>
				</div>

				<!-- App Switcher
				<div class="settings-nav">
					<div class="nav-dropdown" @click="navigate('/whatscookin/')">
						<!-- Hover label to show dropdown --
						<button class="hover-label">
							<!-- mobile, flask-potion, seedling --
							<i v-bind:class="{'far fa-flask-potion': !navDropdown, 'far fa-times-circle': navDropdown}"></i>
							<span>Projects</span>
						</button>
						<!-- Popup on hover/focus --
						<transition name="slide">
							<div class="nav-popover" v-if="navDropdown">
								<!-- Dropdown Link --
								<button class="popover-link" @click="navigate('/about/')">
									<span>Link</span>
									<i class="fas fa-stream"></i>
								</button>
							</div>
						</transition>
					</div>
				</div>-->

				<!-- Projects -->
				<!-- <div class="settings-nav">
					<div class="nav-dropdown" @click="navigate('/whats-cookin/')">
						<button class="hover-label">
							<i class="far fa-flask-potion"></i>
							<span>Projects</span>
						</button>
					</div>
				</div> -->

				<!-- Get a website -->
				<div class="settings-nav">
					<div class="nav-dropdown" @click="navigate('/menu/')">
						<button class="hover-label accent">
							<!-- Chevron down -->
							<i class="far fa-laptop-code"></i>
							<span>Need a Website?</span>
						</button>
					</div>
				</div>

				<!-- Dark Mode -->
				<div class="settings-nav">
					<div class="nav-dropdown" @click="openModal('help')">
						<label for="topBarDarkModeToggle" class="hover-label dark-mode" tabindex="1":class="{ 'dark-mode-on': $store.getters.userPreferences.darkMode }">
							<i v-bind:class="{ 'far fa-moon-stars': !$store.getters.userPreferences.darkMode, 'far fa-sun': $store.getters.userPreferences.darkMode }"></i>
						</label>
						<!-- Hidden input -->
						<input type="checkbox" id="topBarDarkModeToggle" v-model="$store.getters.userPreferences.darkMode" @change="toggleDarkMode()" hidden/>
					</div>
								
				</div>

			</nav>

		</div>

		<!-- Settings modal -->
		<SettingsModal :showSettings="showSettingsModal" v-on:settingsModalClosed="showSettingsModal = false"></SettingsModal>
		<!-- About modal -->
		<AboutModal :showAbout="showAboutModal" v-on:aboutModalClosed="showAboutModal = false"></AboutModal>
		<!-- Shortcuts modal -->
		<ShortcutsModal :showShortcuts="showShortcutsModal" v-on:shortcutsModalClosed="showShortcutsModal = false"></ShortcutsModal>
	</div>
</template>

<script>
import SettingsModal from "@/components/SettingsModal";
import AboutModal from "@/components/AboutModal";
import ShortcutsModal from "@/components/ShortcutsModal";
import preferencesMixin from "@/components/mixins/preferencesMixin.js";
// Keyboard shortcuts
import shortcut, { PRIMARY, SHIFT } from "@/components/mixins/keyboardShortcutsMixin.js";


export default {
	name: "TopBar",
	mixins: [
		preferencesMixin,
		// Toggle dark mode with cmd + d
		shortcut('u', PRIMARY | SHIFT, function(event) {
			// Prevent default
			event.preventDefault();
			// Toggle theme
			// this.darkModeShortcut()

			if(this.$store.getters.userPreferences.darkMode){
				this.toggleDarkMode(false);
				this.$store.getters.userPreferences.darkMode = false;
			}else{
				this.toggleDarkMode(true);
				this.$store.getters.userPreferences.darkMode = true;
			}


		}),
	],
	components: {
		AboutModal,
		SettingsModal,
		ShortcutsModal,
	},
	data() {
		return {
			navDropdown: false,
			showSettingsModal: false,
			showAboutModal: false,
			showShortcutsModal: false,
		};
	},
	mounted() {
	},
	methods: {
	
		//////////////////
		//  Open Modal  //
		////////////////
		openModal: function(modal){
			

			// Help, shortcuts, settings, about
			if(modal == "help"){
				this.$store.getters.global.showHelp = true; 
			}else if(modal == "shortcuts"){
				this.showShortcutsModal = true
			}else if(modal == "settings"){
				this.showSettingsModal = true
			}else if(modal == "about"){
				this.showAboutModal = true
			}

			// Track opens
			// Track which page help was opened on
			if(modal == "help"){
				_paq.push(['trackEvent', 'Action', 'View', 'Viewed help on ' + this.$route.name]);
			}else{
				_paq.push(['trackEvent', 'Action', 'View', 'Opened ' + modal]);
			}
			
		},

		////////////////////
		//  Native Shar  //
		//////////////////
		share: function(){
			var text = "Check this out: ";

			if (navigator.share) {
				navigator.share({
					title: document.title,
					text: text,
					url: location.href,
				})
				  .then(() => console.log('Successful share'))
				  .catch((error) => console.log('Error sharing', error));
			}else{
				this.copyToClipboard("This page's URL", document.href)
			}
		},
		
	}
};
</script>

<style lang="less">

	@import '~@/styles/variables.less';

	// Wrap top bar to set max width on actual #topBar element
	#topBarWrapper{
		// background-color: white;
		position: fixed;
		z-index: 60;
		top: 0px;
		width: 100%;
		background-color: var(--transparent);
		backdrop-filter: blur(3px);
	}

	// Top nav bar
	// Has logo and hover menu for account/dark mode
	#topBar{
		max-width: 1100px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		width: 100%;
		padding: 0 15px 0 15px;
		box-sizing: border-box;
		height: 70px;
		// backdrop-filter: blur(3.3px);
		// backdrop-filter:  grayscale(100%);

		// Adjust padding and height on smaller screens
		@media (min-width: @screenMD) {
			padding: 0;
		}
		@media (max-width: @screenMD) {
			height: 60px;
		}
		@media (max-width: @screenSM) {
			height: 54px;
		}

		// Logo
		#branding{
			display: flex;
			transform: scale(1.0);
			transition: var(--transition);

			// Hover branding
			&:hover{
				transition: var(--transition);
				cursor: pointer;
				transform: scale(0.975);
			}

			h1{
				font-size: 22px;
				display: flex;
				flex-direction: column;
				justify-content: center;
				margin: 0;
				padding: 3px 0 0 10px;
			}

			#logo{
				display: flex;
				flex-direction: column;
				justify-content: center;

				img{
					height: 50px;
					width: auto;
					@media (max-width: @screenMD) {
						display: block;
					}
					@media (max-width: @screenSM) {
						height: 30px;
						padding-bottom: 2px;
					}

					// Invert for dark mode
					&.invert{
						filter: invert(100%) brightness(150%);
					}
				}

			}
		}
	}


	// settings Nav
	// settings Nav
	// settings Nav
	// Contained inside top nav- wanted styling seperatet
	nav#settingsNav{
		display: flex;
		box-sizing: border-box;
		height: 100%;

		// Username with dropdown
		// For signed in users
		.settings-nav{
			display: flex;
			flex-direction: column;
			justify-content: center;

			.nav-dropdown{
				position: relative;
				padding: 8px 0;
				z-index: 100;
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;

				// Username and chevron down
				.hover-label{
					color: var(--text);
					font-weight: 800;
					box-sizing: border-box;
					display: flex;
					justify-content: flex-end;
					user-select: none;
					margin-left: 12px;

					// label and icon
					span,i{
						display: inline-flex;
						flex-direction: column;
						justify-content: center;
					}
					// Label text - 
					span{
						font-size: 16px;
						letter-spacing: 0.3px;
						font-family: var(--display);
						padding-top: 4px;
						margin-left: 6px;

						// Move down a tiny bit on mobile
						@media (max-width: @screenMD) {
							padding-top: 1px;
						}
					}
					// Caret down arrow
					i{
						font-size: 20px;
						padding-bottom: 0px;
						transition: var(--transition);
						width: 18px;

						// Move on mobile
						@media (max-width: @screenMD) {
							font-size: 22px;
							top: 0;
							margin-left: 5px;
						}

						// Extra space for wide icon
						&.fa-laptop-code{
							margin-right: 8px;
						}
					}

					// Accented hover label
					&.accent{
						span,i{
							color: var(--red);
						}
					}
					// Lighter dark mode label
					&.dark-mode{

						i{
							width: 24px;
							text-align: center;
							// opacity: 0.65;
							// font-size: 28px;
							position: relative;
							top: 2px;
						}
						&:hover{
							cursor: pointer;

							i{
								color: var(--purple);
							}
						}

						// Turn yellow if dark mode is on
						&.dark-mode-on{
							i{
								left: -2px;
								color: var(--white);
							}

							&:hover i{
								color: var(--yellow);
							}
						}
					}
				}

				// Hover dropdown
				&:hover{
					cursor: pointer;

					.hover-label{
						span{
							text-decoration: underline;
						}
					}
				}


				// Popup on hover
				.nav-popover{
					display: block;
					width: 200px;
					max-width: 200px;
					position: absolute;
					top: 54px;
					right: 0;
					border-radius: var(--borderRadius);
					background-color: var(--popup);
					padding: 8px 10px 10px 10px;
					box-shadow: var(--shadow);
					border: var(--borderWidth) solid var(--border);


					@media (max-width: @screenMD) {
						width: 220px;
						top: 53px;
						border-top-left-radius: 0;
						border-top-right-radius: 0;
					}
					@media (max-width: @screenSM) {
						width: 210px;
						padding: 8px 6px;
					}


					// Change spacing on default hr
					hr{
						margin: 2px 0 2px 0;
						border-color: #686E7E;
						opacity: 0.75;
					}

					// Links
					.popover-link{
						display: flex;
						justify-content: space-between;
						color: var(--white);
						height: 40px;
						width: 100%;
						padding: 0 10px;
						box-sizing: border-box;
						user-select: none;

						// Increase size on mobile
						@media (max-width: @screenMD) {
							padding: 0 2px;
						}

						span, i{
							display: flex;
							flex-direction: column;
							justify-content: center;
							height: 40px;
						}
						span{
							font-weight: 700;
							box-sizing: border-box;
							transition: var(--transitionFast);
							padding-left: 0;
							font-size: 14px;
							letter-spacing: 0.5px;

							// Increase size on mobile
							@media (max-width: @screenMD) {
								font-size: 15px;
								padding-left: 6px;
							}
							@media (max-width: @screenSM) {
								font-size: 13px;
								padding-left: 6px;
							}
						}
						i{
							font-size: 18px;
							width: 30px;
							text-align: center;

							&.fa-user-cog,
							&.fa-sign-out-alt,
							&.fa-user-plus{
								position: relative;
								left: 4px;
							}

							// Increase size on mobile
							@media (max-width: @screenMD) {
								padding-right: 6px;
							}
						}

						&:hover,
						&:focus{
							text-decoration: none;
							cursor: pointer;
							span{
								text-decoration: underline;
							}
						}
						&:active{
							span{
								text-decoration: underline;
								transition: var(--transitionFast);
							}
						}

						// Style variations
						&.red{
							span, i{
								color: var(--red);
							}
						}
					}
				}

			}
		}
	}
</style>