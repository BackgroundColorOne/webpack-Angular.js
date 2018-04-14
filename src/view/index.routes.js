routes.$inject = ['$stateProvider']

export default function routes ($stateProvider) {
  $stateProvider
      .state('index', {
        url: '/',
        //abstract: true, // 加上这个就不能正常匹配路由为什么呢？
        template: '<div>我是index</div>',
        //resolve: 可以直接依赖现有的服务
      })
      .state('home', {
        url: '/home',
        template: '<home></home>'
      })
      .state('detail', {
        url: '/detail',
        template: '<detail></detail>'
      })
      .state('list', {
        url: '/list',
        template: '<list></list>'
      })
      .state('login', {
        url: '/login',
        template: '<login></login>'
      })
}
