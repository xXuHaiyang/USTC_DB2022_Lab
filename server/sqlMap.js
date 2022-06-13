// sql语句
//sqlMap.js——SQL 语句映射文件，供 API 调用
var sqlMap = {
  stu: {
      query: 'select * from students where idstudents=? and password=?',
      add: 'insert into students (idstudents, name, gender,college) values (?,?,?,?)',
      jiankangma: 'update students set jiankangma =\'r\' where idstudents=? ',
      xingchengma: 'update students set xingchengma =\'r\' where idstudents=? ',
      hesuan : 'update students set hesuan =\'r\' where idstudents=? ',
      teacher: 'select * from teachers where idteachers=? and password=?',
      getStu: 'select idstudents,gender,name,college  from students',
      checking: 'select idstudents,name,gender,college,xingchengma,jiankangma,hesuan from students',
      baobei: 'insert into baobei_term (idstudents, begin_place, end_place, description, reason) values (?,?,?,?,?)',
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


