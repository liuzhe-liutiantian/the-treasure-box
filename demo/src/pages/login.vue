<template>
  <div class="box">
    <!-- 登录 -->
    <el-form :model="loginForm" :rules="rules" ref="ruleForm" label-width="80px" class="login_from">
      <el-form-item label="账号" prop="username">
        <el-input v-model="loginForm.username" clearable></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="loginForm.password" clearable show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login('ruleForm')" >登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getLogin } from "../util/axios";
export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入账号", trigger: "blur" },
          {
            min: 2,
            max: 15,
            message: "长度在 2 到 15 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 18,
            message: "长度在 6 到 18 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    login(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //调取登录接口
          getLogin(this.loginForm).then((res) => {
            if (res.code === 200) {
              //把登录信息存储本地存储中
              sessionStorage.setItem("userInfo", JSON.stringify(res.list));
              this.$router.push("/index");
            } else {
              this.$message.error(res.msg);
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '../stylus/index.styl';

.box {
  width: 100vw;
  height: 100vh;
  background-color: $oneColor;

  .login_from {
    position: absolute;
    background: $twoColor;
    left: 43%;
    top: 50%;
    margin: -150px 0 0 -150px;
    padding: 40px 10px;
    border-radius: 20px;
    width: 430px;
  }

  .el-button {
    position: absolute;
    left: 30%;
  }

  .el-input {
    width: 90%;
  }
}
</style>
