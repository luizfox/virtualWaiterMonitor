'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope, Order2, Call) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

		function getOrders() {
			return Order2.find(
				{filter:
					{ where: { delivered: false} }
				}
			) ;
		};

		function markAsDelivered(order){
			var index = $scope.orders.indexOf(order);
			$scope.orders.splice(index,1);

			order.delivered = true;
			order.$save();
		}

		$scope.orders = getOrders();
		$scope.markAsDelivered = markAsDelivered;


		$scope.metodo1 = function (){
			console.log('chamando metodo1');
			$scope.numero = $scope.numero + 1;
			// Menu.create({
			// 	  title: "string-angular",
			// 	  description: "string",
			// 	  image: "string",
			// 	  price: 0
			// 	});
		};

		function getCalls(){
			return Call.find(
				{filter:
					{ where: { answered: false} }
				}
			) ;
		}//calls

		function markAsAnswered(call){
			var index = $scope.calls.indexOf(call);
			$scope.calls.splice(index,1);

			call.answered = true;
			call.$save();
		}

		$scope.calls = getCalls();
		$scope.markAsAnswered = markAsAnswered;



  }); // MainCtrl
