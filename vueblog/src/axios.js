import axios from "axios";
import ElementUI from 'element-ui';

// axios.defaults.baseURL="https://local.sticki.cn/api/v1"
// axios.defaults.baseURL="https://api.scblogs.cn/v1"
// axios.defaults.baseURL = "https://api.scblogs.cn/v1"


// axios.defaults.baseURL = "http://172.16.40.214"

axios.defaults.baseURL = "http://api.scblogs.cn"
// 前置拦截
axios.interceptors.request.use(config => {
	return config
})

// 后置拦截
axios.interceptors.response.use(response => {
		let res = response.data;
		if (res.code === 200) {
			return response
		} else if (res.code === 401) {
			ElementUI.Message.error("未登录")
			return Promise.reject(response.data.message)
		} else {
			ElementUI.Message.error(response.data.message)
			return Promise.reject(response.data.message)
		}
	},
	error => {
		console.log("00");
		console.log(error)
		if (error.response.data) {
			error.message = error.response.data.message
		}
		if (error.response.status === 401) {
			ElementUI.Message.error("未登录")
		}
		ElementUI.Message.error(error.message)
		return Promise.reject(error)
	}
)
