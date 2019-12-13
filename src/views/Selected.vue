<template>
	<div class="selected">
		<div class="search">
			<img src="../assets/img/cooper5.png" />
			<input type="text" placeholder="搜索你想要的文章、音频、视频、问答" />
		</div>
		<ul class="select-nav">
			<li>
				<img src="../assets/img/cooper5.png" alt="">
				<span>方案定制</span>
			</li>
			<li>
				<img src="../assets/img/cooper5.png" alt="">
				<span>产品精选</span>
			</li>
			<li>
				<img src="../assets/img/cooper5.png" alt="">
				<span>保单管理</span>
			</li>
			<li>
				<img src="../assets/img/cooper5.png" alt="">
				<span>常见问题</span>
			</li>
		</ul>
		<div class="line"></div>
		
		<!-- tab列表 -->
		<Tabar :universalList="universalList"/>
		<!-- 底部 -->
		<!-- <Footer /> -->
	</div>
</template>
<script>
	
	import Tabar from '@/components/tablist/Tabar.vue'
	
	export default {
		name: 'selected',
		components: {
			Tabar
		},
		data() {
				
			return{
				universalList:true,
				navLists: ["重疾险", "医疗险", "寿险", "意外险","防癌险"]
			}
			
		}
	}
</script>
<style scoped lang="scss">
	.selected {
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
		
		.select-nav {
			display: -webkit-flex;
			justify-content: space-around;
			margin: 1rem auto 0;
			background-color: #fff;
			z-index: 2;
			border-radius: 5px;
			padding: 1rem;
			box-sizing: border-box;
		
			li {
				img {
					display: block;
					width: 2.4rem;
					height: 2.4rem;
					margin-bottom: 0.4rem;
				}
		
				span {
					font-size: 0.8rem;
					color: #343434;
				}
			}
		}
		
		.line {
			width: 100%;
			height: 0.4rem;
			background-color: #f7f7f7;
		}
	}
</style>
