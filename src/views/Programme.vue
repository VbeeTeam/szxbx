<template>
	<div class="box">
		<div class="programme">
			<ul class="ul">
				<li class="problem top">
					<img src="../assets/img/cooper5.png" alt="">
					<div class="kailong">
						<span>欢迎使用九尾多保方案定制<br />顾问老师会根据您的情况为您量身定制适合您的保障方案。为此，我们需要您的一些需求信息。<br />您的需求信息将仅用于此次方案定制，请您放心、如实填写</span>
					</div>
				</li>
				<!-- 性别 -->
				<li class="problem top">
					<img src="../assets/img/cooper5.png" alt="">
					<div class="kailong">
						<span>男女有别，保障各异。您的性别是：</span>
					</div>
				</li>
				<li class="frame top">
					<div class="answer sex">
						<div class="sexBtn" v-for="(item,i) in sexList" :key="item.id" :class="{'active' : sexIndex == i}" @click="sexClick(i,item.id)">
							{{item.sex}}
						</div>
					</div>
		
					<div class="result">
						<img class="userImg" src="../assets/img/cooper5.png" alt="">
						<div class="userKailong" @click="userKailong(1)">
							<span>性别</span>
							<img src="../assets/img/cooper5.png" alt="">
						</div>
		
					</div>
		
				</li>
		
				<!-- 家庭 -->
				<li class="problem top" style="display: none;">
					<img src="../assets/img/cooper5.png" alt="">
					<div class="kailong">
						<span>家庭成员决定了规划保险时的优先级和保障额度，您的<b>家庭成员</b>有：</span>
					</div>
				</li>
				<li class="frame top" style="display: none;">
					<div class="answer">
						<div class="home">
							<div class="relation" v-for="(item,i) in homeList" :key="i" @click="homeClick(1,$event,i,item)">
								{{item.relation}}
							</div>
						</div>
						<!-- <div class="children">
							
							<van-picker show-toolbar title="个数" :default-index="1" :columns="childrens" @confirm="childConfirm" />
							
						</div> -->
						<div class="continue" @click="next(2)">继续</div>
					</div>
		
					<div class="result">
						<img class="userImg" src="../assets/img/cooper5.png" alt="">
						<div class="userKailong" @click="userKailong(2)">
							<span>家庭</span>
							<img src="../assets/img/cooper5.png" alt="">
						</div>
		
					</div>
				</li>
				<!-- 收入 -->
				<li class="problem top" style="display: none;">
					<img src="../assets/img/cooper5.png" alt="">
					<div class="kailong">
						<span>方案配置也需要合理的预算，您的<b>家庭年收入</b>落在以下哪个区间？</span>
					</div>
				</li>
				<li class="frame top" style="display: none;">
					<div class="answer">
						<div class="cupation">
							<van-picker :columns="incomeColumns" @change="incomeChange" />
						</div>
						<div class="continue" @click="next(3)">继续</div>
					</div>
		
					<div class="result">
						<img class="userImg" src="../assets/img/cooper5.png" alt="">
						<div class="userKailong" @click="userKailong(3)">
							<span>家庭收入</span>
							<img src="../assets/img/cooper5.png" alt="">
						</div>
		
					</div>
				</li>
		
				<!-- 总贷 -->
				<li class="problem top" style="display: none;">
					<img src="../assets/img/cooper5.png" alt="">
					<div class="kailong">
						<span>贷款情况反映一个家庭的经济风险缺口，您的家庭<b>贷款总额</b>有：</span>
					</div>
				</li>
				<li class="frame top" style="display: none;">
					<div class="answer">
						<div class="cupation">
							<van-picker :columns="loanColumns" @change="loanChange" />
						</div>
						<div class="continue" @click="next(4)">继续</div>
					</div>
		
					<div class="result">
						<img class="userImg" src="../assets/img/cooper5.png" alt="">
						<div class="userKailong" @click="userKailong(4)">
							<span>贷款</span>
							<img src="../assets/img/cooper5.png" alt="">
						</div>
		
					</div>
				</li>
		
				<!-- 被保人 -->
				<li class="problem top" style="display: none;">
					<img src="../assets/img/cooper5.png" alt="">
					<div class="kailong">
						<span>您的基本情况九尾君已经了解，那么您要<b>为谁投保</b>呢？（可多选）</span>
					</div>
				</li>
				<li class="frame top" style="display: none;">
					<div class="answer">
						<div class="home">
							<div class="relation" v-for="(item,i) in inList" :key="item.id" @click="homeClick(2,$event,i,item)">
								{{item.relation}}
							</div>
						</div>
						<div class="continue" @click="next(5)">继续</div>
					</div>
		
					<div class="result">
						<img class="userImg" src="../assets/img/cooper5.png" alt="">
						<div class="userKailong" @click="userKailong(5)">
							<span>被保人</span>
							<img src="../assets/img/cooper5.png" alt="">
						</div>
		
					</div>
				</li>
		
				<!-- 出生日期 -->
				<li class="problem top" style="display: none;">
					<img src="../assets/img/cooper5.png" alt="">
					<div class="kailong">
						<span>生日信息可以用来精确计算保费。被保人的<b>出生日期</b>是？</span>
					</div>
				</li>
				<li class="frame top" style="display: none;">
					<div class="answer">
						<div class="date" v-for="(item,index1) in insuredList" :key="index1">
							<div class="answer-top">
								<span>{{item.relation}}</span>
								<div @click="selectedClick(1,index1)">
									<i v-if="!item.birthDate">请选择</i>
									<i v-else>{{item.birthDate}}</i>
								</div>
							</div>
							<van-datetime-picker :class="{'selected': selectedIndex == index1}" v-model="currentDate" type="date" @confirm="confirmPicker"
							:visible-item-count="3" />
						</div>
						<div class="continue" @click="next(6)">继续</div>
					</div>
		
					<div class="result">
						<img class="userImg" src="../assets/img/cooper5.png" alt="">
						<div class="userKailong" @click="userKailong(6)">
							<span>出生日期</span>
							<img src="../assets/img/cooper5.png" alt="">
						</div>
		
					</div>
				</li>
		
				<!-- 职业 -->
				<li class="problem top" style="display: none;">
					<img src="../assets/img/cooper5.png" alt="">
					<div class="kailong">
						<span>不同工作性质对应不同风险，需要不同的保障。<b>被保人的职业</b>是？</span>
					</div>
				</li>
				<li class="frame top" style="display: none;">
					<div class="answer">
						<div class="cupation" v-for="(item,index2) in insuredList" :key="index2">
							<div class="answer-top">
								<span>{{item.relation}}</span>
								<div @click="selectedClick(2,index2)">
									<i v-if="!item.occupation">请选择</i>
									<i v-else>{{item.occupation}}</i>
								</div>
							</div>
							<van-picker class='picker' show-toolbar :class="{'selected': cupationIndex == index2}" :default-index="2" :columns="cupationList"
							@confirm="cupationChange"></van-picker>
						</div>
						<div class="continue" @click="next(7)">继续</div>
					</div>
		
					<div class="result">
						<img class="userImg" src="../assets/img/cooper5.png" alt="">
						<div class="userKailong" @click="userKailong(7)">
							<span>职业</span>
							<img src="../assets/img/cooper5.png" alt="">
						</div>
		
					</div>
				</li>
		
				<!-- 社保 -->
				<li class="problem top" style="display: none;">
					<img src="../assets/img/cooper5.png" alt="">
					<div class="kailong">
						<span>有无社保可能影响最终的保费。被保人<b>是否有社保？</b></span>
					</div>
				</li>
				<li class="frame top" style="display: none;">
					<div class="answer">
						<div class="isSocialSecurity" v-for="(item,index3) in insuredList" :key="index3">
							<div class="answer-top">
								<span>{{item.relation}}</span>
								<div @click="selectedClick(3,index3)">
									<i v-if="item.isSocialSecurity">有</i>
									<i v-else>无</i>
								</div>
							</div>
							<div class="picker" v-for="items in haves" :key="items.id" :class="{'selected' : isSocialSecurityIndex == index3}">
								<span @click='haveClick(1,items.id,index3)' :class="{'active' : item.isSocialSecurity == items.id}">{{items.text}}</span>
							</div>
						</div>
						<div class="continue" @click="next(8)">继续</div>
					</div>
		
					<div class="result">
						<img class="userImg" src="../assets/img/cooper5.png" alt="">
						<div class="userKailong" @click="userKailong(8)">
							<span>有无社保</span>
							<img src="../assets/img/cooper5.png" alt="">
						</div>
		
					</div>
				</li>
		
				<!-- 加班 -->
				<li class="problem top" style="display: none;">
					<img src="../assets/img/cooper5.png" alt="">
					<div class="kailong">
						<span>意外发生的风险也需要考虑其中。被保人<b>是否经常加班？</b></span>
					</div>
				</li>
				<li class="frame top" style="display: none;">
					<div class="answer">
						<div class="drive" v-for="(item,index4) in insuredList" :key="index4">
							<div class="answer-top">
								<span>{{item.relation}}</span>
								<div @click="selectedClick(4,index4)">
									<i v-if="item.isWorkOvertime">是</i>
									<i v-else>否</i>
								</div>
							</div>
							<div class="picker" v-for="items in whethers" :key="items.id" :class="{'selected' : workIndex == index4}">
								<span @click='whethersClick(1,items.id,index4)' :class="{'active' : item.isWorkOvertime == items.id}">{{items.text}}</span>
							</div>
							
						</div>
						<div class="continue" @click="next(9)">继续</div>
					</div>
		
					<div class="result">
						<img class="userImg" src="../assets/img/cooper5.png" alt="">
						<div class="userKailong" @click="userKailong(9)">
							<span>加班</span>
							<img src="../assets/img/cooper5.png" alt="">
						</div>
		
					</div>
				</li>
				
				<!--驾车-->
				<li class="problem top" style="display: none;">
					<img src="../assets/img/cooper5.png" alt="">
					<div class="kailong">
						<span>意外发生的风险也需要考虑其中。被保人<b>是否经常驾车？</b></span>
					</div>
				</li>
				<li class="frame top" style="display: none;">
					<div class="answer">
						<div class="drive" v-for="(item,index5) in insuredList" :key="index5">
							<div class="answer-top">
								<span>{{item.relation}}</span>
								<div @click="selectedClick(4.5,index5)">
									<i v-if="item.isDrive">是</i>
									<i v-else>否</i>
								</div>
							</div>
							<div class="picker" v-for="items in whethers" :key="items.id" :class="{'selected' :  driveIndex== index5}">
								<span @click='whethersClick(2,items.id,index5)' :class="{'active' : item.isDrive == items.id}">{{items.text}}</span>
							</div>
							
						</div>
						<div class="continue" @click="next(10)">继续</div>
					</div>
				
					<div class="result">
						<img class="userImg" src="../assets/img/cooper5.png" alt="">
						<div class="userKailong" @click="userKailong(10)">
							<span>驾车</span>
							<img src="../assets/img/cooper5.png" alt="">
						</div>
				
					</div>
				</li>
		
				<!-- 有无病史 -->
				<li class="problem top" style="display: none;">
					<img src="../assets/img/cooper5.png" alt="">
					<div class="kailong">
						<span>健康状况决定了被保人能配置世面上哪些保险。被保人<b>是否有病史？</b>(可多选)</span>
					</div>
				</li>
				<li class="frame top" style="display: none;">
					<div class="answer">
						<div class="fall" v-for="(item,index6) in insuredList" :key="index6">
							<div class="answer-top">
								<span>{{item.relation}}</span>
								<i @click="selectedClick(5,index6)">选择</i>
							</div>
							<van-checkbox-group style="display: none;" v-model="result" :class="{'selected' : fallIndex == index6}">
								<van-cell-group>
									<van-cell v-for="item in list" clickable :key="item.id" :title="`${item.text}`">
										<van-checkbox :name="item.text" ref="checkboxes" slot="right-icon"></van-checkbox>
									</van-cell>
									<div class="click" @click="resultChange(index6)">确认</div>
								</van-cell-group>
							</van-checkbox-group>
						</div>
						<div class="continue" @click="next(11)">继续</div>
					</div>
		
					<div class="result">
						<img class="userImg" src="../assets/img/cooper5.png" alt="">
						<div class="userKailong" @click="userKailong(11)">
							<span>有无病史</span>
							<img src="../assets/img/cooper5.png" alt="">
						</div>
		
					</div>
				</li>
		
				<!-- 是否已配置保险 -->
				<li class="problem top" style="display: none;">
					<img src="../assets/img/cooper5.png" alt="">
					<div class="kailong">
						<span>被保人是否已配置保险？</span>
					</div>
				</li>
				<li class="frame top" style="display: none;">
					<div class="answer">
						<div class="isInsure" v-for="(item,index7) in insuredList" :key="index7">
							<div class="answer-top">
								<span>{{item.relation}}</span>
								<div @click="selectedClick(6,index7)">
									<i v-if="item.isInsure">是</i>
									<i v-else>否</i>
								</div>
							</div>
							<div class="picker" v-for="(items,index) in whethers" :key="items.id" :class="{'selected' : isInsureIndex == index7}">
								<span @click='haveClick(2,items.id,index)' :class="{'active' : item.isInsure == items.id}">{{items.text}}</span>
							</div>
						</div>
						<div class="continue" @click="next(12)">继续</div>
					</div>
		
					<div class="result">
						<img class="userImg" src="../assets/img/cooper5.png" alt="">
						<div class="userKailong" @click="userKailong(12)">
							<span>是否已配置保险</span>
							<img src="../assets/img/cooper5.png" alt="">
						</div>
		
					</div>
				</li>
		
				<!-- 您目前所在区域 -->
				<li class="problem top" style="display: none;">
					<img src="../assets/img/cooper5.png" alt="">
					<div class="kailong">
						<span>您目前所在区域</span>
					</div>
				</li>
				<li class="frame top" style="display: none;">
					<div class="answer">
						<div class="city">
							<van-area :area-list="cityColumns" :columns-num="2" @change="cityChange" />
						</div>
						<div class="continue" @click="next(13)">继续</div>
					</div>
		
					<div class="result">
						<img class="userImg" src="../assets/img/cooper5.png" alt="">
						<div class="userKailong" @click="userKailong(13)">
							<span>所在区域</span>
							<img src="../assets/img/cooper5.png" alt="">
						</div>
		
					</div>
				</li>
		
				<!-- 联系方式 -->
				<li class="problem top" style="display: none;">
					<img src="../assets/img/cooper5.png" alt="">
					<div class="kailong">
						<span>最后一步~请留下您的联系方式：</span>
					</div>
				</li>
				<li class="frame top" style="display: none;">
					<div class="answer">
						<div class="income">
							<van-cell-group>
								<van-field v-model="forms.username" label="用户名" @blur="inputBlur(1)" clearable placeholder="请输入用户名" :error-message="forms.userErr" />
								<van-field v-model="forms.phone" label="手机号" @blur="inputBlur(2)" clearable placeholder="请输入手机号" :error-message="forms.phoneErr" />
								<van-field v-model="forms.sms" cente clearable @blur="inputBlur(3)" label="验证码" :error-message="forms.smsErr">
								<van-button @click="Send()" slot="button" size="small" type="primary" style="background: #ffa85d;color:#fff;padding:0.2rem;border-radius: 3px;">发送验证码</van-button></van-field>
							</van-cell-group>
						</div>
						<p style="font-size: 0.8rem;color: #bebebe;margin: 1rem 0;text-align: center;">*信息提交后无法修改，请留意检查哦~</p>
						<div class="continue" @click="submit()">提交</div>
					</div>
		
					<div class="result">
						<img class="userImg" src="../assets/img/cooper5.png" alt="">
						<div class="userKailong" @click="userKailong(14)">
							<span>联系方式</span>
							<img src="../assets/img/cooper5.png" alt="">
						</div>
		
					</div>
				</li>
		
			</ul>
		</div>
	</div>
	

