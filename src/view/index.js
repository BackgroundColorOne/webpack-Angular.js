import angular      from 'angular'
import uirouter     from '@uirouter/angularjs'
import router       from './index.routes'
import $            from 'jquery'
import homeIndex    from  './component/home/index'
import detailIndex  from './component/detail/index'
import listIndex    from './component/list/index'
import loginIndex   from './component/login/index'
import navbar       from './directive/navBar/index'

export default angular.module('main', [uirouter])
    .config(router)
    //.directive('navBar', navbar)
    .component('home', homeIndex)
    .component('detail', detailIndex)
    .component('list', listIndex)
    .component('login', loginIndex)
    .name