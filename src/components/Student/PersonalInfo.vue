<template>
  <div class="layout" clearfix>
    <el-container>
      <el-main>
        <el-descriptions
          title="用户信息"
          direction="vertical"
          :column="1"
          border
          justify="center"
        >
          <el-descriptions-item label="用户名"
            >PB020000326</el-descriptions-item
          >
          <el-descriptions-item label="今日报备"
            >今日未打卡报备</el-descriptions-item
          >
          <el-descriptions-item label="健康码" :span="2"
            >今日未提交</el-descriptions-item
          >
          <el-descriptions-item label="行程码">
            <el-tag size="small">今日未提交</el-tag>
          </el-descriptions-item>
          <el-descriptions-item label="核酸报告"
            >本周未提交</el-descriptions-item
          >
          <el-descriptions-item label="进出校报备">
            <el-tag size="small">无</el-tag>
          </el-descriptions-item>
        </el-descriptions>
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
      msg: "Hello Vue!"
    };
  }
};
</script>
