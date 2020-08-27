//封装接口//
// 引入封装好的axios文件
import http from './axios'
/* ----菜单接口------ */
// 添加菜单
export function getMenuAdd(data) {
    return http.post('/menuadd', data)
}
//菜单列表接口
export function getMenuList(params) {
    return http.get('/menulist', { params })
}
//菜单获取一条
export function getMenuInfo(params) {
    return http.get('/menuinfo', {
        params
    })
}
//编辑菜单
export function getMenuEdit(data) {
    return http.post('/menuedit', data)
}
//删除菜单
export function getMenuDel(data) {
    return http.post('/menudelete', data)
}

        /* ---角色接口---- */
//添加角色
export function getRoleAdd(data) {
    return http.post('/roleadd', data)
}
//角色列表接口
export function getRoleList(params) {
    return http.get('/rolelist', { params })
}
//角色获取一条
export function getRoleInfo(params) {
    return http.get('/roleinfo', { params })
}
//编辑角色
export function getRoleEdit(data) {
    return http.post('/roleedit', data)
}
//删除角色
export function getRoleDel(data) {
    return http.post('/roledelete', data)
}


        /* ---管理员接口---- */
//添加管理员
export function getUserAdd(data) {
    return http.post('/useradd', data)
}
//管理员总数
export function getUserCount(){
    return http.get('/usercount')
}
//管理员列表接口
export function getUserList(params) {
    return http.get('/userlist', { params })
}
//管理员获取一条
export function getUserInfo(params) {
    return http.get('/userinfo', { params })
}
//编辑管理员
export function getUserEdit(data) {
    return http.post('/useredit', data)
}
//删除管理员
export function getUserDel(data) {
    return http.post('/userdelete', data)
}
//管理员登录
export function getLogin(data){
    return http.post('/userlogin',data)
}


 
        /* ---商品分类接口---- */
//添加商品分类
export function getCateAdd(data) {
    return http.post('/cateadd', data)
}
//商品分类列表接口
export function getCateList(params) {
    return http.get('/catelist', { params })
}
//商品分类获取一条
export function getCateInfo(params) {
    return http.get('/cateinfo', { params })
}
//编辑商品分类
export function getCateEdit(data) {
    return http.post('/cateedit', data)
}
//删除商品分类
export function getCateDel(data) {
    return http.post('/catedelete', data)
}


