import axios from 'axios'; // 引入axios
import QS from 'qs'; // 引入qs模块，用来序列化post类型的数据，后面会提到

axios.defaults.withCreadentials = true

// 环境的切换
if (process.env.NODE_ENV == 'development') {    //开发
    axios.defaults.baseURL = 'http://192.168.199.43:8000';} 
else if (process.env.NODE_ENV == 'debug') {    //调试
    axios.defaults.baseURL = 'http://192.168.199.43:8000';
} 
else if (process.env.NODE_ENV == 'production') {    //线上
    axios.defaults.baseURL = 'http://192.168.199.43:8000';
}

axios.defaults.timeout = 10000;

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
	return new Promise((resolve, reject) => {
		axios.get(url, {
			params: params
		}).then(res => {
			resolve(res.data);
		}).catch(err => {
			reject(err.data)
		})
	});
}

/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post(url, data) {
	return new Promise((resolve, reject) => {
		axios.post(url, data)
			.then(res => {
				resolve(res.data);
			})
			.catch(err => {
				reject(err.data)
			})
	});
}
