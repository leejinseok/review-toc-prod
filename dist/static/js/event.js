$(document).ready(function () {
});

app.controller('eventCtrl', function ($scope) {
  $scope.tab = 'ongoing';

  $scope.isTab = function (tab) {
    return $scope.tab === tab;
  }

  $scope.setTab = function (tab) {
    $scope.tab = tab;
  }
});
