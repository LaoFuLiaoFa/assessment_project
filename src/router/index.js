import Vue from 'vue'
import VueRouter from 'vue-router'
import logIn from '../components/logIn.vue'
import registerIn from '../components/registerIn.vue'
import forgotPassword from '../components/forgotPassword.vue'
import schoolProfile from '../components/schoolProfile.vue'
import fillProfile from '../components/fillProfile.vue'
import readInstructions from '../components/readInstructions.vue'
import homeAll from '../components/homeAll.vue'
import navMenuHome from '../components/navMenuHome.vue'
import styleTest from '../components/styleTest.vue'
import styleTestCheck from '../components/styleTestCheck.vue'
import pDPTest from '../components/pDPTest.vue'
import pDPTestCheck from '../components/pDPTestCheck.vue'
import hollandTest from '../components/hollandTest.vue'
import hollandTestCheck from '../components/hollandTestCheck.vue'
import endPage from '../components/endPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/logIn'
  },
  {
    path: '/logIn',
    component: logIn
  },
  {
    path: '/registerIn',
    component: registerIn
  },
  {
    path: '/forgotPassword',
    component: forgotPassword
  },
  {
    path: '/homeAll',
    component: homeAll,
    redirect: '/schoolProfile',
    children: [
      {
        path: '/schoolProfile',
        component: schoolProfile
      },
      {
        path: '/fillProfile',
        component: fillProfile
      },
      {
        path: '/readInstructions',
        component: readInstructions
      },
      {
        path: '/navMenuHome',
        component: navMenuHome
      },
      {
        path: '/styleTest',
        component: styleTest
      },
      {
        path: '/styleTestCheck',
        component: styleTestCheck
      },
      {
        path: '/pDPTest',
        component: pDPTest
      },
      {
        path: '/pDPTestCheck',
        component: pDPTestCheck
      },
      {
        path: '/hollandTest',
        component: hollandTest
      },
      {
        path: '/hollandTestCheck',
        component: hollandTestCheck
      },
      {
        path: '/endPage',
        component: endPage
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
