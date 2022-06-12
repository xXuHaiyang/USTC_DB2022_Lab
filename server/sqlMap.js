// sql语句
//sqlMap.js——SQL 语句映射文件，供 API 调用
var sqlMap = {
  stu: {
      query: 'select * from students where idstudents=? and password=?',
      add: 'insert into students (idstudents, name, gender,college) values (?,?,?,?)',
      jiankangma: 'insert into students (jiankangma) values (?) where idstudents=? and password=?',
      xingchengma: 'insert into students (xingchengma) values (?) where idstudents=? and password=?',
      teacher: 'select * from teachers where idteachers=? and password=?',
      getStu: 'select idstudents,gender,name,college  from students',
      checking: 'select idstudents,name,gender,college,xingchengma,jiankangma,hesuan from students',
  },
  fever:{
    check: 'insert into fever_or_not (idstudents, at_school, fever, `check`) values (?,?,?,?)',
  },
  teacher:{
    add: 'insert into students (name, idstudents, password,gender) values (?,?,?,?)',
    drop: 'delete * from students where idstudents=?',
  }

}
module.exports = sqlMap


