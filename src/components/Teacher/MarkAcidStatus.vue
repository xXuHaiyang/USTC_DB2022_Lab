<template>
  <div>
    <el-button type="success" @click="uploadtoDatatable()"
      >查看所有学生状态</el-button
    >
    <br />
    <br />
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="idstudents" label="学号" width="150">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="150"> </el-table-column>
      <el-table-column prop="gender" label="性别" width="150">
      </el-table-column>
      <el-table-column prop="college" label="所属院系" width="150">
      </el-table-column>
	  <el-table-column prop="health" label="健康码" width="150">
      </el-table-column>
	  <el-table-column prop="way" label="行程码" width="150">
      </el-table-column>
	  <el-table-column prop="acid" label="核酸状态" width="150">
      </el-table-column>
    </el-table>
  </div>
</template>

// 注意我们这里的逻辑是：
// student 3 tables:
// 1. id pw school
// 2. id -> 健康码 行程码
// 3. 每日报备 健康码 行程码 -> 自动显示可跨校区，在学生界面
// 4. 满足2 + 进出校申请 -> 老师审批

<script>
import axios from "axios";
export default {
  data() {
    return {
      tableData: [
        {
          idstudents: "",
          name: "",
          gender: "",
          college: "",
		  health: "",
		  way:"",
		  acid:""
        }
      ],
      AddNew: false,
      form: {
        idstudents: "",
        name: "",
        gender: "",
        college: ""
      },
      formLabelWidth: "120px"
    };
  },
  created() {
    this.uploadtoDatatable();
    this.deleteRow();
    this.newperson();
  },
  methods: {
    uploadtoDatatable() {
      let params = {};
      this.$http
        .post("http://localhost:3000/api/stu/getStu", { params: params })
        .then(res => {
          console.log(res);
          this.tableData = res.data;
        });
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    newperson() {
      //rows.add(index,1);
      let params = {
        idstudents: this.form.idstudents,
        name: this.form.name,
        gender: this.form.gender,
        college: this.form.college
      };
      this.$http
        .post("http://localhost:3000/api/stu/addStu", { params: params })
        .then(response => {
          //this.$message.success("登录成功！");
          console.log(response);
          console.log("--------");
          //this.$router.push({ path: "/Student" });
          if (response.data.code == 200) {
            this.$message.success("新增成功");
          } else {
            this.$message.error("有错误，重启后端，但是已经插入了");
          }
        });
    }
  }
};
</script>
