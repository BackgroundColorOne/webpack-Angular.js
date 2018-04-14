import angular from 'angular'

const template = () => (
    `
    <div> 这是home</div>
    `
)

const controller = function detailCtrl($scope, $http) {
  console.log(this + '是home的cotroller');
}

export default {
  template: template(),
  controller: ['$scope', '$http', controller]
}