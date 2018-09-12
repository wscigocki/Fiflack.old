(function () {
    "use strict";

    angular.module('fiflak', ['ui.router'])

        .config(Config)

        .service('PlayersService', PlayersService)

        .controller('PlayersController', PlayersController);

})();