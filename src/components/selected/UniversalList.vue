<template>

	<ul class="list">
		<li v-for="(item,i) in listData" :key="i">
			<div class="listTop" :style="{backgroundImage: 'url('+ item.imgUrl +')',backgroundSize:'cover'}">
				<h3>{{item.title}}</h3>
				<p>{{item.statu}}</p>
				<p><span>￥{{item.money}}</span>元起</p>
			</div>
			<div class="listBot">
				<p>已售<span>{{item.number}}</span>份</p>
				<div class="btn">
					<button>查看详情</button><button>产品测试</button>
				</div>
			</div>
		</li>
	</ul>

</template>

<script>
	export default {
		name: 'UniversalList',
		props:['index'],
		data() {
			return {
				tabIndex: 0,
				listData: [],
				listData1: [{
						imgUrl: require("../../assets/img/bg_4.png"),
						title: "保险险种",
						statu: "终身|多次赔付|轻症",
						money: 1231,
						number: 12221
					},
					{
						imgUrl: require("../../assets/img/bg_4.png"),
						title: "保险险种",
						statu: "终身|多次赔付|轻症",
						money: 1231,
						number: 12221
					},
					{
						imgUrl: require("../../assets/img/bg_4.png"),
						title: "保险险种",
						statu: "终身|多次赔付|轻症",
						money: 1231,
						number: 12221
					}
				],
				listData2: [{
						imgUrl: require("../../assets/img/banner.png"),
						title: "保险险种",
						statu: "终身|多次赔付|轻症",
						money: 1231,
						number: 12221
					},
					{
						imgUrl: require("../../assets/img/banner.png"),
						title: "保险险种",
						statu: "终身|多次赔付|轻症",
						money: 1231,
						number: 12221
					},
					{
						imgUrl: require("../../assets/img/banner.png"),
						title: "保险险种",
						statu: "终身|多次赔付|轻症",
						money: 1231,
						number: 12221
					}
				],

			}
		},
		created() {
			this.listData = this.listData1
		},
		mounted() {},
		methods: {
			changeIndex(){
				if(this.tabIndex == 0 || this.tabIndex == 2){
					this.listData = this.listData1
				}else{
					this.listData = this.listData2
				}
			}
		},
		watch: {
			index: {
				//深度监听，可监听到对象、数组的变化
				handler(newV) {
					// do something, 可使用this
					this.tabIndex = newV
					this.changeIndex()//切换数据
				},
				deep: true

			}
		}


	}
</script>

<style scoped lang="scss">
	.list {
		padding: 1rem;

		li {
			border-radius: 5px;
			box-shadow: 0 0 5px #ccc;
			margin-bottom: 1.5rem;

			.listTop {
				height: 7.5rem;
				border-top-left-radius: 5px;
				border-top-right-radius: 5px;

				h3 {
					font-size: 1rem;
					color: #000;
					padding: 1rem 0.5rem 0.5rem;
				}

				p {
					font-size: 0.8rem;
					color: #818181;
					padding: 0 0.5rem 0.5rem;

					&:nth-of-type(2) {
						color: #000;

						span {
							color: #ff6456;
						}
					}
				}
			}

			.listBot {
				display: -webkit-flex;
				justify-content: space-between;
				align-items: center;
				padding: 0.5rem;

				p {
					font-size: 0.8rem;
					color: #818181;

					span {
						color: #ffa724;
					}
				}

				.btn {
					button {
						font-size: 0.7rem;
						color: #ffa724;
						padding: 0.4rem 0.5rem;
						margin-left: 1rem;
						border: 1px solid #ffa724;
						border-radius: 4px;
						background-color: #FFFFFF;

						&:nth-child(2) {
							background-color: #ffa724;
							color: #FFFFFF;
						}
					}
				}
			}


		}
	}
</style>
