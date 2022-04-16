import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "@/views/home/Home";
import Login from "@/views/login/Login";

import Register from "@/views/register/Register";
import Blogs from "@/views/Blogs";
import BlogEdit from "@/views/BlogEdit";
import BlogDetail from "@/views/BlogDetail";
// import P_Register from "@/views/P_Register";
import Personal_Blog from "@/views/Personal_Blog";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    redirect:{name:"PersonalBlog"}
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: Blogs
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  // {
  //   path: '/P_Register',
  //   name: 'P_Register',
  //   component: P_Register
  // },
  {
    path: '/register/Register',
    name: 'register',
    component: Register
  },
  {
    path: '/blog/add',
    name: 'BlogEdit',
    component: BlogEdit
  },
  {
    path: '/blog/:blogId',
    name: 'BlogDetail',
    component: BlogDetail
  },
  {
    path: '/blog/:blogId/edit',
    name: 'BlogEdit',
    component: BlogEdit
  },
  {
    path: '/Personal_Blog',
    name: 'PersonalBlog',
    component: Personal_Blog
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
