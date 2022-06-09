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
          <el-descriptions-item label="每日报备状态"
            ><el-tag size="small"
              >今日已报备/今日未报备</el-tag
            ></el-descriptions-item
          >
          <el-descriptions-item label="健康码状态" :span="2"
            ><el-tag size="small"
              >今日已提交/今日未提交</el-tag
            ></el-descriptions-item
          >
          <el-descriptions-item label="行程码状态">
            <el-tag size="small">今日已提交/今日未提交</el-tag>
          </el-descriptions-item>
          <el-descriptions-item label="核酸状态"
            ><el-tag size="small"
              >本周已提交/本周未提交</el-tag
            ></el-descriptions-item
          >
          <el-descriptions-item label="是否可跨校区"
            ><el-tag size="small">是/否</el-tag></el-descriptions-item
          >
          <el-descriptions-item label="是否可进出校">
            <el-tag size="small">未申请/审核中/审核通过/审核未通过</el-tag>
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
