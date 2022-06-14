var models = require("../db");
var express = require("express");
var router = express.Router();
var mysql = require("mysql");
var $sql = require("../sqlMap");

// 连接数据库
var conn = mysql.createConnection(models.mysql);

conn.connect();
var jsonWrite = function(res, ret) {
  if (typeof ret === "undefined") {
    res.json({
      code: "1",
      msg: "操作失败"
    });
  } else {
    res.json(ret);
  }
};
// 增加用户接口
router.post("/addfever", (req, res) => {
  var sql = $sql.fever.check;
  var params = req.body;
  //console.log(params);
  var obj = JSON.stringify(params);
  //console.log(obj);
  let idstudents = obj.substring(obj.indexOf('ts":') + 5, obj.indexOf(",") - 1);
  let check = 1;
  conn.query(sql, [idstudents, check], function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
      res.send({
        status: 200,
        message: "登录成功"
      });
    }
  });
});
