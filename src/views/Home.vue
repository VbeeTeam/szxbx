<template>
	<div class="home">

		<div class="home-top">
			<div class="top-search">
				<div class="search">
					<img src="../assets/img/icon_search.png" />
					<input type="text" placeholder="大家都在搜：医疗险" />
				</div>
			</div>
			<ul class="top-nav">
				<li>
					<router-link to="/programme">
						<img src="../assets/img/icon_方案定制.png" alt="">
						<span>方案定制</span>
					</router-link>
				</li>
				<li>
					<router-link to="/programmeList">
						<img src="../assets/img/icon_产品精选.png" alt="">
						<span>产品精选</span>
					</router-link>
				</li>
				<li>
					<img src="../assets/img/icon_保单管理.png" alt="">
					<span>保单管理</span>
				</li>
				<li>
					<img src="../assets/img/icon_常见问题.png" alt="">
					<span>常见问题</span>
				</li>
			</ul>
			<!-- <div class="top-swiper">
				<Swiper />
				<div class="line"></div>
			</div> -->
		</div>

		<div class="home-section">
			<!-- 专业测评 -->
			<div class="section-top">
				<div>
					<img src="../assets/img/pic_topic.png" alt="">
					<h4>专业测评</h4>
				</div>
				<div class="btn">
					<button>更多</button>
					<img src="../assets/img/icon_arrowright.png" alt="">
				</div>
			</div>
			<div class="section-productImg">
				<div class="productImg-left">
					<h3>百万医疗险国内首测</h3>
					<h5>百万医疗险你能陪到几万</h5>
					<div>
						<img src="../assets/img/icon_eye(1).png" alt="">
						<span>3759</span>
					</div>
				</div>
				<div class="productImg-left productImg-right">
					<h3>多次赔付重疾险哪家强？</h3>
					<h5>五款不分组多次赔付产品对比攻略</h5>
					<div>
						<img src="../assets/img/icon_eye(1).png" alt="">
						<span>1214</span>
					</div>
				</div>
			</div>

			<!-- 保险攻略 -->
			<div class="section-top">
				<div>
					<img src="../assets/img/pic_topic.png" alt="">
					<h4>六大攻略</h4>
				</div>
				<div class="btn">
					<button>更多</button>
					<img src="../assets/img/icon_arrowright.png" alt="">
				</div>
			</div>

			<div class="section-list">
				<div class="list-top">
					<h2>保险入门攻略</h2>
					<h5>入门攻略，教会你保险基础入门知识</h5>
				</div>
				<div class="list-content">
					<ul>
						<li v-for="item in lists" :key="item.id" @click="openArticle(item)">
							<div class="content-left">
								<p>{{item.title}}</p>
								<div class="left-number">
									<div>
										<img src="../assets/img/icon_comments.png" alt="">
										<span>63</span>
									</div>
									<div>
										<img src="../assets/img/icon_eye.png" alt="">
										<span>63</span>
									</div>
								</div>
							</div>
							<img class="content-right" src="../assets/img/文章配图-3.png" alt="">
							
						</li>
					</ul>
					<div class="list-all">
						<span>查看更多</span>
						<img src="../assets/img/icon_arrowright-white.png" alt="">
					</div>
				</div>
				
			</div>


			<div class="list-top section-bottom">
				<div>
					<h2>定期寿险</h2>
					<h5>最稳固的家庭基础保障</h5>
				</div>

			</div>

		</div>

	</div>
</template>

<script>
	// import Swiper from '@/components/swiper/Swiper.vue'
	// import SwiperStatic from '@/components/swiper/SwiperStatic.vue'
	import {
		apiModule
	} from '@/api/api'; // 导入我们的api接口
	import {
		apiArticleList
	} from '@/api/api'; // 导入我们的api接口
	export default {
		name: 'home',
		components: {
			// Swiper,
			// SwiperStatic
		},
		data() {
			return {

				lists: [],
				module: {
					id: "",
					title: ""
				}
			}
		},
		methods: {
			// 获取数据
			onLoad() {
				// 调用api接口              
				apiModule('/api/tModule/1', {}).then(res => {
					console.log("板块", res)
					this.module.id = res[0].id
					this.module.title = res[0].name
				})

			},
			//文章列表
			articleList() {
				apiArticleList({
					moduleId: this.module.id
				}).then(res => {
					console.log("文章列表", res)
					this.lists = res.content
				})
			},
			//打开文章
			openArticle(a) {
				console.log(a)
				if (a.wechat_article_url != "") {
					window.open(a.wechat_article_url)
				} else {
					this.$router.push({
						path: '/content',
						query: {
							id: a.id
						}
					});
				}
			},
		},
		created() {
			//window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=APPID&redirect_uri=REDIRECT_URI&response_type=code&scope=SCOPE&state=STATE#wechat_redirect"
			this.onLoad();
			this.articleList();
		}

	}
</script>

