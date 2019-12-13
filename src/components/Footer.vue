<template>
	<ul class="footer">
		<li v-for="(item,index) in tabs" :key="item.id" @click="liClick(index)">
			<img v-if="liIndex != index" :src="item.imgUrl1" />
			<img v-else :src="item.imgUrl2" />
			<span :class="{'active' : liIndex == index}">{{item.name}}</span>
		</li>

	</ul>

</template>

<script>
	import {
		apiTabs
	} from '@/api/api'; // 导入我们的api接口

	export default {

		name: 'footers',
		props: {

		},
		components: {

		},
		data() {
			return {
				tabs: [{
						imgUrl1: require('../assets/img/Tabbar-icon_home_n.png'),
						imgUrl2: require('../assets/img/Tabbar-icon_home_s.png'),
						name: "首页"
					},
					{
						imgUrl1: require('../assets/img/Tabbar-icon_class_n.png'),
						imgUrl2: require('../assets/img/Tabbar-icon_class_s.png'),
						name: "保险课堂"
					},
					{
						imgUrl1: require('../assets/img/Tabbar-icon_product_n.png'),
						imgUrl2: require('../assets/img/Tabbar-icon_product_s.png'),
						name: "产品精选"
					},
					{
						imgUrl1: require('../assets/img/Tabbar-icon_mine_n.png'),
						imgUrl2: require('../assets/img/Tabbar-icon_mine_s.png'),
						name: "我的"
					}
				],
				liIndex: 0
			}
		},
		methods: {
			liClick(i) {
				switch (i) {
					case 0:
						this.routerUrl('/');
						break;
					case 1:
						this.routerUrl('/classroom');
						break;
					case 2:
						this.routerUrl('/selected');
						break;
					case 3:
						this.routerUrl('/my');
						break;
				}
				this.liIndex = i
			},
			routerUrl(url) {
				this.$router.push({
					path: url
				});
			},
			// 获取数据            
			onLoad() {
				// 调用api接口              
				apiTabs({}).then(res => {
					console.log("页签", res)
					this.tabs = res
				})
			}

		},

		created() {
			// this.onLoad();
		}

	}
</script>

<style scoped lang="scss">
	.footer {
		width: 100%;
		position: fixed;
		left: 0;
		bottom: 0;
		display: -webkit-flex;
		justify-content: space-around;
		align-items: center;
		background-color: #fff;
		z-index: 99;
		border-top: 1px solid #e6e6e6;
		padding: 0.5rem;
		box-sizing: border-box;

		li {
			text-align: center;

			img {
				width: 2rem;
				height: 2rem;
			}

			span {
				display: block;
				font-size: 0.6rem;
				color: #ccc;
			}

		}

		.active {
			color:#19ABFD;
		}


	}
</style>
