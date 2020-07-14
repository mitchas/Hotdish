<!-- 
// 	Bottom Footer barr
// 	_________________________
// 
-->

<template>
	<footer id="footer">

		<div class="footer-wrapper">
			<div class="footer-links">
				<a href="mailto:hello@hotdi.sh" target="_blank">hello@hotdi.sh</a>
				<a href="https://twitter.com/sleumasm" target="_blank">Twitter</a>
				<a href="https://instagram.com/mitchas" target="_blank">Instagram</a>
			</div>

			<div class="footer-right">
				<img src="@/assets/branding/pot-300.png" @click="navigate('/')" title="Hotdi.sh Logo"/>
			</div>
		</div>

	</footer>
</template>

<script>
export default {
	name: "Footer",
	mixins: [
	],
	components: {
	},
	data() {
		return {
		};
	},
	mounted() {
	},
	methods: {
	
		
	}
};
</script>

<style lang="less">
	@import '~@/styles/variables.less';

	footer#footer{
		display: block;
		width: 100%;
		background-color: var(--yellow);

		.footer-wrapper{
			display: flex;
			justify-content: space-between;
			width: 100%;
		max-width: var(--maxWidth);
			margin: 0 auto;
			box-sizing: border-box;
			padding: 25px 0;

			.footer-links{
				display: flex;
				flex-grow: 3;

				a{
					display: flex;
					flex-direction: column;
					justify-content: center;
					color: var(--black);
					font-size: 18px;
					font-weight: 600;
					font-family: var(--display);
					margin-right: 25px;
				}
			}
			
			.footer-right{

				img{
					display: block;
					height: 50px;
					width: auto;
				}
			}
		}
	}
</style>