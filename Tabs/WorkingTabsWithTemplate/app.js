var app = angular.module('plunker', ['mgcrea.ngStrap']);

app.controller('MainCtrl', function($scope) {
 $scope.tabs = [
  {
      title: "Tab 1",
      show: true, //show this tab shows by default
      templateUrl: "tab1.html"
  },
  {
      title: "Tab 2",
      templateUrl: "tab2.html"
  }
];
});