</template>
<script>
	
	import province_list from '@/api/city'; 
	import { generaList } from '@/api/api'; 
	import { smsSend } from '@/api/api'; 
	import { sendMit } from '@/api/api'; 
	
	
	export default {
		name: 'programme',
		components: {

		},
		data() {
			return {
				programmeList: [],
				sexIndex: 0,
				sexList: [{
					id: 1,
					sex: "男"
				}, {
					id: 0,
					sex: "女"
				}],
				homeList: [{
						relation: "本人",
						type: false
					},
					{
						relation: "配偶",
						type: false,
					},
					{
						relation: "父亲",
						type: false,
					},
					{
						relation: "母亲",
						type: false,
					},
					{
						relation: "配偶父亲",
						type: false,
					},
					{
						relation: "配偶母亲",
						type: false,
					},
					{
						relation: "儿子",
						type: false,
					},
					{
						relation: "女儿",
						type: false,
					}
				],
				homeBoolean: false,
				insuredBoolean: false,
				inList:[],
				insuredList: [],
				incomeColumns: ['无','5万以下', '5~10万', '10~20万', '20~30万', '30~50万', '50~100万', '100万以上'],
				loanColumns: ['无', '50万以下', '50~100万', '100~200万', '200~500万', '500万以上'],
				childrens:['1','2','3'],
				cupationList: [],
				haves: [
					{
						id:1,
						text:"有"
					},
					{
						id: 0,
						text: "无"
					}
					],
				whethers:[
					{
						id:1,
						text:"是"
					},
					{
						id: 0,
						text: "否"
					}
					],
				list: [],
				cityColumns: {},
				result: [],
				currentDate: new Date(),
				selectedIndex: 0,
				cupationIndex: 0,
				isSocialSecurityIndex: 0,
				isSocialIndex:1,
				haveIndex: 0,
				driveIndex: 0,
				workIndex: 0,
				whIndex:0,
				fallIndex: 0,
				isInsureIndex:0,
				forms:{
					username:"",
					phone:"",
					sms:"",
					userErr:"",
					phoneErr:"",
					smsErr:"",
				},
				request: {
					"name": "", //名称
					"sex": "", //性别
					"familyMembers":"",//家庭成员
					"insuredPerson":"",//被保人
					"yearIncome": "无", //年收入
					"totalLending": "无", //总贷款
					"phone": "", //手机号
					"location": "北京", //地区
					"verifyCode":"",//验证码
					"familyMemberList": [{
						"birthDate": "", //生日
						"occupation": "无", //职业
						"isSocialSecurity": 1, //是否有社保
						"isWorkOvertime": 1, //是否加班
						"isDrive": 1, //是否驾车
						"medicalHistory": 1, //病史
						isInsure:1,//是否配置保险
						"relation": ""//关系代码
						
					}]
				}
			}

		},
		methods: {
			// 获取列表
			getList(obj) {
				// 调用api接口，并且提供了两个参数                
				generaList(obj).then(res => {
					if(obj.sign == 1){
						this.cupationList = res
					}else{
						this.list = res
					}
				})
			},
			//发送短信
			Send(){
				var obj = {
					phone:this.forms.phone
				}
				smsSend(obj).then(res => {
					console.log('', res)
					
				})
			},
			
			confirmPicker(value) { // 确定按钮，时间格式化并显示在页面上
				var date = value;
				var m = date.getMonth() + 1;
				var d = date.getDate();
				if (m >= 1 && m <= 9) {
					m = "0" + m;
				}
				if (d >= 0 && d <= 9) {
					d = "0" + d;
				}
				var timer = date.getFullYear() + "-" + m + "-" + d

				this.insuredList[this.selectedIndex].birthDate = timer
				this.selectedIndex = this.selectedIndex + 1
			},
			domShow(num, str) {
				$('.ul li:nth-of-type(' + num + ')' + str).show()
			},
			domHide(num, str) {
				$('.ul li:nth-of-type(' + num + ')' + str).hide()
			},
			scrollTop(liNum) {
				var tops = $('.ul .top:nth-of-type(' + liNum + ')').offset().top
				$("html,body").animate({
					scrollTop: tops - 20
				}, 500);
			},
			//修改信息
			userKailong(a) {
				if (a == 1) { //性别
					this.domHide(3, ' .result')
					this.domShow(3, ' .answer')
				} else if (a == 2) { //家庭成员
					this.domHide(5, ' .result')
					this.domShow(5, ' .answer')
				} else if (a == 3) { //收入
					this.domHide(7, ' .result')
					this.domShow(7, ' .answer')
				} else if (a == 4) { //总贷
					this.domHide(9, ' .result')
					this.domShow(9, ' .answer')
				} else if (a == 5) { //被保人
					this.domHide(11, ' .result')
					this.domShow(11, ' .answer')
				} else if (a == 6) { //被保人
					this.domHide(13, ' .result')
					this.domShow(13, ' .answer')
				} else if (a == 7) { //被保人
					this.domHide(15, ' .result')
					this.domShow(15, ' .answer')
				} else if (a == 8) { //社保
					this.domHide(17, ' .result')
					this.domShow(17, ' .answer')
				} else if (a == 9) { //加班
					this.domHide(19, ' .result')
					this.domShow(19, ' .answer')
				} else if (a == 10) { // 驾车
					this.domHide(21, ' .result')
					this.domShow(21, ' .answer')
				} else if (a == 11) { //有无病史
					this.domHide(23, ' .result')
					this.domShow(23, ' .answer')
				} else if (a == 12) { //是否配置保险
					this.domHide(25, ' .result')
					this.domShow(25, ' .answer')
				} else if (a == 13) { //所在区域
					this.domHide(27, ' .result')
					this.domShow(27, ' .answer')
				} else if (a == 14) { //联系方式
					this.domHide(29, ' .result')
					this.domShow(29, ' .answer')
				}

			},
			//继续
			next(b) {
				if (b == 2) { //家庭
					var str = "";
					this.inList = []
					this.homeList.forEach((item) => {
						if (item.type) {
							this.inList.push(item)
							str += item.relation + ","
						}
					})
					str = str.substring(0, str.lastIndexOf(','));
					console.log(str)
					this.request.familyMembers = str
					
					if (this.inList.length == 0) {
						return
					} else {
						this.domHide(5, ' .answer')
						this.domShow(5, ' .result')
						this.domShow(6, '')
						this.domShow(7, '')
						this.$nextTick(() => {
							this.scrollTop(6)
						})
					}

				} else if (b == 3) { //收入
					
					this.domHide(7, ' .answer')
					this.domShow(7, ' .result')
					this.domShow(8, '')
					this.domShow(9, '')
					this.$nextTick(() => {
						this.scrollTop(8)
					})
					
				} else if (b == 4) { //总贷
					this.domHide(9, ' .answer')
					this.domShow(9, ' .result')
					this.domShow(10, '')
					this.domShow(11, '')
					this.$nextTick(() => {
						this.scrollTop(10)
					})
				} else if (b == 5) { //被保人
					var str2 = ""
					this.insuredList = []
					this.inList.forEach((item) => {
						if (!item.type) {
							this.insuredList.push(item)
							str2 += item.relation + ","
						}
					})
					str2 = str2.substring(0, str2.lastIndexOf(','));

					this.request.insuredPerson = str2
					if(this.insuredList.length == 0){
						return
					}else{
						this.domHide(11, ' .answer')
						this.domShow(11, ' .result')
						this.domShow(12, '')
						this.domShow(13, '')
						this.$nextTick(() => {
							this.scrollTop(12)
						})
				
					}
					
				} else if (b == 6) { //出生日期
					if (this.insuredList[0].birthDate == undefined) {
						return
					} else {
						this.domHide(13, ' .answer')
						this.domShow(13, ' .result')
						this.domShow(14, '')
						this.domShow(15, '')
						this.$nextTick(() => {
							this.scrollTop(14)
						})
						
						
					}
				} else if (b == 7) { //职业
					if (this.insuredList[0].occupation == undefined) {
						return
					} else {
						this.domHide(15, ' .answer')
						this.domShow(15, ' .result')
						this.domShow(16, '')
						this.domShow(17, '')
						this.$nextTick(() => {
							this.scrollTop(16)
						})
					}

				} else if (b == 8) { //有无社保
					if (this.insuredList[0].isSocialSecurity == undefined) {
						return
					} else {
						this.domHide(17, ' .answer')
						this.domShow(17, ' .result')
						this.domShow(18, '')
						this.domShow(19, '')
						this.$nextTick(() => {
							this.scrollTop(18)
						})
											
					}
						
				} else if (b == 9) { //加班
				if (this.insuredList[0].isWorkOvertime == undefined) {
					return
				} else {
					this.domHide(19, ' .answer')
					this.domShow(19, ' .result')
					this.domShow(20, '')
					this.domShow(21, '')
					this.$nextTick(() => {
						this.scrollTop(20)
					})
				}
					
				} else if (b == 10) { //驾车
				if (this.insuredList[0].isDrive == undefined) {
					return
				} else {
					this.domHide(21, ' .answer')
					this.domShow(21, ' .result')
					this.domShow(22, '')
					this.domShow(23, '')
					this.$nextTick(() => {
						this.scrollTop(22)
					})
				}
					
				} else if (b == 11) { //有无病史
					if (this.insuredList[0].medicalHistory == undefined) {
						return
					} else {
						this.domHide(23, ' .answer')
						this.domShow(23, ' .result')
						this.domShow(24, '')
						this.domShow(25, '')
						this.$nextTick(() => {
							this.scrollTop(24)
						})
					}
						
				} else if (b == 12) { //是否配置保险
					if (this.insuredList[0].isInsure == undefined) {
						return
					} else {
						this.domHide(25, ' .answer')
						this.domShow(25, ' .result')
						this.domShow(26, '')
						this.domShow(27, '')
						this.$nextTick(() => {
							this.scrollTop(26)
						})
					}
				} else if (b == 13) { //所在区域
					this.domHide(27, ' .answer')
					this.domShow(27, ' .result')
					this.domShow(28, '')
					this.domShow(29, '')
					this.$nextTick(() => {
						this.scrollTop(28)
					})
				}

			},
			//联系方式
			inputBlur(a){
				if(a == 1){
					this.forms.username == "" ? this.forms.userErr = "请输入用户名" :this.forms.userErr = ""
					
				}else if(a == 2){
					(/^1[3456789]\d{9}$/.test(this.forms.phone)) == false ? this.forms.phoneErr = "请输入正确手机号" :this.forms.phoneErr = ""
					
				}else if(a == 3){
					this.forms.sms == "" ? this.forms.smsErr = "请输入验证码" :this.forms.smsErr = ""
					
				}
				
			},

			sexClick(i, a) {
				this.sexIndex = i
				this.request.sex = a
				$('.sex').hide()
				this.domShow(3, ' .result')
				this.domShow(4, '')
				this.domShow(5, '')
				this.$nextTick(() => {
					this.scrollTop(4)
				})
			},
			//选择家庭成员被保人
			homeClick(a, $event, i, obj) {
				if (a == 1) {

					this.homeBoolean = obj.type == true ? false : true
					if (this.homeBoolean) {
						$event.target.classList.add('active');
						this.homeList[i].type = this.homeBoolean
					} else {
						$event.target.classList.remove('active');
						this.homeList[i].type = this.homeBoolean
					}

				} else {

					this.insuredBoolean = obj.type == true ? false : true
					if (!this.insuredBoolean) {
						$event.target.classList.add('active');
						this.inList[i].type = this.insuredBoolean
						
					} else {
						$event.target.classList.remove('active');
						this.inList[i].type = this.insuredBoolean
					}

				}


			},
			//收入
			incomeChange(picker, value, index) {
				// Toast(`当前值：${value}, 当前索引：${index}`);
				this.request.yearIncome = value
			},
			//总贷
			loanChange(picker, value, index) {
				this.request.totalLending = value
			},
			//选择日期,职业
			selectedClick(a, i) {
				if (a == 1) { //日期
					this.selectedIndex = i
				} else if (a == 2) { //职业
					this.cupationIndex = i
				} else if (a == 3) { //社保
					this.isSocialSecurityIndex = i
				} else if (a == 4) { //加班
					this.workIndex = i
				} else if (a == 4.5) { //驾车
					this.driveIndex = i
				} else if (a == 5) { //有无病史
					this.fallIndex = i
					var arr = this.insuredList[i].medicalHistory.split(",")
					this.result =  arr
					
				} else if(a == 6) {  //配置保险
					this.isInsureIndex = i
				}


			},
			//职业
			cupationChange(value, index) {
				this.insuredList[this.cupationIndex].occupation = value.text
				this.cupationIndex = this.cupationIndex + 1
			},
			//地区
			cityChange(picker, values) {
				console.log(values)
				this.request.location = values[0].name + values[1].name
			},
			//是否加班驾车
			whethersClick(a,b,index){
				if(a == 1){
					this.insuredList[index].isWorkOvertime = b
					this.workIndex = index + 1
				}else if(a == 2){
					this.insuredList[index].isDrive = b
					this.driveIndex = index + 1
				}
				
				
			},
			//有无病史
			resultChange(i){
				var str = "";	
				this.result.forEach((item)=>{
					str += item + ","
				})
				str = str.substring(0, str.lastIndexOf(','));
				this.insuredList[i].medicalHistory = str
				this.fallIndex = i + 1
				this.result =[]
				if(i == this.insuredList.length-1){
					this.domHide(23, ' .answer')
					this.domShow(23, ' .result')
					this.domShow(24, '')
					this.domShow(25, '')
					this.$nextTick(() => {
						this.scrollTop(24)
					})
				}
				
			},
			//有无
			haveClick(a, item, i) {
				if (a == 1) { //有无社保
					this.insuredList[this.isSocialSecurityIndex].isSocialSecurity = item
					this.isSocialSecurityIndex = this.isSocialSecurityIndex + 1
				} else if (a == 2) { //是否配置保险
					this.insuredList[this.isInsureIndex].isInsure = item
					this.isInsureIndex = this.isInsureIndex + 1
				}

			},
			//提交
			submit(){
				if(this.forms.username == ""){
					this.forms.userErr = "请输入用户名"
				}else if(!(/^1[3456789]\d{9}$/.test(this.forms.phone))){
					this.forms.phoneErr = "请输入正确手机号"
				}else if(this.forms.sms == ""){
					this.forms.smsErr = "请输入验证码"
				}else{
				
					this.forms.userErr = ""
					this.forms.phoneErr = ""
					this.forms.smsErr = ""
					this.request.name = this.forms.username
					this.request.phone = this.forms.phone
					this.request.verifyCode = this.forms.sms
					
					this.request.familyMemberList = this.insuredList
					console.log(this.request)
					
					sendMit(this.request).then(res => {
						this.$toast.success('提交成功')
						this.domHide(29, ' .answer')
						this.domShow(29, ' .result')
					})
					
				}
				
				
			}

		
		},
		created() {
			this.cityColumns = province_list //城市列表
			this.getList({sign:1})//职业列表
			this.getList({sign:2})//病史列表
		}

	}
