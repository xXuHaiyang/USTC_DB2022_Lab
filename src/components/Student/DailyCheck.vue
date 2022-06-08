<template>
  <div>
	  <br>
	  <br>
    <div>
      <span>您是否在校</span>
      <el-radio v-model="atschool" label="1">是</el-radio>
      <el-radio v-model="atschool" label="2">否</el-radio>
    </div>
	<br>
    <div>
      <span>您是否有发烧等症状</span>
      <el-radio v-model="fever" label="1">是</el-radio>
      <el-radio v-model="fever" label="2">否</el-radio>
    </div>
	<br>
    <div>
      <span>您是否要报备</span>
      <el-radio v-model="check" label="1">是</el-radio>
      <el-radio v-model="check" label="2">否</el-radio>
    </div>
	<br>
  </div>
</template>

<script>
export default {
  data() {
    return {
      atschool: "1",
      fever: "1",
      check: "1"
    };
  },
  created() {this.update_fever();},
  methods: {
    update_fever() {
      let params = {
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
        axios.post("/api/fever/check", params).then(res => {
          if (res.data.code == 200) {
            this.$message.success("提交成功！");
          } else {
            this.$message.error(res.data.msg);
          }
        });
      }
    },
  },
};
</script>

<style></style>
