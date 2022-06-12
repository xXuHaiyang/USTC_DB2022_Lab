<template>
   <section>
  <div>
	  <br>
	  <br>
    <div>
      <span>您是否在校</span>
      <el-radio v-model="atschool" label="1">是</el-radio>
      <el-radio v-model="atschool" label="0">否</el-radio>
    </div>
	<br>
    <div>
      <span>您是否有发烧等症状</span>
      <el-radio v-model="fever" label="1">是</el-radio>
      <el-radio v-model="fever" label="0">否</el-radio>
    </div>
	<br>
    <div>
      <span>您是否要报备</span>
      <el-radio v-model="check" label="1">是</el-radio>
      <el-radio v-model="check" label="0">否</el-radio>
    </div>
	<br>
  </div>
  <el-button
                    type="primary"
                    icon="el-icon-upload"
                    @click="update_fever()"
                    >上传</el-button
                  >
  </section>
</template>
<script>
//import idstu from '../Login'
//let idstudents=idstu.user.idstudents
export default {
  data() {
    return {
      user: {
        idstudents: localStorage.getItem("idstudents"),
      },
      atschool: "",
      fever: "",
      check: "",
    };
  },
  created() {this.update_fever();},
  methods: {
    update_fever() {
      let params = {
        idstudents: this.user.idstudents,
        atschool: this.atschool,
        fever: this.fever,
        check: this.check,
      }
      if (!this.atschool) {
        this.$message.error("请选择是否在校！");
        return;
      } else if (!this.fever) {
        this.$message.error("请选择是否有发烧等症状！");
        return;
      } else if (!this.check) {
        this.$message.error("请选择是否要报备！");
        return;
      } else {
        this.$http.post("http://localhost:3000/api/stu/addfever", params).then(res => {
          if (res.body.status == 200) {
            this.$message.success("提交成功！");
          } else {
            this.$message.error("tmd就是插进去了，后端有Bug");
          }
        });
      }
    },
  },
};
</script>

<style></style>
