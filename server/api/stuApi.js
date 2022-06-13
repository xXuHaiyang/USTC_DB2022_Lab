//api路由
//userApi.js —— 测试用 API 示例 http://mvnrepository.com/artifact/commons-lang/commons-lang -->
var models = require('../db')
var express = require('express')
var router = express.Router()
var mysql = require('mysql')
var $sql = require('../sqlMap')

// 连接数据库
var conn = mysql.createConnection(models.mysql)

conn.connect()
var jsonWrite = function (res, ret) {
  if (typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    })
  } else {
    res.json(ret)
  }
}
// 增加用户接口
router.post('/addStu', (req, res) => {
    var sql = $sql.stu.add;
    var params = req.body;
    //console.log(params);
    var obj=JSON.stringify(params);
    console.log(obj);
    let idstudents=obj.substring(obj.indexOf("ts\":")+5,obj.indexOf(",")-1);
    let name=obj.substring(obj.indexOf("name\":")+7,obj.indexOf("gen")-3);
    let sex=obj.substring(obj.indexOf("der\":")+6,obj.indexOf("college")-4);
    let school=obj.substring(obj.indexOf("ge\":")+5,obj.indexOf("\"}"));
    //let password=obj.substring(obj.indexOf("d\":\"")+4,obj.indexOf("\"}"));
    console.log(name,sex,school);
    conn.query(sql, [idstudents, name, sex, school], function (err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
            res.send({
              status: 200,
              message: "upload success"
            })
        }
    })
});
router.post('/jiankangma', (req, res) => {
    var sql = $sql.stu.jiankangma;
    var params = req.body;
    //console.log(params);
    var obj=JSON.stringify(params);
    console.log(obj);
    let idstudents=obj.substring(obj.indexOf("ts\":")+7,obj.indexOf("}}")-3);
    conn.query(sql,[idstudents], function (err, result) {
        if (err) {
            console.log(err);
            return res.send({
              status: 500,
              message: "upload failed"
              })
              }
        if (result) {
            jsonWrite(res, result);
            res.send({
              status: 200,
              message: "upload success"
              })
              }
            })
});
router.post('/xingchengma', (req, res) => {
  var sql = $sql.stu.xingchengma;
  var params = req.body;
  //console.log(params);
  var obj=JSON.stringify(params);
  console.log(obj);
  let idstudents=obj.substring(obj.indexOf("ts\":")+7,obj.indexOf("}}")-3);
  conn.query(sql,[idstudents], function (err, result) {
      if (err) {
          console.log(err);
          return res.send({
            status: 500,
            message: "upload failed"
            })
            }
      if (result) {
          jsonWrite(res, result);
          res.send({
            status: 200,
            message: "upload success"
            })
            }
          })
});
router.post('/hesuan', (req, res) => {
  var sql = $sql.stu.hesuan;
  var params = req.body;
  //console.log(params);
  var obj=JSON.stringify(params);
  console.log(obj);
  let idstudents=obj.substring(obj.indexOf("ts\":")+7,obj.indexOf("}}")-3);
  conn.query(sql,[idstudents], function (err, result) {
      if (err) {
          console.log(err);
          return res.send({
            status: 500,
            message: "upload failed"
            })
            }
      if (result) {
          jsonWrite(res, result);
          res.send({
            status: 200,
            message: "upload success"
            })
            }
          })
});
router.post('/query',(req,res)=>{
  var sql = $sql.stu.query;
  var params = req.body;
  //console.log(params);
  var obj=JSON.stringify(params);
  //console.log(obj);
  let idstudents=obj.substring(obj.indexOf("ts\":")+5,obj.indexOf(",")-1);
  let password=obj.substring(obj.indexOf("d\":\"")+4,obj.indexOf("\"}"));
    conn.query(sql,[idstudents, password], function(err,data){
        if(err){
             console.log(err)    
             return res.send({
                status: 400,
                message: "登录失败"
              })   
        }
        //console.log(typeof row)
        //let data = JSON.stringify(row)
        console.log(data)
        //let data= JSON.stringify(data)
        if(data.length>0){
        //res.end(data)
        res.send({
            status: 200,
            message: "登录成功"
          })
        }
        else{
            return res.send({
                status: 202,
                message: '用户名或密码错误'
              })
        }
    })
});
router.post('/teacher',(req,res)=>{
  var sql = $sql.stu.teacher;
  var params = req.body;
  //console.log(params);
  var obj=JSON.stringify(params);
  //console.log(obj);
  let idteachers=obj.substring(obj.indexOf("ts\":")+5,obj.indexOf(",")-1);
  let password=obj.substring(obj.indexOf("d\":\"")+4,obj.indexOf("\"}"));
    conn.query(sql,[idteachers, password], function(err,data){
        if(err){
             console.log(err)    
             return res.send({
                status: 400,
                message: "登录失败"
              })   
        }
        //console.log(typeof row)
        //let data = JSON.stringify(row)
        console.log(data)
        //let data= JSON.stringify(data)
        if(data.length>0){
        //res.end(data)
        res.send({
            status: 200,
            message: "登录成功"
          })
        }
        else{
            return res.send({
                status: 202,
                message: '用户名或密码错误'
              })
        }
    })
});
router.post('/getStu',(req,res)=>{
  var sql = $sql.stu.getStu;
  //var params = req.body;
  conn.query(sql, function(err,data){
      if(err){
           console.log(err)    
           return res.send({
              status: 400,
              message: "获取失败"
            })   
      }
      //console.log(typeof row)
      //let data = JSON.stringify(row)
      //console.log(data)
      //var data= JSON.stringify(data)
      console.log(data)
      if(data.length>0){
      //res.end(data)
      res.send({
          data,
          status: 200,
          message: "获取成功",
      })
}})
}
);
router.post('/checking',(req,res)=>{
  var sql = $sql.stu.checking;
  //var params = req.body;
  conn.query(sql, function(err,data){
      if(err){
           console.log(err)    
           return res.send({
              status: 400,
              message: "获取失败"
            })   
      }
      //console.log(typeof row)
      //let data = JSON.stringify(row)
      //console.log(data)
      //var data= JSON.stringify(data)
      console.log(data)
      if(data.length>0){
      //res.end(data)
      res.send({
          data,
          status: 200,
          message: "获取成功",
      })
}})
}
);
// 增加用户接口
router.post('/addfever', (req, res) => {
  var sql = $sql.fever.check;
  var params = req.body;
  console.log(params);
  var obj=JSON.stringify(params);
  console.log(obj);
  let idstudents=obj.substring(obj.indexOf("idstudents")+15,obj.indexOf("atschool")-5);
  console.log(idstudents);
  let atschools=obj.substring(obj.indexOf("atschool")+11,obj.indexOf("fever")-3);
  console.log(atschools);
  let fever=obj.substring(obj.indexOf("fever")+8,obj.indexOf("check")-3);
  console.log(fever);
  let check=obj.substring(obj.indexOf("check")+8,obj.indexOf("}")-1);
  console.log(check);
  conn.query(sql, [idstudents, atschools, fever, check], function (err, result) {
      if (err) {
          console.log(err);
      }
      if (result) {
          jsonWrite(res, result);
          res.send({
            status: 200,
            message: "addfever"
          })
      }
  })
});

module.exports = router;

