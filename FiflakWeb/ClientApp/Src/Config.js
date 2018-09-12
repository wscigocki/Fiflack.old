Config.$inject = ["$stateProvider", "$urlRouterProvider"];
function Config($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/players');

    $stateProvider

        .state('players', {
            url: '/players',
            templateUrl: "ClientApp/Src/States/Players/Players.html",
            controller: 'PlayersController as $ctrl'
        });

}