
(function () {
    "use strict";

    angular.module('fiflak', ['ui.router', 'ngAnimate', 'ngSanitize', 'ui.bootstrap'])

        .config(Config)

        .service('PlayersService', PlayersService)

        .controller('PlayersController', PlayersController)
        .controller('ModalWindowController', ModalWindowController)

        .controller('ModalInstanceCtrl', function ($uibModalInstance) {
            var $ctrl = this;

            $ctrl.ok = function () {
                $uibModalInstance.close($ctrl.selected.item);
            };

            $ctrl.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };
        })

        .component('modalWindow', {
            templateUrl: 'ClientApp/Src/Components/ModalWindow/ModalWindow.html',
            controller: 'ModalWindowController',
            transclude: true,
            bindings: {
                title: '@',
                btnCancelCaption: '@',
                btnOkCaption: '@',
            }

        });

})();