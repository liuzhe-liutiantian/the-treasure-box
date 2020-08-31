<template>
  <div>
    <!-- 面包屑 -->
    <v-bread></v-bread>
    <!-- 表格渲染 -->
    <v-list @edit="edit"></v-list>
    <!-- 弹出对话框 -->
    <v-add ref="vDialog" :isShow="sonStatus" @closeDialog="closeDialog"></v-add>
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

  methods: {
    //关闭弹框事件
    closeDialog(e) {
      this.sonStatus.dialogShow = e;
    },
    //编辑事件
    edit(e) {
      this.sonStatus.isAdd = e.isAdd;
      //打开弹框
      this.sonStatus.dialogShow = true;
      this.$refs.vDialog.update(e.uid);
    },
  },
  components: {
    vBread,
    vList,
    vAdd,
  },
};
</script>

<style  lang="stylus" scoped>
.el-button {
  margin-bottom: 15px;
}
</style>
