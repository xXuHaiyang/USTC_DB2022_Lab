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
  }
};
</script>

<style></style>