<style scoped lang="scss">
	.home {
		padding-bottom: 5rem;

		/** 顶部搜索 **/
		.home-top {
			.top-search {
				height: 10.6rem;
				background: url(../assets/img/banner.png) center top;
				background-size: cover;
				padding-top: 1rem;
				box-sizing: border-box;

				.search {
					width: 90%;
					margin: 0 auto;
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
			}

			.top-nav {
				display: -webkit-flex;
				justify-content: space-around;
				padding: 1rem;
				box-sizing: border-box;
				text-align: center;

				li {
					img {
						width: 3rem;
						height: 3rem;
					}

					span {
						display: block;
						font-size: 0.75rem;
						font-family: PingFang-SC-Medium, PingFang-SC;
						font-weight: 500;
						color: rgba(51, 51, 51, 1);
						line-height: 1.06rem;
					}
				}
			}

			.top-swiper {
				margin-top: 0.1rem;
			}
		}

		/** 主体内容 **/
		.home-section {
			.section-top {
				display: -webkit-flex;
				justify-content: space-between;
				padding: 0.63rem 0.75rem;

				div {
					display: -webkit-flex;
					align-items: center;

					img {
						width: 0.5rem;
						height: 0.88rem;
						margin-right: 0.5rem;
					}

					h4 {
						font-size: 1.13rem;
						font-family: PingFang-SC-Bold, PingFang-SC;
						font-weight: bold;
						color: rgba(0, 0, 0, 1);
						line-height: 1.56rem;
					}
				}

				.btn {
					display: -webkit-flex;
					align-items: center;

					button {
						font-size: 0.88rem;
						font-family: PingFang-SC-Medium, PingFang-SC;
						font-weight: 500;
						color: #7B7B7B;
						line-height: 1.25rem;
						border: 0;
						background-color: #fff;
					}

					img {
						width: 1.25rem;
						height: 1.25rem;

						margin: 0;
					}
				}

			}

			.section-productImg {
				display: -webkit-flex;
				justify-content: space-between;
				padding: 0.63rem 0.75rem;
				box-sizing: border-box;

				.productImg-left {
					position: relative;
					flex: 1;
					height: 6.25rem;
					background: url(../assets/img/pic_2.png) center top;
					background-size: cover;

					padding: 0.75rem 0.25rem;
					box-sizing: border-box;

					h3 {
						font-size: 0.88rem;
						font-family: PingFang-SC-Bold, PingFang-SC;
						font-weight: bold;
						color: rgba(255, 255, 255, 1);
						line-height: 1.25rem;
						text-shadow: 0px 0px 0px rgba(202, 112, 13, 1);
						margin-bottom: 0.25rem;
					}

					h5 {
						font-size: 0.63rem;
						font-family: PingFang-SC-Medium, PingFang-SC;
						font-weight: 500;
						color: rgba(255, 255, 255, 1);
						line-height: 0.88rem;
					}

					div {
						position: absolute;
						right: 0.25rem;
						bottom: 0.25rem;
						display: -webkit-flex;
						justify-content: flex-end;
						align-items: center;

						img {
							width: 1.31rem;
							height: 1.31rem;

						}

						span {
							font-size: 0.75rem;
							font-family: DIN-Medium, DIN;
							font-weight: 500;
							color: rgba(255, 255, 255, 1);
							line-height: 0.94rem;
							text-shadow: 0px 0px 0px rgba(0, 0, 0, 0.8);
						}
					}
				}

				.productImg-right {
					flex: 1;
					height: 6.25rem;
					background: url(../assets/img/pic_3.png) center top;
					background-size: cover;
					margin-left: 0.69rem;
				}
			}


			.section-list {
				padding: 0.63rem 0.75rem;
				box-sizing: border-box;
				.list-content{
					background-color: #91CEFF;
					padding: 0.63rem 0.75rem;
					box-sizing: border-box;
					ul{
						padding: 0.6rem;
						background-color: #fff;
						border-radius: 5px;
						li {
							display: -webkit-flex;
							justify-content: space-between;
							
							
							border-bottom: 1px solid #000000;
							&:last-of-type {
								border: 0;
							}
							.content-left{
								flex: 1;
								display: -webkit-flex;
								flex-direction: column;
								p {
									flex: 1;
									font-size:0.75rem;
									font-family:PingFang-SC-Bold,PingFang-SC;
									font-weight:bold;
									color:rgba(51,51,51,1);
									line-height:1.06rem;				
								}
								.left-number{
									display: -webkit-flex;
									justify-content: flex-end;
									align-items: center;
									div{
										display: -webkit-flex;
										align-items: center;
										margin-right: 1rem;
										img{
											width: 1.2rem;
											height:1.2rem;
											margin-right: 0.3rem;
										}
										span{
											font-size:0.75rem;
											font-family:DIN-Medium,DIN;
											font-weight:500;
											color:#999999;
											line-height:0.94rem;
										}
									}
								}
							}
							.content-right{
								width: 5.63rem;
								height: 4.38rem;
							}
						
						}
					}
					
					.list-all{
						margin-top: 0.7rem;
						display: -webkit-flex;
						justify-content: center;
						span{
							font-size:0.88rem;
							font-family:PingFang-SC-Medium,PingFang-SC;
							font-weight:500;
							color:rgba(255,255,255,1);
							line-height:1.25rem;
						}
						img{
							width: 1.25rem;
							height: 1.25rem;
							vertical-align: middle;
						}
					}
					
				}
				
			}

			.list-top {
				height: 5.5rem;
				padding: 0.63rem 0.75rem;
				box-sizing: border-box;
				background: url("../assets/img/入门攻略顶部图.png") center top;
				background-size: cover;

				h2 {
					font-size: 1.25rem;
					font-family: PingFang-SC-Bold, PingFang-SC;
					font-weight: bold;
					color: rgba(255, 255, 255, 1);
					line-height: 1.75rem;
				}

				h5 {
					margin-top: 0.3rem;
					font-size: 0.8rem;
					font-family: PingFang-SC-Medium, PingFang-SC;
					font-weight: 500;
					color: rgba(255, 255, 255, 1);
					line-height: 1.06rem;
				}
			}

			.section-bottom {
				padding: 0.63rem 0.75rem;
				background: url("");

				div {
					height: 5.5rem;
					padding: 0.63rem 0.75rem;
					box-sizing: border-box;
					background: url("../assets/img/入门攻略顶部图-2.png") center top;
					background-size: cover;
				}

			}

		}



	}
</style>
