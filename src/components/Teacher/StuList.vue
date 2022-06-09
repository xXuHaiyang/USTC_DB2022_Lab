<template>
  <div>
    <el-button type="success" @click="AddNew = true">导入新学生</el-button>
    <el-dialog title="新增学生信息" :visible.sync="AddNew">
      <el-form :model="form">
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="id" :label-width="formLabelWidth">
          <el-input v-model="form.id" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth">
          <el-input v-model="form.sex" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="所属学院" :label-width="formLabelWidth">
          <el-input v-model="form.school" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="AddNew = false">取 消</el-button>
        <el-button type="primary" @click="AddNew = false">确 定</el-button>
      </div>
    </el-dialog>
	<!-- 此处我只实现了前端的数据传输(v-model)，放在data里，需要传到后端的table中去 -->

    <br />
    <br />
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="id" label="学号" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="sex" label="性别" width="180"> </el-table-column>
      <el-table-column prop="school" label="所属院系" width="180">
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
export default {
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    newperson() {
      this.$message({
        message: "新增成功",
        type: "success"
      });
    }
  },
  data() {
    return {
      tableData: [
        {
          id: "PB20000326",
          name: "徐海阳",
          sex: "男",
          school: "少年班学院"
        },
        {
          id: "PB20000326",
          name: "徐海阳",
          sex: "男",
          school: "少年班学院"
        },
        {
          id: "PB20000326",
          name: "徐海阳",
          sex: "男",
          school: "少年班学院"
        },
        {
          id: "PB20000326",
          name: "徐海阳",
          sex: "男",
          school: "少年班学院"
        },
        {
          id: "PB20000326",
          name: "徐海阳",
          sex: "男",
          school: "少年班学院"
        },
        {
          id: "PB20000326",
          name: "徐海阳",
          sex: "男",
          school: "少年班学院"
        },
        {
          id: "PB20000326",
          name: "徐海阳",
          sex: "男",
          school: "少年班学院"
        },
        {
          id: "PB20000326",
          name: "徐海阳",
          sex: "男",
          school: "少年班学院"
        },
        {
          id: "PB20000326",
          name: "徐海阳",
          sex: "男",
          school: "少年班学院"
        },
        {
          id: "PB20000326",
          name: "徐海阳",
          sex: "男",
          school: "少年班学院"
        },
        {
          id: "PB20000326",
          name: "徐海阳",
          sex: "男",
          school: "少年班学院"
        },
        {
          id: "PB20000326",
          name: "徐海阳",
          sex: "男",
          school: "少年班学院"
        },
        {
          id: "PB20000326",
          name: "徐海阳",
          sex: "男",
          school: "少年班学院"
        },
        {
          id: "PB20000326",
          name: "徐海阳",
          sex: "男",
          school: "少年班学院"
        },
        {
          id: "PB20000326",
          name: "徐海阳",
          sex: "男",
          school: "少年班学院"
        },
        {
          id: "PB20000326",
          name: "徐海阳",
          sex: "男",
          school: "少年班学院"
        },
        {
          id: "PB20000326",
          name: "徐海阳",
          sex: "男",
          school: "少年班学院"
        },
        {
          id: "PB20000326",
          name: "徐海阳",
          sex: "男",
          school: "少年班学院"
        },
        {
          id: "PB20000326",
          name: "徐海阳",
          sex: "男",
          school: "少年班学院"
        },
        {
          id: "PB20000326",
          name: "徐海阳",
          sex: "男",
          school: "少年班学院"
        }
      ],
      AddNew: false,
      form: {
        id: "",
        name: "",
        sex: "",
        school: ""
      },
      formLabelWidth: "120px"
    };
  }
};
</script>
