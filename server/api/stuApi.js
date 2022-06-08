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
    //console.log(obj);
    let idstudents=obj.substring(obj.indexOf("ts\":")+5,obj.indexOf(",")-1);
    let password=obj.substring(obj.indexOf("d\":\"")+4,obj.indexOf("\"}"));
    conn.query(sql, [idstudents, password], function (err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
            res.send({
              status: 200,
              message: "登录成功"
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

router.get('/login',(req,res)=>{
    var sql = 'select * from students where idstudents = ? and password = ?'
    conn.query(sql, [req.query.name, req.query.password], (err, data) => {
        if(err) {
            return res.send({
              status: 400,
              message: "登录失败"
            })
        }
        
        if(data.length > 0) {
          res.send({
            status: 200,
            message: "登录成功"
          })
        }else{
          res.send({
            status: 202,
            message: '用户名或密码错误'
          })
        }
    })
});
module.exports = router;

