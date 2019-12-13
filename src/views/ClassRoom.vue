<template>
	<div class="classroom">
		<div class="search">
			<img src="../assets/img/cooper5.png" />
			<input type="text" placeholder="搜索你想要的文章、音频、视频、问答" />
		</div>
		<!-- tab列表 -->
		<Tabar :difference="classroom" />

	</div>
</template>
<script>
	
	import Tabar from '@/components/tablist/Tabar.vue'

	export default {
		name: 'classroom',
		components: {
			Tabar
		},
		data() {
			return {
				classroom: ["精选内容", "基础知识", "人群攻略", "险种攻略"]
			}
		}
	}
</script>
<style scoped lang="scss">
	.classroom {
		padding-bottom: 4rem;
		.search {
			width: 90%;
			margin: 1rem auto;
			padding: 0.5rem;
			border-radius: 5px;
			box-sizing: border-box;
			background-color: #f6f6f6;
			display: -webkit-flex;
			align-items: center;
		
			img {
				width: 1rem;
				height: 1rem;
			}
		
			input {
				flex: 1;
				font-size: 1rem;
				color: #a0a0a0;
				margin-left: 0.5rem;
				border: 0;
				background-color: transparent;
				outline: none;
			}
		}
		
	}
</style>
