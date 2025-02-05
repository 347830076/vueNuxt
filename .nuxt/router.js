import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _782257ab = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _11f77da0 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _2d307ec8 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _7c32bd48 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _c9360738 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _6c537dee = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _62fd0095 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _782257ab,
    children: [{
      path: "",
      component: _11f77da0,
      name: "home"
    }, {
      path: "/login",
      component: _2d307ec8,
      name: "login"
    }, {
      path: "/register",
      component: _2d307ec8,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _7c32bd48,
      name: "profile"
    }, {
      path: "/settings",
      component: _c9360738,
      name: "settings"
    }, {
      path: "/editor",
      component: _6c537dee,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _62fd0095,
      name: "article"
    }]
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decodeURIComponent(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
