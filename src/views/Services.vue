<!--
// 
// Services.vue
// _________________________
//
//	Services page view with info and pricing
//
// -->

<template>
	<div class="page no-scrollbars">
		<div class="text-page-content">


			<div class="home-hero">
				<h1>One of a kind websites in days, not weeks.</h1>
				<h2>Affordable fixed pricing and turnaround in as little as 4 days if you know what you need (if you don't, that's okay too)</h2>

				<!-- About -->
				<p class="mbottom-xl pbottom-xl">
					I'll be adding a better breakdown of the process and pricing very soon. For now, if you need something, email me at hello@hotdi.sh.
				</p>
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
		_this.updateMeta("Hotdi.sh | Menu", "Building cool things on the internet.")
	},

	computed: {
	},
	
	methods: {
	
		
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