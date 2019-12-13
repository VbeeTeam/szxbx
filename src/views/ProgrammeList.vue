<template>
	<div class="programmeList">

		<!-- tab列表 -->
		<van-tabs v-model="activeName">
			<van-tab v-for="(itemBox,indexBox) in programmeList" :key="indexBox" :title="itemBox.insuredPerson" :name="itemBox.insuredPerson">
				<div class="content">
					<h3>{{itemBox.insuredPerson}}<span> | {{itemBox.age}}岁</span></h3>
					<div class="planTop">
						<div>
							<p><span>重疾</span><span>50万</span></p>
							<i>医疗费与工资收入</i>
						</div>
						<div>
							<p><span>重疾</span><span>50万</span></p>
							<i>医疗费与工资收入</i>
						</div>
					</div>
					
					<ul class="list">
						<li v-for="(item,i) in itemBox.planDetail" :key="i">
							<div class="list-top">
								<div class="top-left">
									<span>{{item.insureType}}险</span>
									<b>{{item.product.name}}</b>
								</div>
								<div class="top-right">
									测评文章
								</div>
							</div>
							<div class="list-nav">
								<div><span>年缴保费</span><b>￥{{item.yearPremium}}</b></div>
								<div><span>缴费年限</span><b>{{item.insureTimeLimit}}</b></div>
								<div><span>保障期限</span><b>{{item.payTimeLimit}}</b></div>
								<div><span>保额</span><b>￥{{item.insureLines}}</b></div>
							</div>
							<div class="list-section">
								<h4>产品亮点</h4>
								<span  v-for="(item2,index1) in item.productFeatures" :key="index1">{{item2.content}}</span>
								
							</div>
							<div class="list-bottom">
								<img src="" alt="">
								<div class="btn">
									<button>查看详情</button>
									<button>投保链接</button>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</van-tab>
			
		</van-tabs>

		<div class="programmeList-calculation">
			<span>保费测算</span>
		</div>
	</div>
</template>

<script>
	
	import {
		planMain
	} from '@/api/api'; // 导入我们的api接口
	export default {
		name: "programmeList",
		components: {
		
		},
		data() {
			return {
				programme: true,
				activeName: 'a',
				programmeList: [],
				
			}
		},
		methods:{
			//方案列表
			planList() {
				planMain('/api/planMain/' + '1205050914692534272',{}).then(res => {
					console.log("方案列表", res)
					this.programmeList = res.plan
			
				})
			},
		},
		created(){
			this.planList()
		}

	}
</script>

<style scoped lang="scss">
	.programmeList {
		
		.content{
			padding: 1rem;
			h3{
				font-weight: 400;
				span{
					color:#ccc;
				}
				margin-bottom: 1rem;
			}
			.planTop{
				display: -webkit-flex;
				
				box-shadow: 0 0 5px #ccc;
				border-radius: 5px;
				div{
					flex: 1;
					padding: 0.8rem;
					&:first-of-type{
						border-right: 1px solid #ccc;
					}
					p{
						font-size: 1.2rem;
						display: -webkit-flex;
						justify-content: space-between;
						margin-bottom: 1rem;
					}
					i{
						font-size: 0.9rem;
						color: #ccc;
						font-style: normal;
					}
				}
				
			}
			
			.list{
				li{
					box-shadow: 0 0 5px #ccc;
					padding: 1rem;
					border-radius: 5px;
					margin: 1rem 0;
					.list-top{
						display: -webkit-flex;
						justify-content: space-between;
						.top-left{
							color: red;
							span{
								margin-right: 0.5rem;
								border:1px solid red;
								padding: 0.2rem 0.4rem;
								border-radius: 25px;
							}
							
						}
						.top-right{
							color: yellow;
						}
					}
					.list-nav{
						margin:1rem;
						display: -webkit-flex;
						justify-content: space-around;
						text-align: center;
						span{
							display: block;
						}
					}
				}
				
			}
		}

		.programmeList-calculation {
			width: 90%;
			margin: 0 auto;
			padding: 0.5rem 0;
			text-align: center;
			background-color: #f6f6f6;
			border-radius: 5px;

			span {
				color: #007AFF;
				border-bottom: 1px solid #007AFF;
			}
		}
		
	}
</style>
