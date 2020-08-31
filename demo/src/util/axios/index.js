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
export function getUserCount() {
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
export function getLogin(data) {
    return http.post('/userlogin', data)
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



/* ----商品规格接口---- */
//添加商品规格
export function getSpecsAdd(data) {
    return http.post('/specsadd', data)
}
//商品规格总数
export function getSpecsCount() {
    return http.get('/specscount')
}
//商品规格列表接口
export function getSpecsList(params) {
    return http.get('/specslist', { params })
}
//商品规格获取一条
export function getSpecsInfo(params) {
    return http.get('/specsinfo', { params })
}
//编辑商品规格
export function getSpecsEdit(data) {
    return http.post('/specsedit', data)
}
//删除商品规格
export function getSpecsDel(data) {
    return http.post('/specsdelete', data)
}


/* ----商品管理接口---- */
//添加商品
export function getGoodsAdd(data) {
    return http.post('/goodsadd', data)
}
//商品总数
export function getGoodsCount() {
    return http.get('/goodscount')
}
//商品列表接口
export function getGoodsList(params) {
    return http.get('/goodslist', { params })
}
//商品获取一条
export function getGoodsInfo(params) {
    return http.get('/goodsinfo', { params })
}
//编辑商品
export function getGoodsEdit(data) {
    return http.post('/goodsedit', data)
}
//删除商品
export function getGoodsDel(data) {
    return http.post('/goodsdelete', data)
}

/* ----会员接口----- */
//会员列表接口
export function getMemberList() {
    return http.get('/memberlist')
}
//会员获取（一条）
export function getMemberInfo(params) {
    return http.get('/memberinfo', {
        params
    })
}
//会员编辑事件
export function getMemberEdit(data) {
    return http.post('/memberedit', data)
}


/* ----轮播图接口----- */
//添加轮播图
export function getBannerAdd(data) {
    return http.post('/banneradd', data)
}
//轮播图列表接口
export function getBannerList() {
    return http.get('/bannerlist')
}
//轮播图获取（一条）
export function getBannerInfo(params) {
    return http.get('/bannerinfo', {
        params
    })
}
//轮播图编辑事件
export function getBannerEdit(data) {
    return http.post('/banneredit', data)
}
//轮播图删除事件
export function getBannerDel(data) {
    return http.post('/bannerdelete', data)
}

/* ----限时秒杀接口----- */
//添加限时秒杀
export function getSeckAdd(data){
    return http.post('/seckadd',data)
}
//限时秒杀列表接口
export function getSeckList(){
    return http.get('/secklist')
}
//限时秒杀获取（一条）
export function getSeckInfo(params){
    return http.get('/seckinfo',{
        params
    })
}
//限时秒杀编辑事件
export function getSeckEdit(data){
    return http.post('/seckedit',data)
}
//限时秒杀删除事件
export function getSeckDel(data){
    return http.post('/seckdelete',data)
}
