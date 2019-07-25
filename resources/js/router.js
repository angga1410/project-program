import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthService from './services/auth'

/*
 |--------------------------------------------------------------------------
 | Admin Views
 |--------------------------------------------------------------------------|
 */

// Dashboard
import Basic from './views/admin/dashboard/Basic.vue'
import Ecommerce from './views/admin/dashboard/Ecommerce.vue'
import Finance from './views/admin/dashboard/Finance.vue'

// Layouts
import LayoutBasic from './views/layouts/LayoutBasic.vue'
import LayoutHorizontal from './views/layouts/LayoutHorizontal.vue'
import LayoutIconSidebar from './views/layouts/LayoutIconSidebar.vue'
import LayoutLogin from './views/layouts/LayoutLogin.vue'
import LayoutLogin2 from './views/layouts/LayoutLogin2.vue'
import LayoutLogin3 from './views/layouts/LayoutLogin3.vue'
import LayoutFront from './views/layouts/LayoutFront.vue'

// Basic UI
import Buttons from './views/admin/basic-ui/Buttons.vue'
import Cards from './views/admin/basic-ui/Cards.vue'
import Typography from './views/admin/basic-ui/Typography.vue'
import Tables from './views/admin/basic-ui/Tables.vue'
import ProgressBar from './views/admin/basic-ui/ProgressBars.vue'

// Components
import Notifications from './views/admin/components/Notifications.vue'
import SweetModals from './views/admin/components/SweetModals.vue'
import VueCarousel from './views/admin/components/VueCarousel.vue'
import VueDropzone from './views/admin/components/VueDropzone.vue'
import VueTable from './views/admin/components/VueTables.vue'
import VueTabs from './views/admin/components/VueTabs.vue'
import VueTooltips from './views/admin/components/VueTooltips.vue'
import VueCollapse from './views/admin/components/VueCollapse.vue'

// Charts
import Chartjs from './views/admin/charts/Chartjs.vue'


// Icons
import Fontawesome from './views/admin/icons/Fontawesome.vue'
import Fpsline from './views/admin/icons/FpsLine.vue'
import IcoMoon from './views/admin/icons/IcoMoon.vue'
import Line from './views/admin/icons/Line.vue'
import Meteo from './views/admin/icons/Meteo.vue'

// Forms
import General from './views/admin/forms/General.vue'
import Advanced from './views/admin/forms/Advanced.vue'
import Layouts from './views/admin/forms/FormLayouts.vue'
import VeeValidate from './views/admin/forms/VeeValidate.vue'
import Vuelidate from './views/admin/forms/Vuelidate.vue'

// Gallery
import ImageGallery from './views/admin/gallery/ImageGallery.vue'
import VideoGallery from './views/admin/gallery/VideoGallery.vue'

// Apps
import TodosApp from './views/admin/apps/todos/TodosApp.vue'
import MailboxApp from './views/admin/apps/mailbox/MailBoxApp.vue'

// Users
import Users from './views/admin/page/User/User.vue'
import AddUsers from './views/admin/page/User/AddUser.vue'
import Profile from './views/admin/users/Profile.vue'

// Settings
import Settings from './views/admin/Settings.vue'

// Page
import Portofolio from './views/admin/page/Portofolio/Portofolio.vue'
import ViewPortofolio from './views/admin/page/Portofolio/ViewPortofolio.vue'
import AddPortofolio from './views/admin/page/Portofolio/AddPortofolio.vue'

import Milestone from './views/admin/page/Milestone/Milestone.vue'
import ViewMilestone from './views/admin/page/Milestone/ViewMilestone.vue'
import AddMilestone from './views/admin/page/Milestone/AddMilestone.vue'

import Project from './views/admin/page/Project/Project.vue'
import ViewProject from './views/admin/page/Project/ViewProject.vue'
import AddProject from './views/admin/page/Project/AddProject.vue'

import Program from './views/admin/page/Program/Program.vue'
import ViewProgram from './views/admin/page/Program/ViewProgram.vue'
import AddProgram from './views/admin/page/Program/AddProgram.vue'

