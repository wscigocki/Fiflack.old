
(function () {
    "use strict";

    angular.module('fiflak', ['ui.router'])

        .config(Config)

        .service('PlayersService', PlayersService)

        .controller('PlayersController', PlayersController)
        .controller('ModalWindowController', ModalWindowController)

        .component('modalWindow', {
            templateUrl: 'ClientApp/Src/Components/ModalWindow/ModalWindow.html',
            controller: 'ModalWindowController',
            transclude: true,
            bindings: {
                title: '<',
                btnCancelCaption: '@',
                btnOkCaption: '@',

                visible: '='
            }

        });

})();