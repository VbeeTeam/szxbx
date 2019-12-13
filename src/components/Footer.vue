<template>
	<ul class="footer">
		<li v-for="(item,index) in tabs" :key="item.id" @click="liClick(index)">
			<img src="../assets/img/cooper5.png" />
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
				tabs: [],
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
			this.onLoad();
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
				width: 1.2rem;
				height: 1.2rem;
				margin-bottom: 0.2rem;
			}

			span {
				display: block;
				font-size: 1rem;
				color: #A5A3B2;
			}

		}

		.active {
			color: #FAAC12;
		}


	}
</style>
