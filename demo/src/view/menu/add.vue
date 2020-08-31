<template>
  <div>
    <el-dialog
      :before-close="reset"
      :title="isShow.isAdd?'添加菜单':'编辑菜单'"
      :visible.sync="isShow.dialogShow"
      center
    >
      <el-form :model="menuForm" :rules="rules" ref="ruleForm">
        <el-form-item label="菜单名称" :label-width="formLabelWidth" prop="title">
          <el-input v-model="menuForm.title"></el-input>
        </el-form-item>
        <el-form-item label="上级菜单" :label-width="formLabelWidth" prop="pid">
          <el-select v-model="menuForm.pid" placeholder="请选择">
            <el-option disabled value>---请选择---</el-option>
            <el-option label="顶级菜单" :value="0">顶级菜单</el-option>
            <el-option
              v-for="item in get_MenuList"
              :key="item.id"
              :label="item.title"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="菜单类型" :label-width="formLabelWidth">
          <el-radio v-model="menuForm.type" :label="1">目录</el-radio>
          <el-radio v-model="menuForm.type" :label="2">菜单</el-radio>
        </el-form-item>
        <el-form-item
          v-if="menuForm.type==1"
          prop="icon"
          label="菜单图标"
          :label-width="formLabelWidth"
        >
          <el-input v-model="menuForm.icon"></el-input>
        </el-form-item>
        <el-form-item v-if="menuForm.type==2" label="菜单地址" :label-width="formLabelWidth">
          <el-input v-model="menuForm.url"></el-input>
        </el-form-item>
        <el-form-item label="状态" :label-width="formLabelWidth">
          <el-switch
            v-model="menuForm.status"
            active-color="#13ce66"
            inactive-color="#ff4949"
            :active-value="1"
            :inactive-value="2"
          ></el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="reset">取 消</el-button>
        <el-button @click="add('ruleForm')" type="primary">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { getMenuAdd, getMenuInfo, getMenuEdit } from "../../util/axios";
export default {
  props: ["isShow"],
  data() {
    return {
      editId: 0,
      formLabelWidth: "120px", //lable宽度
      menuForm: {
        title: "",
        pid: 0,
        icon: "",
        type: 1, //类型1目录2菜单
        url: "",
        status: 1,
      },
      rules: {
        title: [
          //加不加星标
          { required: true, message: "请输入菜单名称", trigger: "blur" },
          //验证字符数
          {
            min: 2,
            max: 9,
            message: "长度在 2  到 9  个字符",
            trigger: "blur",
          },
        ],
        pid: [{ required: true, message: "请选择上级菜单", trigger: "change" }],
      },
    };
  },
  computed: {
    ...mapGetters(["get_MenuList"])
  },
  methods: {
    //编辑事件
    update(id) {
      //赋值给调取编辑接口
      this.editId = id;
      //更改isadd状态
      this.isAdd = false;
      getMenuInfo({ id }).then((res) => {
        if (res.code === 200) {
          this.menuForm = res.list;
        }
      });
    },
    //调取行动
    ...mapActions(["getMenuListAction"]),
    //封装一个清空事件
    reset() {
      this.menuForm = {
        title: "",
        pid: 0,
        type: 1, //类型1目录2菜单
        url: "",
        status: 1,
        icon: "",
      };
      this.dialogShow = false;
      //子组件关闭弹框要去修改父组件dialogShow
      this.$emit("closeDialog", false);
      //移除表单验证信息
      this.$refs["ruleForm"].clearValidate(this.rules);
    },
    //添加表单事件
    add(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // console.log(this.menuForm)

          // let data = JSON.parse(JSON.stringify(this.menuForm));
          // data.status=data.status?1:2;
          //是否调取新增事件还是编辑事件
          if (this.isShow.isAdd) {
            getMenuAdd(this.menuForm).then((res) => {
              if (res.code === 200) {
                this.$message.success(res.msg);
                //关闭弹框并清空
                this.reset();
                this.getMenuListAction();
              }
            });
          } else {
            //id编号，必填项
            this.menuForm.id = this.editId;
            //调取接口
            getMenuEdit(this.menuForm).then((res) => {
              if (res.code === 200) {
                this.$message.success(res.msg);
                //关闭弹框并清空
                this.reset();
                this.getMenuListAction();
              }
            });
          }
          //调取添加接口
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },  
  },
};
</script>

<style lang="" scoped>
</style>
