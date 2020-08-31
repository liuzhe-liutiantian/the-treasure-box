<template>
  <div>
    <!-- 面包屑 -->
    <v-Bread></v-Bread>
    <!-- 添加按钮  -->
    <div>
      <el-button @click="openDialog" type="primary" size="mini" plain>添加</el-button>
    </div>
    <!-- 表单 -->
    <v-list @edit='edit' ></v-list>
    <!-- 弹出对话框 -->
    <v-add ref='vDialog' :isShow='sonStatus' @closeDialog="closeDialog"></v-add>
  </div>
</template>

<script>
import vList from "./list";
import vAdd from './add'
import { mapGetters, mapActions } from "vuex";

import vBread from "../../components/bread";
export default {
  data() {
    return {
      sonStatus:{
        isAdd:true,
        dialogShow:false
      }
    };
  },

  methods: {
    //封装一个打开弹框事件
    openDialog() {
      this.sonStatus.isAdd = true;
      this.sonStatus.dialogShow = true;

    },
    //关闭弹框事件 
    closeDialog(e){
      this.sonStatus.dialogShow=e;
    },
    //编辑事件
    edit(e) {
      this.sonStatus.isAdd=e.isAdd
      this.sonStatus.dialogShow=true
      this.$refs.vDialog.update(e.id)
    },
    
    //封装获取菜单列表

    get_menu_list() {
      getMenuList().then((res) => {
        if (res.code === 200) {
          this.tableData = res.list;
        }
      });
    },
    //关闭弹框事件
    cancel() {
      this.dialogShow = false;
      this.menuForm = {
        title: "",
        pid: 0,
        type: 1, //类型1目录2菜单
        url: "",
        status: 1,
        icon: "",
      };
    },
    
    
  },
  components: {
    vBread,
    vList,
    vAdd
  },
};
</script>

<style lang="stylus" scoped>
.el-table {
  margin-top: 10px;
}
</style>
