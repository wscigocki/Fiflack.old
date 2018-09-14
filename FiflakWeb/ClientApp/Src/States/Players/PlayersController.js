function PlayersController($uibModal, $log, PlayersService) {
    var $ctrl = this;

    $ctrl.Name = "Players screen";
    $ctrl.Players = [];
    $ctrl.modalWindowVisible = false;

    $ctrl.PlayerName = 'new player';
    $ctrl.ModalWindowTitle = '';

    $ctrl.GetPlayers = function () {

        var playersPromise = PlayersService.GetPlayers();
        playersPromise.then(
            function (response) {
                $ctrl.Players = response.data;
            },
            function (error) {
                console.log('error: ' + response.ExceptionMessage);
            }
        );
    };

    $ctrl.ShowNewPlayerWindow = function () {

        console.log($ctrl.modalWindowVisible);

        $ctrl.ModalWindowTitle = 'Dodaj nowego gracza';
        //$ctrl.modalWindowVisible = true;

        $ctrl.open();

        console.log($ctrl.modalWindowVisible);

        //$ctrl.ShowModalWindow();
    };

    $ctrl.open = function (size, parentSelector) {
        var parentElem = parentSelector ?
            angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
        var modalInstance = $uibModal.open({
            animation: true,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'ClientApp/Src/States/Players/NewPlayerWindow.html',
            controller: 'ModalInstanceCtrl',
            controllerAs: '$ctrl',
            size: 'sm',
            appendTo: parentElem,
            //resolve: {
            //    items: function () {
            //        return $ctrl.items;
            //    }
            //}
        });

        modalInstance.result.then(function (selectedItem) {
            $log.info('Modal approved at: ' + new Date());
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };



    //$ctrl.ShowModalWindow = function () {
    //    var element = angular.element('#exampleModal');
    //    console.log(element);
    //    element.modal('show');
    //};

    //$ctrl.HideModalWindow = function () {
    //    var element = angular.element('#exampleModal');
    //    console.log(element);
    //    element.modal('hide');
    //};

    $ctrl.AddPlayer = function () {

        //$ctrl.HideModalWindow();

        var promise = PlayersService.AddPlayer('Default name');
        promise.then(
            function (response) {
                $ctrl.GetPlayers();
            },
            function (response) {
                console.log('error: ' + response.data.Message);
                console.log(response);
            }
        );
    };

    $ctrl.DeletePlayer = function (id) {

        var promise = PlayersService.DeletePlayer(id);
        promise.then(
            function (response) {
                $ctrl.GetPlayers();
            },
            function (response) {
                console.log('error: ' + response.ExceptionMessage);
            }
        );
    };




    $ctrl.GetPlayers();
}