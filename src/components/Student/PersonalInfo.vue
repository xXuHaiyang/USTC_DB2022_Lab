<template>
  <div class="layout" clearfix>
    <el-container>
      <el-main>
        <el-table :data="tableData" stripe style="width: 100%" class="t">
          <el-table-column prop="meiribaobei" label="每日报备">
          </el-table-column>
        </el-table>
        <el-table :data="tableData" stripe style="width: 100%" class="t">
          <el-table-column prop="jiankangma" label="健康码"> </el-table-column>
        </el-table>
        <el-table :data="tableData" stripe style="width: 100%" class="t">
          <el-table-column prop="xingchengma" label="行程码"> </el-table-column>
        </el-table>
        <el-table :data="tableData" stripe style="width: 100%" class="t">
          <el-table-column prop="hesuan" label="核酸"> </el-table-column>
        </el-table>
        <el-table :data="tableData" stripe style="width: 100%" class="t">
          <el-table-column prop="kuaxiaoqu" label="是否可跨校区">
          </el-table-column>
        </el-table>
        <el-table :data="tableData" stripe style="width: 100%" class="t">
          <el-table-column prop="jinchuxiao" label="是否可进出校">
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </div>
</template>

<style>
.el-header {
  /* background-color: #1874ed;
  color: rgb(37, 126, 243); */
  line-height: 80px;
}

.t {
	color:rgb(17, 143, 221);
}

.el-aside {
  /* background-color: #1874ed; */
  color: rgb(94, 197, 246);
}

.rl {
  text-decoration: none;
}
</style>

<script>
export default {
  name: "PersonalInfo",
  data() {
    return {
      tableData: [
        {
          meiribaobei: "已报备/未报备",
          jiankangma: "已上传/...",
          xingchengma: "已上传/...",
          hesuan: "已上传/...",
          kuaxiaoqu: "可跨校区/不可跨校区",
          jinchuxiao: "审核已通过/未通过/未申请/正在审核中"
        }
      ]
    };
  }
};
</script>
