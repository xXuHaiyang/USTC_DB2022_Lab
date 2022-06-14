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
      <el-table-column prop="jiankangma" label="健康码" width="150">
      </el-table-column>
      <el-table-column prop="xingchengma" label="行程码" width="150">
      </el-table-column>
      <el-table-column prop="hesuan" label="核酸状态" width="150">
      </el-table-column>
    </el-table>
  </div>
</template>

// 注意我们这里的逻辑是： // student 3 tables: // 1. id pw school // 2. id ->
健康码 行程码 // 3. 每日报备 健康码 行程码 -> 自动显示可跨校区，在学生界面 // 4.
满足2 + 进出校申请 -> 老师审批

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
          jiankangma: "",
          xingchengma: "",
          hesuan: "",
        },
      ],
      AddNew: false,
      form: {
        idstudents: "",
        name: "",
        gender: "",
        college: "",
        xingchengma: "",
        jiankangma: "",
        hesuan: "",
      },
      formLabelWidth: "120px",
    };
  },
  created() {
    this.uploadtoDatatable();
    this.deleteRow();
    //this.newperson();
  },
  methods: {
    uploadtoDatatable() {
      let params = {};
      this.$http
        .post("http://localhost:3000/api/stu/checking", { params: params })
        .then((res) => {
          console.log(res);
          console.log(res.body.data);
          this.tableData = res.body.data;
        });
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
  },
};
</script>
