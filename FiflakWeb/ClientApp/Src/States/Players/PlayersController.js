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

        $ctrl.openEditDlg();


    };

    $ctrl.openEditDlg = function () {
        var modalInstance = $ctrl.ShowDlg(true);

        modalInstance.result.then(function (player) {
            $log.info('Modal approved', player);
            $ctrl.AddPlayer(player);
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };

    $ctrl.ShowEditDlg = function (playerId) {

        var promise = PlayersService.GetPlayer(playerId);
        promise.then(
            function (response) {
                var modalInstance = $ctrl.ShowDlg(false, response.data.Name, response.data.Email);

                modalInstance.result.then(function (player) {
                    $log.info('Modal approved', player);
                    $ctrl.UpdatePlayer(playerId, player);
                }, function () {
                    $log.info('Modal dismissed at: ' + new Date());
                });
            },
            function (response) {
                console.log('error: ' + response.data.Message);
                console.log(response);
            }
        );
    };

    $ctrl.ShowDlg = function (newPlayerMode, playerName, playerEmail) {
        var modalInstance = $uibModal.open({
            animation: true,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'ClientApp/Src/States/Players/EditPlayerDlg.html',
            controller: 'EditPlayerDlgController',
            controllerAs: '$ctrl',
            size: 'sm',
            resolve: {
                dlgSetup: function () {
                    return {
                        newPlayerMode: newPlayerMode,
                        playerName: playerName,
                        playerEmail: playerEmail
                    }
                }
            }
        });

        return modalInstance;
    };

    $ctrl.AddPlayer = function (newPlayer) {

        var promise = PlayersService.AddPlayer(newPlayer);
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

    $ctrl.UpdatePlayer = function (playerId, player) {

        var promise = PlayersService.UpdatePlayer(playerId, player);
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