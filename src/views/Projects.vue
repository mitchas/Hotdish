<!--
// 
// Projects.vue
// _________________________
//
//	Projects Page
//	Simple container for projects component - might add more later
//
// -->

<template>
	<div class="page no-scrollbars">
		<div class="text-page-content">

			<!-- ProjectsList -->
			<ProjectsList :shortList="false"></ProjectsList>

		</div>
	</div>
</template>

<script>
import ProjectsList from "@/components/ProjectsList";
// Mixins
import metaMixin from "@/components/mixins/metaMixin.js";

export default {
	name: "Projects",

	components: {
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
		_this.updateMeta("Projects | Hotdish", "Building cool things on the internet.")
	},

	computed: {
	},
	
	methods: {
		
		
	}
};

</script>


<style lang="less">

	@import '~@/styles/variables.less';



</style>