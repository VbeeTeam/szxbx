<template>
	<div class="my">
		<div class="my-suer">
			<img src="../assets/img/cooper5.png" alt="">
			<h3>昵称</h3>
		</div>
		<div class="my-profit">
			<span><i>0.00</i>我的奖金</span>
			<span><i>0.00</i>今日收益</span>
		</div>
		<ul class="my-nav">
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
		<ul class="my-list">
			<li v-for="(item,i) in myList" :key="i">
				<div>
					<img :src="item.imgUrl" alt="">
					<span>{{item.text}}</span>
				</div>
				<strong> > </strong>
			</li>

		</ul>

	</div>
</template>
<script>
	
	export default {
		name: 'my',
		components: {
		},
		data() {
			return {
				myList: [{
						imgUrl: require("../assets/img/cooper5.png"),
						text: "理赔服务"
					},
					{
						imgUrl: require("../assets/img/cooper5.png"),
						text: "理赔服务"
					},
					{
						imgUrl: require("../assets/img/cooper5.png"),
						text: "理赔服务"
					},
					{
						imgUrl: require("../assets/img/cooper5.png"),
						text: "理赔服务"
					}
				]
			}

		}
	}
</script>
<style scoped lang="scss">
	.my {
		.my-suer {
			display: -webkit-flex;
			align-items: center;
			padding: 1rem;

			img {
				width: 2rem;
				height: 2rem;
				border-radius: 50%;
				margin-right: 1rem;
			}

			h3 {
				font-size: 1rem;
			}
		}

		.my-profit {
			display: -webkit-flex;
			justify-content: space-around;

			span {
				text-align: center;
				font-size: 1rem;
				color: #333;

				i {
					display: block;
					font-size: 1rem;
				}
			}
		}

		.my-nav {
			width: 90%;
			display: -webkit-flex;
			justify-content: space-around;
			margin: 1rem auto 0;
			background-color: #fff;
			z-index: 2;
			border-radius: 5px;
			padding: 1rem;
			box-sizing: border-box;
			box-shadow: 0 0 5px #ccc;

			li {
				img {
					display: block;
					width: 2.4rem;
					height: 2.4rem;
					margin-bottom: 0.4rem;
				}

				span {
					font-size: 0.7rem;
					color: #343434;
				}
			}
		}


		.my-list {
			li {
				display: -webkit-flex;
				align-items: center;
				justify-content: space-between;
				border-bottom: 1px solid #f0f0f3;
				padding: 0.8rem;

				div {
					display: -webkit-flex;
					align-items: center;

					img {
						width: 1.5rem;
						height: 1.5rem;
						margin-right: 0.8rem;
					}

					span {
						font-size: 1rem;
						color: #4E4E4E;
					}
				}

				strong {
					font-size: 1rem;
					color: #ccc;
				}
			}

		}

	}
</style>
