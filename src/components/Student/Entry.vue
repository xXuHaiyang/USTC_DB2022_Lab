<template>
  <div class="layout" clearfix>
    <el-container>
      <el-main>
        关于做好校园常态化疫情防控的通知（2022年5号）
        <br />
        一、东校区增加开放太湖路东南门、黄山路北门；西校区增加开放太湖路南门；中校区增加开放黄山路北门；南校区增加开放水阳江路西南门、高新校区增加开放复兴路南门。
        <br />
        二、在校师生须严格遵守“可出校门、不离合肥”原则，继续做好每日健康信息上报，教职员工通过健康打卡平台核验大数据行程卡、安康码以及核酸检测结果无异常后方可入校，学生通过健康打卡平台报备后当日可出入校门。确需离开合肥的师生，仍须提前申请并严格履行审批手续，谁审批、谁负责。在校学生由本人提出申请，报所在单位主要负责人、校党委学生工作部审核；教职工由本人提出申请，报所在单位主要负责人审核。
        <br />
        三、自合肥市外返校的师生，须提前申请并严格履行审批手续，经批准后方可返回，并通过合肥市12345热线或者返回校区所属社区进行报备
        <br />
        四、各单位近期仍须严格控制举办聚集性活动，严格控制校外人员来访，非必要不接待。确需举办或接待的，须经所在单位主要负责人审批后报学校疫情防控领导小组备案。
        <br />
        五、解封不解防，防疫不放松。全体师生员工仍须严格落实“四方责任”，密切关注自身健康状态，持续做好个人防护，按要求配合落实每周核酸检测和学校常态化疫情防控各项措施。
        <br />
        六、各单位必须持续绷紧疫情防控这根弦，坚决克服麻痹思想、厌战情绪、侥幸心理、松劲心态，持续完善疫情防控应急预案，提升应急处置能力
        <br />
        七、充分发挥各级党组织的战斗堡垒作用和党员干部的先锋模范作用，按照学校有关部署，做好疫情防控措施的传达、解释和落实工作
        <br />
        <br />
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="当前校区" prop="region">
            <el-select v-model="ruleForm.fromregion" placeholder="">
              <el-option label="中" value="zhong"></el-option>
              <el-option label="东" value="dong"></el-option>
              <el-option label="西" value="xi"></el-option>
              <el-option label="高新" value="gaoxin"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="前往校区" prop="region">
            <el-select v-model="ruleForm.toregion" placeholder="">
              <el-option label="中" value="zhong"></el-option>
              <el-option label="东" value="dong"></el-option>
              <el-option label="西" value="xi"></el-option>
              <el-option label="高新" value="gaoxin"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="出校理由" prop="type">
            <el-checkbox-group v-model="ruleForm.type">
              <el-checkbox label="上课" name="type"></el-checkbox>
              <el-checkbox label="自习" name="type"></el-checkbox>
              <el-checkbox label="生活" name="type"></el-checkbox>
              <el-checkbox label="其他" name="type"></el-checkbox>
              <el-input
                type="textarea"
                v-model="ruleForm.desc"
                placeholder="其他："
              ></el-input>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >申请出入校</el-button
            >
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
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
name: "entry";
export default {
  data() {
    return {
      ruleForm: {
        name: localStorage.getItem("idstudents"),
        fromregion: "", //出校校区
        toregion: "", // 前往校区
        type: [], //出校理由
        desc: "" // 其他的理由
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
          let params = {
            idstudents: this.ruleForm.name,
            begin_place: this.ruleForm.fromregion,
            end_place: this.ruleForm.toregion,
            reason: this.ruleForm.type,
            description: this.ruleForm.desc
          };
          this.$http
            .post("http://localhost:3000/api/stu/Entry", { params: params })
            .then(response => {
              //this.$message.success("登录成功！");
              console.log(response);
              console.log("--------");
              //this.$router.push({ path: "/Student" });
              if (response.status == 200) {
                this.$message.success("申请成功！");
              } else {
                this.$message.error("申请失败！");
              }
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
