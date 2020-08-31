<template>
  <div>
    <v-bread></v-bread>
    <div>
      <el-button @click="openDialog" type="primary" size="mini" plain>添加</el-button>
    </div>
    <!-- table 表格渲染 -->
    <v-list ref='elUser' @update='update'></v-list>
    <!-- 弹框的渲染 -->
    <v-add ref='vAdd' :isShow="sonStatus" @closeDialog="closeDialog"></v-add>
  </div>
</template>

<script>
import vBread from "../../components/bread";
import vList from "./list";
import vAdd from "./add";
export default {
  data() {
    return {
      sonStatus: {
        isAdd: true, //是否是添加
        dialogShow: false, //控制对话框的显示隐藏
      },
    };
  },
  components: {
    vBread,
    vList,
    vAdd,
  },
  methods: {
    //打开弹框
    openDialog() {
      this.sonStatus.isAdd = true;
      this.sonStatus.dialogShow = true;
      this.sonStatus.getCount = this.$refs.elUser.getCount
    },
    //关闭弹框
    //关闭弹框事件
    closeDialog(e) {
      this.sonStatus.dialogShow = e;
    },
    //update事件
    update(e){
        this.sonStatus.isAdd = e.isAdd
        this.sonStatus.dialogShow = true
        this.$refs.vAdd.update(e.id,e.changePage)
    }
  },
};
</script>

<style  lang="" scoped>
.el-button {
  margin-bottom: 15px;
}
</style>
