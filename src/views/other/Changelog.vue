<!--
// 
// Changelog.vue
// _________________________
//
//	Changelog & Updates
//		Static page. Not much to it.
//
// -->

<template>
	<div class="page no-scrollbars">
		<div class="text-page-content">

			<Callout
				icon="fal fa-rocket-launch"
				class="mbottom-sm mtop-sm"
				color="invert"
				size="giant">
				<p class="padding-none">
					This is the changelog page
				</p>
			</Callout>


			<h1 class="mtop-lg">Changelog</h1>
			
			<!-- Changelog Legend -->
			<div id="changelogLegend">
				<!-- New Feature -->
				<div class="legend-item">
					<i class="fas fa-sparkles cat-new"></i>
					<span>New Feature</span>
				</div>
				<!-- Change -->
				<div class="legend-item">
					<i class="fas fa-sync-alt cat-upgrade"></i>
					<span>Upgrade</span>
				</div>
				<!-- Bug Fix -->
				<div class="legend-item">
					<i class="fas fa-virus-slash cat-bug"></i>
					<span>Bug Fix</span>
				</div>
			</div>

			<!-- Actual Chngelog -->
			<div id="changelog">

				<!-- Current version -->
				<div class="changelog-title">
					<div class="cl-version">
						<b>v{{$store.getters.appVersion}}</b>
						<span>(June 3, 2020)</span>
					</div>
				</div>
				<div class="changelog-change">
					<i class="fas fa-sparkles cat-new"></i>
					<span>Touch and swipe support on touchscreens</span>
				</div>
				<div class="changelog-change">
					<i class="fas fa-sync-alt cat-upgrade"></i>
					<span>Progressive Web App support - install through Chrome on your phone or computer and use it offline</span>
				</div>
				<div class="changelog-change">
					<i class="fas fa-sparkles cat-new"></i>
					<span>Keyboard shortcuts & info window listing shortcuts specific to each page.</span>
				</div>
				<div class="changelog-change">
					<i class="fas fa-virus-slash cat-bug"></i>
					<span>Fixed issue with animation CSS output keyframes being out of order.</span>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
// Components
import Callout from "@/components/ui/Callout";
// Mixins
import metaMixin from "@/components/mixins/metaMixin.js";

export default {
	name: "Chngelog",

	components: {
		Callout
	},

	mixins: [
		metaMixin,
	],

	data() {
		return {
		};
	},

	mounted() {
		this.updateMeta("Changelog | Hotdi.sh", "Making cool things on the internet.")
	},

	computed: {
	},
	
	methods: {
	}
};

</script>


<style lang="less">

	@import '~@/styles/variables.less';

	#changelogLegend{
		display: flex;
		width: 100%;
		margin: 20px 0;

		@media (max-width: @screenSM) {
			flex-direction: column;
			margin: 20px 0 0 0;
		}

		.legend-item{
			margin-right: 25px;

			@media (max-width: @screenSM) {
				margin: 0 0 12px 0;
			}

			span,i{
				vertical-align: middle;
			}
			span{
				font-size: 16px;
				padding-left: 8px;
				font-weight: 700;
				letter-spacing: -0.2px;
			}
		}
	}


	// Changelog
	#changelog{
		box-sizing: border-box;
		padding: 0 0 100px 0;
		margin: 0 0 35px 0;

		@media (max-width: @screenMD) {
			padding: 0 0 0px 0;
		}
	
		.changelog-title{
			padding: 55px 0 25px 0;

			.cl-version{
				font-size: 22px;
				
				b{
					font-weight: 700;
					margin-right: 15px;
				}
				span{
					font-weight: 400;
				}
			}

			// Explanation paragraph if necessary
			p{
				margin: 15px 0 0 0;
				padding: 0;
				line-height: 17px;
			}
		}

		// Changelog item
		.changelog-change{
			display: flex;
			padding: 5px 0;
			span{
				font-size: 16px;
				font-weight: 500;
				padding-left: 10px;
				display: flex;
				flex-direction: column;
			jus	tify-content: center;
			}
		}


		// Changelog gap between v1 and v2
		#changelogGap{
			display: flex;
			flex-direction: column;
			justify-content: center;
			padding: 44px 0;
			margin-top: 44px;
			color: var(--text);
			opacity: 0.2;
			i{
				margin: 0 auto;
				font-size: 72px;
				text-align: center;
			}
			span{
				font-size: 18px;
				font-weight: 600;
				font-style: italic;
				text-align: center;
				margin: 15px 0 0 0;
			}
		}
	}

	// Category icons
	.cat-new,
	.cat-upgrade,
	.cat-bug{
		font-size: 18px;
		text-align: center;
		box-sizing: border-box;
		padding: 5px 0 0 0;
		height: 30px;
		min-height: 30px;
		max-height: 30px;
		border-radius: var(--borderRadius);
		width: 30px;
		min-width: 30px;
		max-width: 30px;
	}
	.cat-new{
		background-color: var(--green);
		color: var(--black);
	}
	.cat-upgrade{
		color: var(--white);
		background-color: var(--blue);
	}
	.cat-bug{
		color: var(--white);
		background-color: var(--orange);
	}

</style>