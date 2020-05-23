import Vue from 'vue'
import Router from 'vue-router'
import Button from '../components/Button'
import ButtonDetail from '../components/ButtonDetail'
// import Tables from '../components/Tables'
import Layout from '../components/Layout'
import Input from '../components/Input'
import Message from '../components/Message'
import Table from '../components/Table'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/button', name: 'Button', component: Button},
    {path: '/buttondetail', name: 'ButtonDetail', component: ButtonDetail},
    // {path: '/tables', name: 'Tables', component: Tables},
    {path: '/layout', name: 'Layout', component: Layout},
    {path: '/input', name: 'Input', component: Input},
    {path: '/message', name: 'Message', component: Message},
    {path: '/table', name: 'Table', component: Table},
  ]
})
