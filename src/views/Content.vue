<template>
	<div class="content">
		<div class="header">
			<h3>{{title}}</h3>
			<p><span>原创 : {{user}}</span><span>星池多保</span><span>{{time | formatDate}}</span></p>
		</div>
		<div class="cover">
			<img src="../assets/img/banner.png" alt="">
		</div>
		<div class="section" v-html="content">
		</div>
	</div>

</template>
<script>
	import {
		apiArticle
	} from '@/api/api'; // 导入我们的api接口
	export default {
		name: 'content',
		components: {

		},
		data() {
			return {
				content: "",
				articleId: "",
				title: "",
				time: "",
				user: ""
			}

		},
		methods: {
			// 获取数据
			onLoad() {
				// 调用api接口，并且提供了两个参数                
				apiArticle('/api/article/show/' + this.articleId, {}).then(res => {
					console.log('文章', res)
					this.title = res.title
					this.time = res.publish_time
					this.user = res.author
					this.content = res.format_content
				})
			}
		},
		filters: {
			formatDate: function(value) {
				let date = new Date(value);
				let y = date.getFullYear();
				let MM = date.getMonth() + 1;
				MM = MM < 10 ? ('0' + MM) : MM;
				let d = date.getDate();
				d = d < 10 ? ('0' + d) : d;
				let h = date.getHours();
				h = h < 10 ? ('0' + h) : h;
				let m = date.getMinutes();
				m = m < 10 ? ('0' + m) : m;
				let s = date.getSeconds();
				s = s < 10 ? ('0' + s) : s;
				return y + '-' + MM + '-' + d;
			}
		},
		created() {
			this.articleId = this.$route.query.id
			this.onLoad()
		}

	}
</script>
<style scoped lang="scss">
	.content {
		padding: 0.5rem;

		.header {
			h3 {
				font-size: 1.4rem;
				color: #333;
				font-weight: 400;
			}

			p {
				margin-top: 1rem;

				span {
					font-size: 1rem;
					color: #ccc;
					margin-right: 0.8rem;

					&:nth-child(2) {
						color: #576b95;
					}
				}
			}

			margin-bottom: 2rem;
		}
		.cover{
			margin: 1rem 0 2rem;
		}

	}
</style>
