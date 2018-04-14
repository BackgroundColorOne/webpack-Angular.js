import angular from 'angular'

const template = () => (
    `
    <div> 这是list</div>
    `
)

const controller = function detailCtrl($scope, $http) {
  console.log(this + '是list的cotroller');
}

export default {
  template: template(),
  controller: ['$scope', '$http', controller]
}