import axios from 'axios';

let http = axios.create({
    baseURL:'/api'
})
//拦截器请求拦截
http.interceptors.request.use((req)=>{
//获取本地存储中的token
let authorization = ''
authorization=sessionStorage.getItem('userInfo')? JSON.parse(sessionStorage.getItem('userInfo')).token:''
req.headers.authorization=authorization
return req
})
//拦截器响应拦截
http.interceptors.response.use((res)=>{
return res.data
})
export default http
