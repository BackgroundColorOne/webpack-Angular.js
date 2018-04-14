//console.log(routes); // 返回一个方法方法，接收传递的参数
routes.$inject = ['$stateProvider','$urlRouterProvider']

export default function routes($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/')

}
