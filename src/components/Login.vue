<template>
  <div class="login">
    <el-container>
      <!-- <el-header height="200px">
        <img src="../assets/USTClogo.jpg" alt="">
	  </el-header> -->
      <el-container>
        <el-aside width="500px">
			<!-- <img src="../assets/leftlogin.jpg" alt="..." width="400px" height = "600px" justify="center"> -->
		</el-aside>
        <el-main>
		  <el-header>
			  <img id="header-img" src="https://passport.ustc.edu.cn/images/ucas/logo.svg" height="125px">
		  </el-header>
          <div class="login-wrap">
            <el-row type="flex" justify="center">
              <el-form
                ref="loginForm"
                :model="user"
                :rules="rules"
                status-icon
                label-width="80px"
              >
                <h3>USTC健康平台</h3>
                <hr />
                <el-form-item prop="idstudents" label="用户名">
                  <el-input
                    v-model="user.idstudents"
                    placeholder="请输入用户名"
                    prefix-icon
                  ></el-input>
                </el-form-item>
                <el-form-item id="password" prop="password" label="密码">
                  <el-input
                    v-model="user.password"
                    show-password
                    placeholder="请输入密码"
                  ></el-input>
                </el-form-item>
                <router-link to="/">找回密码</router-link>
                <router-link to="/register">注册账号</router-link>
                <el-form-item>
                  <el-button
                    type="primary"
                    icon="el-icon-upload"
                    @click="doLogin()"
                    >登 录</el-button
                  >
                </el-form-item>
              </el-form>
            </el-row>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      user: {
        msg: 'Welcome to Your USTC-Acid-DB App',
        idstudents: "",
        password: "",
      },
    };
  },
  created() {this.doLogin();},
  methods: {
    doLogin() {
      let params = {
        idstudents: this.user.idstudents,
        password: this.user.password,
      }
      if (!this.user.idstudents) {
        this.$message.error("请输入用户名！");
        return;
      } else if (!this.user.password) {
        this.$message.error("请输入密码！");
        return;
      } else {
          //校验用户名和密码是否正确;
        //this.$router.push({ path: "/Student" });
        this.$message.success("准备去query");
        //var name = this.idstudents;
        //var passw = this.password;
            this.$http.post('http://localhost:3000/api/stu/query', { params: params }).then((response) => {
            //this.$message.success("登录成功！");
            console.log(response)
            console.log('--------')
            //this.$router.push({ path: "/Student" });
            if (response.data.status == 200) {
              this.$router.push({ path: "/Student" });
            } else {
              this.$message.error("您输入的用户名或密码错误！");
            }
          });
      }
    },
  },
};
</script>
<!-- http://localhost:3000/api/stu/query -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  width: 100%;
  height: 100%;
  background: url("../assets/Covid1.jpg");
  /* background-size: cover; */
  overflow: hidden;
}
.login-wrap {
  background-size: cover;
  width: 480px;
  height: 480px;
  margin: 100px auto;
  /* overflow: hidden; */
  padding-top: 0px;
  line-height: 40px;
}
#password {
  margin-bottom: 5px;
}
h3 {
  /* color: #ea300bb8; */
  font-size: 24px;
}
hr {
  background-color: #444;
  margin: 20px auto;
}
a {
  text-decoration: none;
  color: #aaa;
  font-size: 15px;
}
a:hover {
  color: coral;
}
.el-button {
  width: 80%;
  margin-left: -50px;
}
  .el-header, .el-footer {
    background-color: #ffffff;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    /* background-color: #ffffff;
    color: #333; */
    text-align: center;
    line-height: 400px;
  }
  
  .el-main {
    background-color: #ffffff;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
