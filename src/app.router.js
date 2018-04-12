/**
 * Created by Administrator on 2018/4/12.
 */
routes.$inject = ['$urlRouterProvider']

export default function routes($urlRouterProvider) {
  $urlRouterProvider.otherwise('/')
}
