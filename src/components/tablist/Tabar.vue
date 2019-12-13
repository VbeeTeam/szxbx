<template>
	<div class="tabar">
		<ul class="listNav">
			<li v-for="(item,i) in navList" :key="i" @click="changeTab(i)" :class="{'active' : liIndex == i}">
				{{item}}
			</li>
		</ul>

		<!-- 
			is 特性动态绑定子组件
			keep-alive 将切换出去的组件保留在内存中 
		-->
		
		<div v-if="difference">
			<SpecialList :is="currentTab" keep-alive></SpecialList>
		</div>
		<!-- 产品精选 -->
		<div v-else-if="universalList">
			<UniversalList :index="liIndex"></UniversalList>
		</div>
		


	</div>
</template>

<script>
	import UniversalList from '@/components/selected/UniversalList.vue'
	import SpecialList from '@/components/classroom/SpecialList.vue'
	import OtherList from '@/components/classroom/OtherList.vue'
	
	
	

	export default {
		name: 'tabar',
		props: ['difference','universalList','programmeList'],
		components: {
			UniversalList,
			SpecialList,
			OtherList,
			
		},
		data() {
			return {
				navList: [],
				liIndex: 0,
				currentTab: 'SpecialList'
			}
		},
		created() {

		},
		mounted() {

			//保险课堂
			if (this.$parent.classroom) {
				this.navList = this.$parent.classroom
			}
			//产品精选
			if (this.$parent.navLists) {
				this.navList = this.$parent.navLists
			}
			

		},
		methods: {
			changeTab(i) {
				
				this.liIndex = i
				// this.currentTab = i; // tab 为当前触发标签页的组件名
				if(this.$parent.classroom){
					if( i == 0){
						this.currentTab = "SpecialList"
					}else{
						this.currentTab = "OtherList"
					}
				}
				
				
				
				
			}
		}


	}
</script>

<style scoped lang="scss">
	.tabar {
		.listNav {
			height: 2.5rem;
			display: -webkit-flex;
			justify-content: space-around;
			align-items: center;
			border-bottom: 1px solid #f0f0f3;

			li {
				font-size: 1rem;
				color: #d2d2d2;
			}

			.active {
				color: orange;
			}
		}

	}
</style>
