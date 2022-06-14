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
      <el-table-column prop="begin_place" label="开始地点" width="150"> </el-table-column>
      <el-table-column prop="end_place" label="结束地点" width="150">
      </el-table-column>
      <el-table-column prop="description" label="描述" width="150">
      </el-table-column>
	  <el-table-column prop="reason" label="原因" width="150">
      </el-table-column>
	  <el-table-column prop="checked" label="是否审批通过" width="150">
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
          begin_place: "",
          end_place: "",
          description: "",
		      reason:"",
		      checked:""
        }
      ],
      AddNew: false,
      form: {
        idstudents: "",
        begin_place: "",
        end_place: "",
        description: ""
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
        .post("http://localhost:3000/api/stu/getTable2", { params: params })
        .then(res => {
          console.log(res);
          this.tableData = res.body.data;
        });
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    newperson() {
      //rows.add(index,1);
      let params = {
        idstudents: this.form.idstudents,
        begin_place: this.form.begin_place,
        end_place: this.form.end_place,
        description: this.form.description
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