</script>
<style scoped lang="scss">
	.box{
		height: 100%;
		background-color: #ffeddd;
	}
	.programme {
		background-color: #ffeddd;
		padding: 1rem;
		box-sizing: border-box;


		ul {
			
			.problem {
				display: flex;
				margin-bottom: 1.5rem;
				clear: both;

				img {
					width: 2rem;
					height: 2rem;
					border: 1px solid #000;
					border-radius: 50%;
					margin-top: 0.5rem;
				}


				.kailong {
					flex: 1;
					background-color: #fff;
					border-radius: 20px;
					padding: 1rem;
					position: relative;
					margin-left: 1rem;

					span {
						font-size: 1rem;
					}

				}

				.kailong:before {
					content: '';
					width: 0;
					height: 0;
					border-top: 10px solid transparent;
					border-bottom: 10px solid transparent;
					border-right: 10px solid #fff;
					position: absolute;
					left: -7px;
					top: 12px;
				}

			}

			.continue {
				width: 9rem;
				height: 3rem;
				line-height: 3rem;
				text-align: center;
				border: 1px solid #ffa85d;
				border-radius: 25px;
				box-sizing: border-box;
				margin: 0 auto;
				color: #ffa85d;
				clear: both;
			}

			.frame {
				margin-bottom: 1.5rem;

				.van-picker {
					width: 100%;
				}

				/deep/.answer {
					width: 100%;
					background-color: #fff;
					border-radius: 20px;
					box-sizing: border-box;
					padding: 1rem;
					margin-bottom: 1.5rem;

					.answer-top {
						display: -webkit-flex;
						justify-content: space-between;
						clear: both;
						margin-bottom: 1rem;
						span {
							font-weight: 500;
						}

						i {
							display: inline-block;
							max-width: 10rem;
							overflow: hidden;
							text-overflow:ellipsis;
							white-space: nowrap;
							padding: 0.2rem 0.8rem;
							color: #fff;
							background-color: #ffa85d;
							border-radius: 25px;
							font-style: normal;
						}

					}

					.van-datetime-picker {
						display: none;

						.van-picker__cancel {
							display: none;
						}

						.van-picker__confirm {
							position: absolute;
							right: -10px;
							top: 200%;
							z-index: 99;
							color: #ffa85d;
						}

						.van-picker-column__item--selected {
							color: #ffa85d;
						}

					}
					
					.cupation{
						.van-picker{
							.van-picker-column__item--selected {
								color: #ffa85d;
							}
							.van-picker__confirm{
								top:300%;
							}
						}
					}
					
					.whethers{
						display: none;
						clear: both;
						p{
							margin: 1rem 0;
							span{
								float:left;
								color:#ccc;
							}
							i{
								float:right;
								color: #ffa85d;
							}
						}
						div{
							display: none;
							clear: both;
							span{
								display: block;
								width: 8rem;
								margin: 1rem auto;
								text-align: center;
								padding: 0.5rem 1rem;
								border: 1px solid #ffa85d;
								box-sizing: border-box;
								border-radius: 25px;
							}
						}
					}

					.picker {
						display: none;

						.van-picker__cancel {
							display: none;
						}

						.van-picker__confirm {
							position: absolute;
							right: -10px;
							top: 200%;
							z-index: 99;
							color: #ffa85d;
							;
						}

						span {
							display: block;
							width: 8rem;
							margin: 1rem auto;
							text-align: center;
							padding: 0.5rem 1rem;
							border: 1px solid #ffa85d;
							box-sizing: border-box;
							border-radius: 25px;
						}
					}

					.van-checkbox-group {
						.van-cell {
							display: -webkit-flex;
							justify-content: space-between;
							padding: 0.5rem 1rem;
						}
						.click{
							width: 3rem;
							text-align: center;
							margin: 1rem auto;
							background-color: #ffa85d;
							padding: 0.2rem 0;
							border-radius: 25px;
							color: #fff;
							
						}

					}

					.selected {
						display: block !important;
					}
					
					.city{
						.van-hairline--top-bottom{
							display: none;
						}
						.van-picker-column__item--selected{
							color: #ffa85d;
						}
					}

				}

				.sex {
					padding: 1rem;

					.sexBtn {
						width: 100%;
						text-align: center;
						border: 1px solid #ffa85d;
						border-radius: 25px;
						padding: 0.5rem 0;
						box-sizing: border-box;
						color: #ffa85d;

						&:first-child {
							margin-bottom: 1rem;
						}
					}

				}

				.active {
					background-color: #ffa85d;
					color: #fff !important;
				}

				.result {
					float: right;
					display: none;
					margin-bottom: 1.5rem;

					.userKailong {
						float: right;
						background-color: orange;
						border-radius: 15px;
						padding: 0.5rem 1rem;
						position: relative;
						margin-right: 1rem;

						span {
							font-size: 1rem;
						}

						img {
							width: 1rem;
							height: 1rem;
							margin-left: 0.5rem;
							vertical-align: middle;
						}
					}

					.userKailong:before {
						content: '';
						width: 0;
						height: 0;
						border-top: 10px solid transparent;
						border-bottom: 10px solid transparent;
						border-left: 10px solid orange;
						position: absolute;
						right: -7px;
						top: 10px;
					}

					.userImg {
						float: right;
						width: 2rem;
						height: 2rem;
						border: 1px solid #000;
						border-radius: 50%;
					}
				}
			}

			.home {
				display: -webkit-flex;
				flex-wrap: wrap;
				justify-content: space-between;

				.relation {
					width: 6rem;
					text-align: center;
					padding: 0.5rem 0;
					border: 1px solid #ffa85d;
					border-radius: 25px;
					box-sizing: border-box;
					margin-bottom: 1rem;
					color: #ffa85d;
				}

			}

		}
	}
</style>
