<template>
	<div class="swiperstatic">
		<!-- Swiper -->
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(item,i) in sw" :key="i" :style="{backgroundImage: 'url(' + item.bgUrl + ')',backgroundSize:'cover' }">
					<div>
						<h3>{{item.title}}</h3>
						<p>{{item.text}}</p>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
	import Swiper from 'swiper'

	export default {
		name: 'swiperstatic',
		props: ['sw'],
		data() {
			return {
				mySwiper2:null,
				
			}

		},
		mounted() {
			
			setTimeout(()=>{
				this.mySwiper2 = new Swiper('.swiperstatic .swiper-container', {
						direction: 'horizontal',
						loop: true,
						slidesPerView: "auto", 
						centeredSlides:true,
						spaceBetween: 15,
				}) 
			},100)
		

		}


	}
</script>

<style scoped lang="scss">
	.swiperstatic {

		height: 5rem;

		.swiper-container {
			width: 100%;
			height: 100%;
		}
		.swiper-slide {
			width: 70%;
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
			border-radius: 5px;
				div{
					flex: 1;
					text-align: left;
					padding-left: 0.5rem;
					color:#fff;
					h3{
						font-size: 0.8rem;
						// color: #2E2E2E;
						
					}
					p{
						font-size:0.8rem;
						// color: #3B3C3D;
					}
				}
				
		}
	}
</style>
