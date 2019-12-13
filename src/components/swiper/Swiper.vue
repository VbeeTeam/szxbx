<template>
	<div class="swiper">
		<!-- Swiper -->
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<img src="../../assets/img/cooper5.png" alt="">
					<div class="swiper-center">
						<h3>九尾APP上线啦</h3>
						<p>全新用户体验 甜橙VIP限时免费</p>
					</div>
					<div class="swiper-right">
						了解详情
					</div>
				</div>
				<div class="swiper-slide">
					<img src="../../assets/img/cooper5.png" alt="">
					<div class="swiper-center">
						<h3>九尾APP上线啦</h3>
						<p>全新用户体验 甜橙VIP限时免费</p>
					</div>
					<div class="swiper-right">
						了解详情
					</div>
				</div>
				
			</div>
		</div>
	</div>
</template>

<script>
	import Swiper from 'swiper'

	export default {
		name: 'swiper',
		props: {

		},
		data() {
			return {
				mySwiper:null
			}
		},
		mounted() {
			
			this.$nextTick(()=>{
				this.mySwiper = new Swiper('.swiper .swiper-container', {
						loop: true,
						autoplay: {
							delay: 3000,
							stopOnLastSlide: false,
							disableOnInteraction: false
						},
				})
			})
		
		}


	}
</script>

<style scoped lang="scss">
	.swiper {
		
		height: 5rem;

		.swiper-container {
			width: 100%;
			height: 100%;
		}
		.swiper-slide {
			text-align: center;
			background: #fff;
			display: -webkit-box;
			display: -ms-flexbox;
			display: -webkit-flex;
			display: flex;
			-webkit-box-pack: center;
			-ms-flex-pack: center;
			-webkit-justify-content: center;
			justify-content: center;
			-webkit-box-align: center;
			-ms-flex-align: center;
			-webkit-align-items: center;
			align-items: center;
			
			img{
				width: 2rem;
				height: 2rem;
				margin-right: 1rem;
			}
			.swiper-center{
				h3{
					font-size: 1.6rem;
					font-weight: 500;
					text-align: left;
				}
				p{
					font-size: 0.8rem;
					color: #ccc;
				}
			}
			.swiper-right{
				font-size: 1rem;
				margin-left: 1rem;
				background-color: orange;
				color: #FFFFFF;
				border-radius: 25px;
				padding: 0.5rem 0.8rem;
			}
			
		}
	}
</style>
