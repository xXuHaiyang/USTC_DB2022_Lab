// sql语句
//sqlMap.js——SQL 语句映射文件，供 API 调用
var sqlMap = {
  stu: {
      query: 'select * from students where idstudents=? and password=?',
      add: 'insert into students (idstudents, password) values (?,?)',
      jiankangma: 'insert into students (jiankangma) values (?) where idstudents=? and password=?',
      xingchengma: 'insert into students (xingchengma) values (?) where idstudents=? and password=?',
  }

}
module.exports = sqlMap


