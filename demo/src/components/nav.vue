<template>
  <div>
    <el-row class="tac">
      <el-col :span="24">
        <el-menu
          :default-active="defaultActive"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          unique-opened
          router
        >
          <el-menu-item index="/home">
            <i class="el-icon-s-grid"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu :index="item.id.toString()" v-for="item in navList" :key="item.id">
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{item.title}}</span>
            </template>
            <el-menu-item
              v-for="itemList in item.children"
              :key="itemList.id"
              :index="itemList.url"
            >{{itemList.title}}</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { getMenuList } from "../util/axios";
export default {
  data() {
    return {
      defaultActive: "/home",
      navList: [],
    };
  },
  computed: {
    ...mapGetters(["get_MenuList"]),
  },
  mounted() {
    this.defaultActive = this.$route.path;
    //因为菜单和权限挂钩还有管理员挂钩。管理员的某一个用户在登录的时候，根据权限不同获取不同
    this.navList = sessionStorage.getItem("userInfo")
      ? JSON.parse(sessionStorage.getItem("userInfo")).menus
      : [];
    //组件一加载就调取菜单列表接口
    this.getMenuListAction();
    // getMenuList({
    //   istree:1
    // })
    // .then(res=>{
    //   console.log(res,'navlist')
    //   if(res.code===200){
    //     this.navList = res.list
    //   }
    // })
  },
  methods: {
    ...mapActions(["getMenuListAction"]),
  },
};
</script>


<style lang="stylus" scoped>
@import '../stylus/index.styl';

.el-menu {
  min-height: 500px;

  .el-col {
    height: 600px;
  }
}
</style>
