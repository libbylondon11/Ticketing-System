var app=angular.module('appTicket', []);
app.controller("FirstController", ['$scope', '$http', function($scope, $http){
  $scope.ticket={};
  $scope.tickets=[];
  var moreTickets=function() {
    return $http.get('/tickets').then(function(response){
      if(response.status !==200){
        throw new Error('Failed to get tickets');
      }
      $scope.ticket={};
      $scope.tickets=response.data;
      return response.data;
    })
  };
  $scope.add=function(ticket){
    return $http.post('/tickets', ticket).then(moreTickets());
  };
  moreTickets();
}]);