import Task from './views/admin/page/Task/Task.vue'
import ViewTask from './views/admin/page/Task/ViewTask.vue'
import AddTask from './views/admin/page/Task/AddTask.vue'
import TaskTemplate from './views/admin/page/TaskTemplate/TaskTemplate.vue'
import AddTaskTemplate from './views/admin/page/TaskTemplate/AddTemplate.vue'


import Manager from './views/admin/page/Manager/Manager.vue'
import AddManager from './views/admin/page/Manager/AddManager.vue'


import Employee from './views/admin/page/Employee/Employee.vue'
import AddEmployee from './views/admin/page/Employee/AddEmployee.vue'
/*
 |--------------------------------------------------------------------------
 | Other
 |--------------------------------------------------------------------------|
 */

// Auth
import Login from './views/auth/Login.vue'
import Register from './views/auth/Register.vue'

import NotFoundPage from './views/errors/404.vue'

/*
 |--------------------------------------------------------------------------
 | Frontend Views
 |--------------------------------------------------------------------------|
 */

import Home from './views/layouts/LayoutHome.vue'

Vue.use(VueRouter)

const routes = [

  /*
   |--------------------------------------------------------------------------
   | Layout Routes for DEMO
   |--------------------------------------------------------------------------|
   */

  {
    path: '/admin/layouts',
    component: LayoutBasic,
    children: [
      {
        path: 'sidebar',
        component: Basic
      }
    ]
  },
  {
    path: '/admin/layouts',
    component: LayoutHorizontal,
    children: [
      {
        path: 'horizontal',
        component: Basic
      }
    ]
  },
  {
    path: '/admin/layouts',
    component: LayoutIconSidebar,
    children: [
      {
        path: 'icons-sidebar',
        component: Basic
      }
    ]
  },

  /*
   |--------------------------------------------------------------------------
   | Frontend Routes
   |--------------------------------------------------------------------------|
   */

  {
    path: '/',
    component: LayoutFront,
    children: [
      {
        path: '/',
        component: Home,
        name: 'home'
      }
    ]
  },

  /*
   |--------------------------------------------------------------------------
   | Admin Backend Routes
   |--------------------------------------------------------------------------|
   */
  {
    path: '/admin',
    component: LayoutBasic, // Change the desired Layout here
    meta: { requiresAuth: true },
    children: [
      // Dashboard
      {
        path: 'dashboard/basic',
        component: Basic,
        name: 'dashboard'
      },
      {
        path: 'dashboard/ecommerce',
        component: Ecommerce
      },
      {
        path: 'dashboard/finance',
        component: Finance
      },

      // Basic UI
      {
        path: 'basic-ui/buttons',
        component: Buttons
      },
      {
        path: 'basic-ui/cards',
        component: Cards
      },
      {
        path: 'basic-ui/typography',
        component: Typography
      },
      {
        path: 'basic-ui/tables',
        component: Tables
      },

      {
        path: 'basic-ui/progress-bars',
        component: ProgressBar
      },

      // Components
      {
        path: 'components/vue-tabs',
        component: VueTabs
      },
      {
        path: 'components/vue-collapse',
        component: VueCollapse
      },
      {
        path: 'components/notifications',
        component: Notifications
      },
      {
        path: 'components/vue-dropzone',
        component: VueDropzone
      },
      {
        path: 'components/sweet-modals',
        component: SweetModals
      },
      {
        path: 'components/vue-tables',
        component: VueTable
      },
      {
        path: 'components/vue-carousel',
        component: VueCarousel
      },
      {
        path: 'components/tooltips',
        component: VueTooltips
      },

      // Charts
      {
        path: 'charts/chartjs',
        component: Chartjs
      },

      //  Icons
      {
        path: 'icons/fontawesome',
        component: Fontawesome
      },
      {
        path: 'icons/fpsline',
        component: Fpsline
      },
      {
        path: 'icons/icomoon',
        component: IcoMoon
      },
      {
        path: 'icons/line',
        component: Line
      },
      {
        path: 'icons/meteo',
        component: Meteo
      },

      // Forms
      {
        path: 'forms/general',
        component: General
      },
      {
        path: 'forms/advanced',
        component: Advanced
      },
      {
        path: 'forms/layouts',
        component: Layouts
      },
      {
        path: 'forms/vuelidate',
        component: Vuelidate
      },
      {
        path: 'forms/vee-validate',
        component: VeeValidate
      },

      // Gallery
      {
        path: 'gallery/image',
        component: ImageGallery
      },
      {
        path: 'gallery/video',
        component: VideoGallery
      },

      // Users
      {
        path: 'users/profile',
        component: Profile
      },
      {
        path: 'users/all',
        component: Users
      },
      {
        path: 'users/create',
        component: AddUsers
      },

      // Apps
      {
        path: 'apps/mailbox',
        component: MailboxApp
      },
      {
        path: 'apps/todos',
        component: TodosApp
      },

      // Settings
      {
        path: 'settings',
        component: Settings
      },

      // Page
      {
        path: 'page/Portofolio',
        component: Portofolio,
        name: 'portfolio',
        props: true,
      },
      {
        path: 'page/ViewPortofolio/:id',
        component: ViewPortofolio,
        name: 'view-portfolio',
        props: true,
      },
      {
        path: 'page/AddPortofolio',
        component: AddPortofolio
      },



      {
        path: 'page/Milestone',
        component: Milestone
      },
      {
        path: 'page/ViewMilestone',
        component: ViewMilestone,
        name: 'view-milestone',
        props: true,
      },
      {
        path: 'page/AddMilestone',
        component: AddMilestone,
        name: 'add-milestone',
        props: true,
      },



      {
        path: 'page/Project',
        component: Project
      },
      {
        path: 'page/ViewProject',
        component: ViewProject,
        name: 'view-project',
        props: true,
        
      },
      {
        path: 'page/AddProject',
        component: AddProject
      },



      {
        path: 'page/Program',
        component: Program
      },
      {
        path: 'page/ViewProgram',
        component: ViewProgram,
        name: 'view-program',
        props: true,
      },
      {
        path: 'page/AddProgram',
        component: AddProgram
      },


      {
        path: 'page/Task',
        component: Task
      },
      {
        path: 'page/ViewTask',
        component: ViewTask
      },
      {
        path: 'page/AddTask',
        component: AddTask
      },
      {
        path: 'page/TaskTemplate',
        component: TaskTemplate
      },
      {
        path: 'page/AddTemplate',
        component: AddTaskTemplate
      },


      {
        path: 'page/Manager',
        component: Manager
      },
      {
        path: 'page/AddManager',
        component: AddManager
      },


      {
        path: 'page/Employee',
        component: Employee
      },
      {
        path: 'page/AddEmployee',
        component: AddEmployee
      }
    ]
  },

  /*
   |--------------------------------------------------------------------------
   | Auth & Registration Routes
   |--------------------------------------------------------------------------|
   */

  {
    path: '/',
    component: LayoutLogin,
    children: [
      {
        path: 'login',
        component: Login,
        name: 'login'
      },
      {
        path: 'register',
        component: Register,
        name: 'register'
      }
    ]
  },

  // Demo Pages
  {
    path: '/admin/pages',
    component: LayoutLogin,
    children: [
      {
        path: 'login',
        component: Login
      },
      {
        path: 'register',
        component: Register
      }
    ]
  },
  {
    path: '/admin/pages',
    component: LayoutLogin2,
    children: [
      {
        path: 'login-2',
        component: Login
      },
      {
        path: 'register-2',
        component: Register
      }
    ]
  },
  {
    path: '/admin/pages',
    component: LayoutLogin3,
    children: [
      {
        path: 'login-3',
        component: Login
      },
      {
        path: 'register-3',
        component: Register
      }
    ]
  },

  //  DEFAULT ROUTE
  { path: '*', component: NotFoundPage }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
  //  If the next route is requires user to be Logged IN
  if (to.matched.some(m => m.meta.requiresAuth)) {
    return AuthService.check().then(authenticated => {
      if (!authenticated) {
        return next({ path: '/login' })
      }

      return next()
    })
  }

  return next()
})

export default router
