<template>
  <div>
    <el-button type="success" @click="AddNew = true">导入新学生</el-button>
    <el-dialog title="新增学生信息" :visible.sync="AddNew">
      <el-form :model="form">
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="学号" :label-width="formLabelWidth">
          <el-input v-model="form.idstudents" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth">
          <el-input v-model="form.gender" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="所属学院" :label-width="formLabelWidth">
          <el-input v-model="form.college" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="AddNew = false">取 消</el-button>
        <el-button type="primary" @click="newperson();uploadtoDatatable(); AddNew = false">确 定</el-button>
      </div>
    </el-dialog>
	<!-- 此处我只实现了前端的数据传输(v-model)，放在data里，需要传到后端的table中去 -->
<el-button type="success" @click="uploadtoDatatable()">查看所有学生</el-button>
    <br />
    <br />
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="idstudents" label="学号" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="gender" label="性别" width="180"> </el-table-column>
      <el-table-column prop="college" label="所属院系" width="180">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="text"
            size="small"
          >
            删除此人
          </el-button>
          <!-- 这里我只写了前端的删除，也就是删除，在method中需要添加在后端的删除操作 -->
        </template>
      </el-table-column>
      <!-- 同时，表中的数据我在data中是写死的，实际上需要后端传一下数据 -->
    </el-table>
  </div>
</template>

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
          college: ""
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
    uploadtoDatatable(){
      //let params = {};
      this.$http.post("http://localhost:3000/api/stu/getStu").then(res => {
        console.log(res);
        console.log(res.body.data);
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
        name: this.form.name,
        gender: this.form.gender,
        college: this.form.college,
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
},
}
</script>
