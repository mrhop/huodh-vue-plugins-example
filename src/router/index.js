import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/index/dashboard/Dashboard'
import Panel from '@/components/index/panel/Panel'
import Tab from '@/components/index/tab/Tab'
import Modal from '@/components/index/modal/Modal'
import Table from '@/components/index/table/Table'
import Form from '@/components/index/form/Form'
import Tree from '@/components/index/tree/Tree'
import Date from '@/components/index/date/Date'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    }, {
      path: '/panel',
      name: 'Panel',
      component: Panel
    }, {
      path: '/tab',
      name: 'Tab',
      component: Tab
    }, {
      path: '/modal',
      name: 'Modal',
      component: Modal
    }, {
      path: '/table',
      name: 'Table',
      component: Table
    }, {
      path: '/form',
      name: 'Form',
      component: Form
    }, {
      path: '/tree',
      name: 'Tree',
      component: Tree
    }, {
      path: '/date',
      name: 'Date',
      component: Date
    }
  ]
})
