<template>
	<div class="otherlist">
		<h3>{{otherlist.title}}</h3>
		<ul class="list">
			<li v-for="(items,i) in otherlist.listData" :key="i">
				<h4>{{items.title}}</h4>
				<ul>
					<li  v-for="(item,index) in items.list" :key="index">
						<span>{{item.label}}</span>
						<p>{{item.text}}</p>
					</li>
				</ul>
			</li>
		</ul>
		<ul class="list-nav">
			<li v-for="(item,i) in otherlist.listNav" :key="i" @click="navClick(i)" :class="{'active' : navIndex == i}">
				{{item}}
			</li>
		</ul>
	</div>
	
</template>

<script>
	export default {
		name: 'otherlist',
		props: [],
		data() {
			return {
				navIndex:0,
				otherlist:{
					title:"保险知识九篇",
					listNav:['保险知识','理赔相关','健康相关','避坑指南'],
					listData: [
						{
							title:"基础理论",
							list:[
								{
									label:"安全性",
									text:"不敢买互联网保险产品？你需要读懂这几点"
								},
								{
									label:"特殊性",
									text:"不敢买互联网保险产品？你需要读懂这几点"
								}
							]
						},
						{
							title:"保险公司",
							list:[
								{
									label:"安全性",
									text:"不敢买互联网保险产品？你需要读懂这几点"
								},
								{
									label:"特殊性",
									text:"不敢买互联网保险产品？你需要读懂这几点"
								},
								{
									label:"安全性",
									text:"不敢买互联网保险产品？你需要读懂这几点"
								},
								{
									label:"特殊性",
									text:"不敢买互联网保险产品？你需要读懂这几点"
								}
							]
						}
					]
				}
				
			}
		},
		created() {

		},
		mounted() {},
		methods: {
			navClick(i){
				this.navIndex = i
			}
		},



	}
</script>

<style scoped lang="scss">
	.otherlist {
		padding: 0.5rem;
		h3{
			font-size: 1rem;
			text-align: center;
		}
		.list{
			li {
				h4{
					font-size: 1rem;
					padding: 0.5rem 0;
				}
				ul{
					li{
						display: -webkit-flex;
						align-items: center;
						padding: 0.5rem 0;
						span{
							font-size: 0.8rem;
							color: #ff9724;
							background: #fff8ec;
							padding: 0.2rem 0.5rem;
						}
						p{
							font-size: 0.8rem;
							margin-left: 0.5rem;
						}
					}
				}
			}
		}
		
		.list-nav{
			position: fixed;
			right:0;
			top:50%;
			transform: translate(0,-45%);
				
			li{
				width: 1.8rem;
				text-align: center;
				font-size: 0.8rem;
				color: #333;
				background: #f2f0f3;  
				padding: 1rem 0;
				margin-bottom: 0.8rem;
				border-top-left-radius: 25px;
				border-bottom-left-radius: 25px;
			}
			.active{
				color: #fff;
				background: #ffa724;
				border-top-left-radius: 25px;
				border-bottom-left-radius: 25px;
			}
			
		}

	}
</style>
