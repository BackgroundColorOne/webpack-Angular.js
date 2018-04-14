import angular from 'angular'

const template = () => (
    `
    <div> 这是nav {{navItems}}</div>
    `
)

const controller = function detailCtrl($scope, $http) {
  console.log(this + '是login的cotroller');
}

const directive = function () {
  return {
    template: template(),
    controller: ['$scope', '$rootScope'],
    navTitle: {
      navItems: '<'
    }
  }
}

export default directive