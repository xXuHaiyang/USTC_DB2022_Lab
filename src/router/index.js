import Vue from "vue";
import Router from "vue-router";
import login from "@/components/Login";
import student from "@/components/Student/Student";
import teacher from "@/components/Teacher/Teacher";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "login",
      redirect: "/login"
    },
    {
      path: "/login",
      name: "login",
      component: login
    },
    {
      path: "/student",
      name: "student",
      component: student,
      children: [
        {
          path: "personalinfo",
          name: "personalinfo",
          component: () => import("@/components/Student/PersonalInfo")
        },
        {
          path: "dailycheck",
          name: "dailycheck",
          component: () => import("@/components/Student/DailyCheck")
        },
        {
          path: "markacid",
          name: "markacid",
          component: () => import("@/components/Student/MarkAcid")
        },
        {
          path: "entry",
          name: "entry",
          component: () => import("@/components/Student/Entry")
        }
      ]
    },
    {
      path: "/teacher",
      name: "teacher",
      component: teacher,
      children: [
        {
          path: "stulist",
          name: "stulist",
          component: () => import("@/components/Teacher/StuList")
        },
        {
          path: "entrychecklist",
          name: "entrychecklist",
          component: () => import("@/components/Teacher/EntryCheckList")
        },
        {
          path: "markacidstatus",
          name: "markacidstatus",
          component: () => import("@/components/Teacher/MarkAcidStatus")
        }
      ]
    }
  ]
});
