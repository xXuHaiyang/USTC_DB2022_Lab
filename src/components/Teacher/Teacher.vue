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
      <br />
      <el-header style="text-align: right; font-size: 18px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 18px"></i>
        </el-dropdown>
      </el-header>
    </el-container>
    <br />
    <br />
    <el-container style="height: 668px; border: 1px solid #eee">
      <el-aside width="250px">
        <el-menu :default-openeds="['1', '3']">
          <router-link to="/teacher/stulist" class="rl">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-message"></i>学生名单导入导出</template
              >
            </el-submenu>
          </router-link>
          <router-link to="/teacher/markacidstatus" class="rl">
            <el-submenu index="2">
              <template slot="title"
                ><i class="el-icon-check"></i>学生两码及核酸状态</template
              >
            </el-submenu>
          </router-link>
          <router-link to="/teacher/entrychecklist" class="rl">
            <el-submenu index="3">
              <template slot="title"
                ><i class="el-icon-setting"></i>出入校申请审批</template
              >
            </el-submenu>
          </router-link>
          <!-- <router-link to="/student/entry" class="rl">
		  <el-submenu index="4">
			<template slot="title"
			  ><i class="el-icon-check"></i>进出校申请</template
			>
		  </el-submenu>
		</router-link> -->
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
    return {
      name: "student",
      tableData: [
        {
          idstudents: ""
        }
      ]
    };
  },
  created() {
    this.getIDstu();
  },
  methods: {
    getIDstu() {
      this.$message.success(localStorage.getItem("idteachers"));
    }
  }
};
</script>
