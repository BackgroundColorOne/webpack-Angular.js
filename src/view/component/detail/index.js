import angular from 'angular'

const template = () => (
    `
    <div> 这是detail</div>
    `
)

const controller = function detailCtrl($scope, $http) {
  console.log(this + '是detail的cotroller');
}

export default {
  template: template(),
  controller: ['$scope', '$http', controller]
}