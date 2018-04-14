import angular from 'angular'

const template = () => (
    `
    <div> 这是nav {{navItems}}</div>
    `
)

const controller = function detailCtrl($scope, $rootscope) {
  console.log(this + '是login的cotroller');
}

const directive = function () {
  return {
    template: template(),
    controller: ['$scope', '$state', '$rootScope', '$timeout',, controller],
    navTitle: {
      navItems: '<'
    }
  }
}