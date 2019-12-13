<template>

	<ul class="list">
		<li v-for="(item,i) in listData" :key="i">
			<img :src="item.imgUrl" alt="">
			<div class="list-right">
				<h3>{{item.title}}</h3>
				<p>{{item.date}}</p>
			</div>
		</li>
	</ul>

</template>

<script>
	export default {
		name: 'speciallist',
		props: [],
		data() {
			return {
				listData: [{
						imgUrl: require("../../assets/img/bg_4.png"),
						title: "定期寿险可转终身？这是一道1+1>2的算术题!",
						date: "2019-11-13  15:00"
					},
					{
						imgUrl: require("../../assets/img/bg_4.png"),
						title: "定期寿险可转终身？这是一道1+1>2的算术题!",
						date: "2019-11-13  15:00"
					},
					{
						imgUrl: require("../../assets/img/bg_4.png"),
						title: "定期寿险可转终身？这是一道1+1>2的算术题!",
						date: "2019-11-13  15:00"
					},
					{
						imgUrl: require("../../assets/img/bg_4.png"),
						title: "定期寿险可转终身？这是一道1+1>2的算术题!",
						date: "2019-11-13  15:00"
					},
					{
						imgUrl: require("../../assets/img/bg_4.png"),
						title: "定期寿险可转终身？这是一道1+1>2的算术题!",
						date: "2019-11-13  15:00"
					},
					{
						imgUrl: require("../../assets/img/bg_4.png"),
						title: "定期寿险可转终身？这是一道1+1>2的算术题!",
						date: "2019-11-13  15:00"
					}
				]
			}
		},
		created() {

		},
		mounted() {},
		methods: {

		},



	}
</script>

<style scoped lang="scss">
	.list {
		padding: 0.5rem;

		li {
			display: flex;
			padding: 0.5rem;
			img {
				width: 6rem;
				height: 4.5rem;
				border-radius: 5px;
			}

			.list-right {
				margin-left: 0.5rem;
				display: -webkit-flex;
				flex-direction: column;
				h3 {
					flex: 1;
					font-size: 1rem;
					color: #444;
					word-break: break-all;
				}

				p {
					font-size: 0.8rem;
					color: #818181;
				}
			}

		}

	}
</style>
