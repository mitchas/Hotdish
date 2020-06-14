<!-- 
// ProjectsList.vue
// _________________________
// 
// 	Display for list of projects
//
-->


<template>
	<div id="projectsList">




		<div class="project ceev">

			<div class="project-info">
				<h2>Ceev.io</h2>
				<h3>Good looking resumes for everyone</h3>
				<p>
					Design a resume that someone will actually want to read. Faster and easier than using Word or Google Docs.
				</p>
				<div class="buttons">
					<!-- <button class="button small transparent mright-sm">
						<i class="far fa-book-reader"></i>
						<span>Read More</span>
					</button> -->
					<button class="button red small" @click="tab('https://ceev.io')">
						<i class="far fa-link"></i>
						<span>Go to Ceev.io</span>
					</button>
				</div>
			</div>
		</div>



		<div class="project keyframes">

			<div class="project-info">
				<h2>Keyframes.app</h2>
				<h3>A toolbox for designers & developers.</h3>
				<p>
					A suite of tools to help you generate CSS - create @keyframe animations, color palettes, box shadows, and more.
				</p>
				<div class="buttons">
					<!-- <button class="button transparent small mright-sm">
						<i class="far fa-book-reader"></i>
						<span>Read More</span>
					</button> -->
					<button class="button red small" @click="tab('https://keyframes.app')">
						<i class="far fa-link"></i>
						<span>Go to Keyframes.app</span>
					</button>
				</div>
			</div>
			<!-- Graphic -->
			<div class="project-graphic"></div>

		</div>



		<div class="github">
			You can see older projects & other odd experiments on my <a href="https://github.com/mitchas" target="_blank">GitHub</a> page.
		</div>

	</div>
</template>

<script>

export default {
	name: "ProjectsList",
	mixins: [
	],
	components: {
	},
	props: [
		'shortList'
	],
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

	#projectsList{
		box-sizing: border-box;
		padding: 55px 0;

		.project{
			border-radius: var(--borderRadius);
			display: flex;
			justify-content: space-between;
			width: 100%;
			background-color: var(--red);
			box-sizing: border-box;
			min-height: 700px;
			padding: 0 5vw;
			margin-bottom: 15vh;

			background-size: 600px auto;
			background-repeat: no-repeat;
			background-position: 90% center;

			@media (max-width: 1080px) {
				background-size: 500px auto;
			}
			@media (max-width: 950px) {
				background-size: 370px auto;
				min-height: 500px;
				margin-bottom: 80px;
				padding: 0 4vw;
			}
			@media (max-width: 700px) {
				background-size: 320px auto;
				min-height: 400px;
				margin-bottom: 80px;
				background-position: 90% 90%;
				padding: 0 0 0 0;
			}
			@media (max-width: 520px) {
				background-size: 80% auto;
				min-height: 400px;
				margin-bottom: 60px;
				background-position: center center;
			}


			.project-info{
				width: 380px;
				height: auto;
				display: flex;
				flex-direction: column;
				justify-content: center;

				@media (max-width: 950px) {
					width: 300px;
				}
				@media (max-width: 700px) {
					width: 100%;
					max-width: none;
					justify-content: flex-start;
					padding-top: 30px;
					box-sizing: border-box;
					padding: 25px 25px;
				}


				h2{
					color: var(--black);
					font-size: 22px;
					font-weight: 300px;

					@media (max-width: 950px) {
						font-size: 18px;
					}

				}
				h3{
					color: var(--black);
					font-size: 46px;
					line-height: 50px;
					padding: 2px 0;
					font-family: var(--display);

					@media (max-width: 950px) {
						font-size: 34px;
						line-height: 38px;
						font-weight: 900;
						padding: 0;
					}
				}
				p{
					color: var(--black);
					font-size: 22px;
					line-height: 32px;

					@media (max-width: 950px) {
						font-size: 18px;
						line-height: 26px;
						margin-bottom: 15px;
					}
					@media (max-width: 700px) {
						max-width: 300px;
						font-weight: 600;
					}
				}

				// Buttons
				.buttons{

					button{
					}
				}
			}

			.project-graphic{

			}

			&.ceev{
				// background-color: var(--blue);
				background-color: #ABCBFF;
				background-image: url('../assets/projects/ceev-screenshot.png');

				.project-info{
					@media (max-width: 700px) {
						background-color: rgba(171, 203, 255, 0.6);
					}
					@media (max-width: 520px) {
						background-color: rgba(171, 203, 255, 0.8);
					}
				}
			}

			&.keyframes{
				background-color: var(--black);
				background-color: #D7F7F5;
				background-image: url('../assets/projects/keyframes-screenshot.png');
				.project-info{
					@media (max-width: 700px) {
						background-color: rgba(222, 248, 247, 0.6);
					}
					@media (max-width: 520px) {
						background-color: rgba(222, 248, 247, 0.8);
					}
				}
			}
			

		}


		// Github link
		.github{
			display: block;
			text-align: center;
			margin-bottom: 50px;
			font-weight: 600;
			font-size: 18px;
		}
	}


</style>