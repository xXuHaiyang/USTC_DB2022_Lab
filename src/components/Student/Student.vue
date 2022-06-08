<template>
  <div class="layout" clearfix>
    <el-container style="height: 100px; border: 1px solid #eee">
      <el-header>
        <img
          id="header-img"
          src="https://passport.ustc.edu.cn/images/ucas/logo.svg"
          height="100px"
        />
      </el-header>
    </el-container>
    <el-container style="height: 668px; border: 1px solid #eee">
      <el-aside width="250px">
        <el-menu :default-openeds="['1', '3']">
		<router-link to="/student/personalinfo" class="rl">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>个人信息</template
            >
          </el-submenu>
		</router-link>
		<router-link to="/student/dailycheck" class="rl">
          <el-submenu index="2">
            <template slot="title"
              ><i class="el-icon-check"></i>每日报备</template
            >
          </el-submenu>
		</router-link>
		<router-link to="/student/markacid" class="rl">
          <el-submenu index="3">
            <template slot="title"
              ><i class="el-icon-setting"></i>两码/核酸</template
            >
          </el-submenu>
		</router-link>
		<router-link to="/student/entry" class="rl">
		  <el-submenu index="4">
			<template slot="title"
			  ><i class="el-icon-check"></i>进出校申请</template
			>
		  </el-submenu>
		</router-link>
        </el-menu>
      </el-aside>
    <el-container>
        <el-main> 
			<router-view></router-view>
		</el-main>
      </el-container>
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
  name: "student",
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      tableData: Array(20).fill(item)
    };
  }
};
</script>
