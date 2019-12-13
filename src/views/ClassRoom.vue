<template>
	<div class="classroom">
		<div class="search">
			<img src="../assets/img/icon_search.png" />
			<input type="text" placeholder="搜索文章/产品/问答" />
		</div>
		
		<div class="classroom-entrance">
			<img src="../assets/img/保险百科bg.png" alt="">
			<div class="entrance-text">
				<h2>保险百科</h2>
				<h4>一看就懂的保险百科</h4>
			</div>
			<img src="../assets/img/icon_rightround.png" alt="">
		</div>
		<div class="classroom-entrance">
			<img src="../assets/img/保险百科bg-2.png" alt="">
			<div class="entrance-text">
				<h2>社保医保</h2>
				<h4>全国社保查询入口</h4>
			</div>
			<img src="../assets/img/icon_rightround.png" alt="">
		</div>
		
		
		
		<!-- tab列表 -->
		<!-- <Tabar :difference="classroom" /> -->

	</div>
</template>
<script>
	
	

	export default {
		name: 'classroom',
		components: {
			
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
		padding: 0.75rem 0.75rem 5rem;
		
		.search {
			
			padding: 0.1rem 0.4rem;
			border-radius: 25px;
			box-sizing: border-box;
			background-color: #fff;
			display: -webkit-flex;
			align-items: center;
		
			img {
				width: 1.88rem;
				height: 1.88rem;
			}
		
			input {
				flex: 1;
				font-size: 0.88rem;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: rgba(191, 191, 191, 1);
				line-height: 1.25rem;
				margin-left: 0.2rem;
				border: 0;
				background-color: transparent;
				outline: none;
			}
		}
		.classroom-entrance{
			display: -webkit-flex;
			justify-content: space-between;
			align-items: center;
			background:linear-gradient(134deg,rgba(0,214,251,1) 0%,rgba(29,165,254,1) 100%,rgba(29,165,254,1) 100%);
			box-shadow:0rem 0.63rem 1.88rem -0.75rem rgba(0,0,0,0.3);
			border-radius:0.75rem;
			margin: 1.25rem 0;
			&:last-of-type{
				background:rgba(255,255,255,1) linear-gradient(135deg,rgba(254,219,80,1) 0%,rgba(254,156,56,1) 100%);
			}
			img:first-of-type{
				width: 7.31rem;
			}
			.entrance-text{
				h2{
					font-size:1.25rem;
					font-family:PingFang-SC-Bold,PingFang-SC;
					font-weight:bold;
					color:rgba(255,255,255,1);
					line-height:1.75rem;
					margin-bottom: 0.5rem;
				}
				h4{
					font-size:0.88rem;
					font-family:PingFang-SC-Medium,PingFang-SC;
					font-weight:500;
					color:rgba(255,255,255,1);
					line-height:1.25rem;
				}
			}
			img:last-of-type{
				width: 2rem;
				height: 2rem;
				margin-right: 0.75rem;
			}
		}
	}
</style>
