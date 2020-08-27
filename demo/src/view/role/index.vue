<template>
  <div>
    <!-- 面包屑 -->
    <v-bread></v-bread>
    <!-- 添加按钮 -->
    <div class="box">
      <el-button @click="openDialog" type="primary" size="mini" plain>添加</el-button>
    </div>
    <!-- 列表 -->
    <n-list @update='update'></n-list>
    <!-- 弹出对话框 -->
    <v-add ref='vAdd' :isShow="sonStatus" @closeDialog="closeDialog"></v-add>
  </div>
</template>

<script>
import vBread from "../../components/bread";
import nList from "./list";
import vAdd from "./add";
export default {
  data() {
    return {
      sonStatus: {
        isAdd: true,
        dialogShow: false,
      },
    };
  },
  methods: {
    //封装一个打开弹框事件
    openDialog() {
      this.sonStatus.isAdd = true;
      this.sonStatus.dialogShow = true;
    },
     //关闭弹框事件 
    closeDialog(e) {
      this.sonStatus.dialogShow = e;
    },
    //update事件
    update(e){
        this.sonStatus.isAdd = e.isAdd
        this.sonStatus.dialogShow = true
        this.$refs.vAdd.update(e.id)
    }
  },
  components: {
    vBread,
    nList,
    vAdd,
  },
};
</script>

<style lang="" scoped>
.box {
  margin-bottom: 10px;
}
</style>
