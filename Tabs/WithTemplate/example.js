angular.module('ui.bootstrap.demo', ['ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('TabsDemoCtrl', function ($scope, $window) {
  $scope.tabs = [
    //{ title:'Dynamic Title 1', content:'Dynamic content 1' },
    //{ title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true },
    { title:'TJs Tab', templateUrl: 'template.html' }// content:'TJs Custom Content' }
  ];

  $scope.alertMe = function() {
    setTimeout(function() {
      $window.alert('You\'ve selected the alert tab!');
    });
  };
});