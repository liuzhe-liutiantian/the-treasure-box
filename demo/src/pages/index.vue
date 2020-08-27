<template>
  <div>
    <!-- 主页 -->
    <el-container>
      <el-header>XXXX后端管理项目</el-header>
      <el-container>
        <el-aside width="200px">
          <v-nav></v-nav>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import vNav from "../components/nav";
export default {
  data() {
    return {};
  },
  components: {
    vNav,
  },
};
</script>

<style lang="stylus" scoped>
@import '../stylus/index.styl';

.el-header {
  background: red;
}
</style>
